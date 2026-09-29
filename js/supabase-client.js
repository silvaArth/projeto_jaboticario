// ============================================================
// CLIENTE E INTEGRAÇÃO SUPABASE - PULMÃO DE CAIXAS BOTICÁRIO
// ============================================================

window.supabaseClient = null;

function getSupabaseCredentials() {
    const envUrl = (typeof window !== 'undefined' && window.ENV && window.ENV.SUPABASE_URL) ? window.ENV.SUPABASE_URL : '';
    const envKey = (typeof window !== 'undefined' && window.ENV && window.ENV.SUPABASE_ANON_KEY) ? window.ENV.SUPABASE_ANON_KEY : '';
    return {
        url: localStorage.getItem('SUPABASE_URL') || envUrl || '',
        key: localStorage.getItem('SUPABASE_ANON_KEY') || envKey || ''
    };
}

function initSupabase(url, key) {
    if (!url || !key) return false;
    try {
        if (window.supabase && window.supabase.createClient) {
            window.supabaseClient = window.supabase.createClient(url, key);
            console.log("✓ Cliente Supabase inicializado com sucesso!");
            return true;
        }
    } catch (e) {
        console.error("Erro ao inicializar Supabase:", e);
    }
    return false;
}

function atualizarIndicadorSupabase(conectado) {
    const badge = document.getElementById('statusSupabaseBadge');
    if (badge) {
        if (conectado) {
            badge.style.background = '#10b981';
            badge.innerHTML = '☁️ Supabase Online';
        } else {
            badge.style.background = '#ef4444';
            badge.innerHTML = '☁️ Supabase Desconectado';
        }
    }
}

// Sincronizar dados entre Supabase e LocalStorage
async function sincronizarDadosComSupabase() {
    if (!window.supabaseClient) return;
    
    try {
        console.log("☁️ Carregando caixas do Supabase...");
        const { data: caixasSupa, error: errC } = await window.supabaseClient.from('caixas').select('*');
        if (!errC && Array.isArray(caixasSupa)) {
            if (caixasSupa.length === 0) {
                console.log("☁️ Supabase retornado sem caixas (0 alocações). Limpando estoque local.");
                if (typeof window.setBoxes === 'function') {
                    window.setBoxes([]);
                } else {
                    localStorage.setItem('p5_1_boxes', '[]');
                }
            } else {
                console.log(`☁️ Supabase retornou ${caixasSupa.length} caixa(s). Atualizando estoque local.`);
                const mappedBoxes = caixasSupa.map(c => {
                    const code = c.codigo_produto || '';
                    const name = c.descricao || (typeof window.lookup === 'function' ? window.lookup(code) : ('Código ' + code));
                    const fam = (typeof window.family === 'function') ? window.family(name) : 'OUTROS';
                    return {
                        box: c.box_code || ('CX-' + String(c.id).padStart(6, '0')),
                        nf: c.nota_fiscal || '—',
                        serie: c.serie || '',
                        fornecedor: c.fornecedor || '',
                        operator: c.operador || 'Supabase',
                        address: c.posicao_id,
                        status: 'ARMAZENADA',
                        entrada: c.alocado_em || new Date().toISOString(),
                        productCodes: [code],
                        products: [{ code: code, name: name, family: fam }],
                        unidadesPorCaixa: c.cx_por_palete || 1,
                        origem: c.origem || 'SUPABASE'
                    };
                });
                if (typeof window.setBoxes === 'function') {
                    window.setBoxes(mappedBoxes);
                } else {
                    localStorage.setItem('p5_1_boxes', JSON.stringify(mappedBoxes));
                }
            }
        }
        
        console.log("☁️ Carregando movimentações do Supabase...");
        const { data: movsSupa, error: errM } = await window.supabaseClient.from('movimentacoes').select('*').order('id', { ascending: false }).limit(500);
        if (!errM && Array.isArray(movsSupa)) {
            const mappedMoves = movsSupa.map(m => ({
                when: m.data_hora || new Date().toISOString(),
                action: m.tipo || 'MOVIMENTAÇÃO',
                box: '—',
                nf: '—',
                address: m.destino || m.origem || '',
                operator: m.usuario || 'Operador',
                productCodes: m.sku || '',
                productNames: m.descricao || ''
            }));
            if (typeof window.setMoves === 'function') {
                window.setMoves(mappedMoves);
            }
        }

        if (typeof window.dash === 'function') window.dash();
        if (typeof window.map === 'function') window.map();
        if (typeof window.ult === 'function') window.ult();
        
    } catch (e) {
        console.error("Erro na sincronização:", e);
    }
}

let isLocalSaving = false;

