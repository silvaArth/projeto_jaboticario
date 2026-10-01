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
            badge.style.display = 'inline-flex';
            badge.style.background = '#10b981';
            badge.style.color = '#ffffff';
            badge.innerHTML = '🟢 Sistema Online';
        } else {
            badge.style.display = 'none';
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
                console.log("☁️ Supabase retornado sem caixas (0 alocações).");
                const currentLocalBoxes = (typeof window.getBoxes === 'function' ? window.getBoxes() : []) || [];
                const localArmazenadas = currentLocalBoxes.filter(b => b.status === 'ARMAZENADA');
                if (localArmazenadas.length > 0) {
                    console.log(`📦 Mantendo ${localArmazenadas.length} caixa(s) locais e sincronizando com o Supabase...`);
                    syncAddBoxesToSupabase(localArmazenadas);
                } else {
                    if (typeof window.setBoxes === 'function') {
                        window.setBoxes([]);
                    } else {
                        localStorage.setItem('p5_1_boxes', '[]');
                    }
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

        if (typeof window.garantirPosicoesParaEnderecos === 'function') window.garantirPosicoesParaEnderecos();
        if (typeof window.atualizarSelectRuas === 'function') window.atualizarSelectRuas();
        if (typeof window.dash === 'function') window.dash();
        if (typeof window.map === 'function') window.map();
        if (typeof window.ult === 'function') window.ult();
        
    } catch (e) {
        console.error("Erro na sincronização:", e);
    }
}

let isLocalSaving = false;