// Sincronizar inserção de caixas específicas no Supabase (atômica)
async function syncAddBoxesToSupabase(newBoxes) {
    if (!window.supabaseClient || !newBoxes || !newBoxes.length) return { success: true };
    isLocalSaving = true;
    try {
        const addresses = newBoxes.map(b => b.address).filter(Boolean);
        if (addresses.length > 0) {
            await window.supabaseClient.from('caixas').delete().in('posicao_id', addresses);
        }
        
        const caixasInsert = newBoxes.map(b => {
            const prod = (b.products && b.products[0]) ? b.products[0] : {};
            const code = (b.productCodes && b.productCodes[0]) ? b.productCodes[0] : (prod.code || '');
            return {
                posicao_id: b.address,
                codigo_produto: code,
                descricao: prod.name || '',
                cx_por_palete: b.unidadesPorCaixa || 0,
                alocado_em: b.entrada || b.addedAt || new Date().toISOString()
            };
        });
        const { data, error } = await window.supabaseClient.from('caixas').insert(caixasInsert).select();
        if (error) {
            console.error("Erro ao inserir caixas no Supabase:", error);
            return { success: false, error: error.message };
        }
        return { success: true, data };
    } catch (err) {
        console.error("Exceção ao adicionar caixas no Supabase:", err);
        return { success: false, error: err.message || 'Erro de rede ao conectar com Supabase.' };
    } finally {
        setTimeout(() => { isLocalSaving = false; }, 1200);
    }
}
window.syncAddBoxesToSupabase = syncAddBoxesToSupabase;

// Sincronizar remoção de caixa por endereço no Supabase (atômica)
async function syncRemoveBoxFromSupabase(address) {
    if (!window.supabaseClient || !address) return { success: true };
    isLocalSaving = true;
    try {
        const { data, error } = await window.supabaseClient
            .from('caixas')
            .delete()
            .eq('posicao_id', address)
            .select();

        if (error) {
            console.error("Erro ao remover caixa no Supabase:", error);
            return { success: false, error: error.message };
        }

        return { success: true, count: data ? data.length : 0 };
    } catch (err) {
        console.error("Exceção ao remover caixa no Supabase:", err);
        return { success: false, error: err.message || 'Erro de conexão/rede com Supabase.' };
    } finally {
        setTimeout(() => { isLocalSaving = false; }, 1200);
    }
}
window.syncRemoveBoxFromSupabase = syncRemoveBoxFromSupabase;

// Sincronizar salvamentos locais para o Supabase
async function syncSaveToSupabase() {
    if (!window.supabaseClient) return;
    isLocalSaving = true;
    try {
        const boxesArr = typeof window.getBoxes === 'function' ? window.getBoxes() : JSON.parse(localStorage.getItem('p5_1_boxes') || '[]');
        const ocupadas = boxesArr.filter(b => b.status === 'ARMAZENADA');
        
        await window.supabaseClient.from('caixas').delete().neq('id', 0);
        
        if (ocupadas.length > 0) {
            const caixasInsert = ocupadas.map(b => {
                const prod = (b.products && b.products[0]) ? b.products[0] : {};
                const code = (b.productCodes && b.productCodes[0]) ? b.productCodes[0] : (prod.code || '');
                return {
                    posicao_id: b.address,
                    codigo_produto: code,
                    descricao: prod.name || '',
                    cx_por_palete: b.unidadesPorCaixa || 0,
                    alocado_em: b.entrada || b.addedAt || new Date().toISOString()
                };
            });
            await window.supabaseClient.from('caixas').insert(caixasInsert);
        }
    } catch (err) {
        console.error("Erro ao sincronizar salvamento com Supabase:", err);
    } finally {
        setTimeout(() => { isLocalSaving = false; }, 1200);
    }
}
window.syncSaveToSupabase = syncSaveToSupabase;

// Configurar escuta em Tempo Real (Supabase Realtime WebSocket)
window.supabaseRealtimeChannel = null;

function setupSupabaseRealtime() {
    if (!window.supabaseClient) return;
    
    try {
        if (window.supabaseRealtimeChannel) {
            window.supabaseClient.removeChannel(window.supabaseRealtimeChannel);
        }
        
        window.supabaseRealtimeChannel = window.supabaseClient
            .channel('pulmao-changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'caixas' }, (payload) => {
                if (isLocalSaving) return;
                console.log("⚡ [Realtime] Alteração na tabela caixas detectada:", payload);
                sincronizarDadosComSupabase();
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'movimentacoes' }, (payload) => {
                if (isLocalSaving) return;
                console.log("⚡ [Realtime] Alteração na tabela movimentacoes detectada:", payload);
                sincronizarDadosComSupabase();
            })
            .subscribe((status) => {
                console.log("⚡ Status Supabase Realtime:", status);
            });
    } catch (err) {
        console.error("Erro ao configurar Supabase Realtime:", err);
    }
}

// Inicializar na carga da página
document.addEventListener('DOMContentLoaded', () => {
    const creds = getSupabaseCredentials();
    if (creds.url && creds.key) {
        const ok = initSupabase(creds.url, creds.key);
        if (ok) {
            atualizarIndicadorSupabase(true);
            sincronizarDadosComSupabase();
            setupSupabaseRealtime();
        }
    }

    window.addEventListener('focus', () => {
        if (window.supabaseClient && !isLocalSaving) sincronizarDadosComSupabase();
    });

    setInterval(() => {
        if (document.visibilityState === 'visible' && window.supabaseClient && !isLocalSaving) {
            sincronizarDadosComSupabase();
        }
    }, 15000);
});