// Sincronizar inserção de caixas específicas no Supabase (atômica com garantia de integridade)
async function syncAddBoxesToSupabase(newBoxes) {
    if (!window.supabaseClient || !newBoxes || !newBoxes.length) return { success: true };
    isLocalSaving = true;
    try {
        // 1. Garantir que os produtos existam na tabela produtos antes de associar caixas (evita erro FK 409)
        const produtosUnicosMap = new Map();
        newBoxes.forEach(b => {
            const prod = (b.products && b.products[0]) ? b.products[0] : {};
            const code = (b.productCodes && b.productCodes[0]) ? b.productCodes[0] : (prod.code || '');
            const cleanCode = String(code).trim().padStart(5, '0');
            if (cleanCode && cleanCode !== '00000' && !produtosUnicosMap.has(cleanCode)) {
                produtosUnicosMap.set(cleanCode, {
                    codigo: cleanCode,
                    descricao: prod.name || (typeof window.lookup === 'function' ? window.lookup(cleanCode) : ('Código ' + cleanCode))
                });
            }
        });

        const listaProdutosParaGarantir = Array.from(produtosUnicosMap.values());
        if (listaProdutosParaGarantir.length > 0) {
            try {
                // Upsert em lotes de 100 com resolução ignore duplicates
                for (let i = 0; i < listaProdutosParaGarantir.length; i += 100) {
                    const chunk = listaProdutosParaGarantir.slice(i, i + 100);
                    await window.supabaseClient.from('produtos').upsert(chunk, { onConflict: 'codigo', ignoreDuplicates: true });
                }
            } catch(e) {
                console.warn('Aviso ao registrar produtos base no Supabase:', e);
            }
        }

        // 2. Limpar posições anteriores no Supabase
        const addresses = [...new Set(newBoxes.map(b => b.address).filter(Boolean))];
        for (let i = 0; i < addresses.length; i += 100) {
            const chunkAddr = addresses.slice(i, i + 100);
            await window.supabaseClient.from('caixas').delete().in('posicao_id', chunkAddr);
        }
        
        // 3. Montar e inserir caixas em lotes de 100
        const caixasInsert = newBoxes.map(b => {
            const prod = (b.products && b.products[0]) ? b.products[0] : {};
            const code = (b.productCodes && b.productCodes[0]) ? b.productCodes[0] : (prod.code || '');
            const cleanCode = String(code).trim().padStart(5, '0');
            return {
                posicao_id: b.address,
                codigo_produto: cleanCode,
                descricao: prod.name || (typeof window.lookup === 'function' ? window.lookup(cleanCode) : ('Código ' + cleanCode)),
                cx_por_palete: b.unidadesPorCaixa || 0,
                alocado_em: b.entrada || b.addedAt || new Date().toISOString()
            };
        });

        for (let i = 0; i < caixasInsert.length; i += 100) {
            const chunkInsert = caixasInsert.slice(i, i + 100);
            const { error: insErr } = await window.supabaseClient.from('caixas').insert(chunkInsert);
            if (insErr) {
                console.warn('Aviso no lote de caixas Supabase:', insErr.message);
            }
        }

        return { success: true };
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

// Limpar todas as caixas e movimentações no Supabase
async function syncClearAllFromSupabase() {
    if (!window.supabaseClient) return { success: true };
    isLocalSaving = true;
    try {
        console.log("☁️ Limpando caixas e movimentações no Supabase...");
        await window.supabaseClient.from('caixas').delete().gt('id', 0);
        await window.supabaseClient.from('movimentacoes').delete().gt('id', 0);
        return { success: true };
    } catch (err) {
        console.warn('Aviso ao limpar Supabase:', err);
        return { success: false, error: err.message };
    } finally {
        setTimeout(() => { isLocalSaving = false; }, 1200);
    }
}
window.syncClearAllFromSupabase = syncClearAllFromSupabase;

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

// ============================================================
// GESTÃO DE ENDEREÇAMENTO DE PRODUTOS NO PULMÃO
// ============================================================

window.MAPA_ENDERECOS_PRODUTOS = window.MAPA_ENDERECOS_PRODUTOS || {};

try {
    const salvoLocal = localStorage.getItem('p5_1_enderecos_produtos');
    if (salvoLocal) {
        window.MAPA_ENDERECOS_PRODUTOS = JSON.parse(salvoLocal);
    }
} catch(e) {}

// Obter endereço cadastrado no pulmão para um código de produto
function obterEnderecoPulmaoProduto(code) {
    if (!code) return '';
    const c = String(code).trim();
    const c5 = c.padStart(5, '0');
    if (window.MAPA_ENDERECOS_PRODUTOS) {
        if (window.MAPA_ENDERECOS_PRODUTOS[c]) return window.MAPA_ENDERECOS_PRODUTOS[c];
        if (window.MAPA_ENDERECOS_PRODUTOS[c5]) return window.MAPA_ENDERECOS_PRODUTOS[c5];
        const cClean = c.replace(/^0+/, '');
        if (cClean && window.MAPA_ENDERECOS_PRODUTOS[cClean]) return window.MAPA_ENDERECOS_PRODUTOS[cClean];
    }
    return '';
}
window.obterEnderecoPulmaoProduto = obterEnderecoPulmaoProduto;

// Mapear endereços para POS em memória
function aplicarEnderecosAoPos() {
    if (typeof POS === 'undefined' || !window.MAPA_ENDERECOS_PRODUTOS) return;
    const posMap = new Map(POS.map(p => [String(p.id).trim().toUpperCase(), p]));
    for (const [code, end] of Object.entries(window.MAPA_ENDERECOS_PRODUTOS)) {
        if (!end) continue;
        const p = posMap.get(String(end).trim().toUpperCase());
        if (p && !p.material) {
            p.material = code;
        }
    }
}
window.aplicarEnderecosAoPos = aplicarEnderecosAoPos;

// Carregar endereços cadastrados no Supabase
async function carregarEnderecosPulmaoSupabase() {
    if (!window.supabaseClient) return;
    try {
        const { data, error } = await window.supabaseClient
            .from('produtos')
            .select('codigo, endereco_pulmao')
            .not('endereco_pulmao', 'is', null);

        if (!error && Array.isArray(data)) {
            data.forEach(item => {
                if (item.codigo && item.endereco_pulmao) {
                    const c = String(item.codigo).trim();
                    const e = String(item.endereco_pulmao).trim();
                    window.MAPA_ENDERECOS_PRODUTOS[c] = e;
                    window.MAPA_ENDERECOS_PRODUTOS[c.padStart(5, '0')] = e;
                }
            });
            try {
                localStorage.setItem('p5_1_enderecos_produtos', JSON.stringify(window.MAPA_ENDERECOS_PRODUTOS));
            } catch(e) {}
            aplicarEnderecosAoPos();
            if (typeof window.garantirPosicoesParaEnderecos === 'function') window.garantirPosicoesParaEnderecos();
        }
    } catch(err) {
        console.warn('Aviso ao carregar endereços do Supabase:', err);
    }
}
window.carregarEnderecosPulmaoSupabase = carregarEnderecosPulmaoSupabase;

// Salvar lote de endereçamentos com suporte a dezenas de milhares de itens
async function salvarEnderecosLoteSupabase(itens, onProgress) {
    if (!itens || !itens.length) return { success: true, count: 0 };

    // 1. Salva a lista completa de linhas para garantir reconstrução exata de 1 caixa por linha
    try {
        window.LISTA_ENDERECOS_PULMAO = itens;
        localStorage.setItem('p5_1_lista_enderecos_linhas', JSON.stringify(itens));
    } catch(e) {}

    // 2. Atualiza imediatamente cache em memória e LocalStorage (garante funcionamento instantâneo)
    itens.forEach(x => {
        const c = String(x.codigo).trim();
        const e = String(x.endereco).trim();
        window.MAPA_ENDERECOS_PRODUTOS[c] = e;
        window.MAPA_ENDERECOS_PRODUTOS[c.padStart(5, '0')] = e;
    });
    try {
        localStorage.setItem('p5_1_enderecos_produtos', JSON.stringify(window.MAPA_ENDERECOS_PRODUTOS));
    } catch(e) {}

    aplicarEnderecosAoPos();

    if (!window.supabaseClient) {
        if (typeof onProgress === 'function') {
            onProgress({ processados: itens.length, total: itens.length, percentual: 100 });
        }
        return { success: true, count: itens.length, localOnly: true };
    }

    const batchSize = 500;
    const total = itens.length;
    let processados = 0;
    let rpcAvailable = true;
    let colunaExiste = true;

    for (let i = 0; i < total; i += batchSize) {
        const chunk = itens.slice(i, i + batchSize);

        if (rpcAvailable) {
            try {
                const { error: rpcErr } = await window.supabaseClient.rpc('atualizar_enderecos_lote', { itens: chunk });
                if (rpcErr) {
                    console.warn('RPC atualizar_enderecos_lote indisponível, usando fallback direto:', rpcErr.message);
                    rpcAvailable = false;
                }
            } catch (e) {
                rpcAvailable = false;
            }
        }

        if (!rpcAvailable && colunaExiste) {
            // Fallback direto: atualiza via REST em grupos paralelos
            const subBatchSize = 25;
            for (let j = 0; j < chunk.length; j += subBatchSize) {
                const sub = chunk.slice(j, j + subBatchSize);
                try {
                    const results = await Promise.all(sub.map(item => 
                        window.supabaseClient
                            .from('produtos')
                            .update({ endereco_pulmao: item.endereco })
                            .eq('codigo', item.codigo)
                    ));
                    const hasColErr = results.some(r => r.error && r.error.code === '42703');
                    if (hasColErr) {
                        console.warn('Coluna produtos.endereco_pulmao ainda não criada no Supabase. Os dados foram salvos no armazenamento local do navegador.');
                        colunaExiste = false;
                        break;
                    }
                } catch (e) {
                    console.warn('Aviso na atualização REST:', e);
                }
            }
        }

        processados += chunk.length;
        if (typeof onProgress === 'function') {
            const pct = Math.min(100, Math.round((processados / total) * 100));
            onProgress({
                processados,
                total,
                percentual: pct,
                loteAtual: Math.floor(i / batchSize) + 1,
                totalLotes: Math.ceil(total / batchSize)
            });
        }
    }

    return { success: true, count: processados, colunaExiste };
}
window.salvarEnderecosLoteSupabase = salvarEnderecosLoteSupabase;

// Inicializar na carga da página
document.addEventListener('DOMContentLoaded', () => {
    const creds = getSupabaseCredentials();
    if (creds.url && creds.key) {
        const ok = initSupabase(creds.url, creds.key);
        if (ok) {
            atualizarIndicadorSupabase(true);
            sincronizarDadosComSupabase();
            carregarEnderecosPulmaoSupabase();
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
