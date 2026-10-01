-- ============================================================
-- MIGRAÇÃO: ADICIONAR ENDEREÇO DO PULMÃO AOS PRODUTOS
-- Executar no SQL Editor do Supabase Dashboard
-- ============================================================

-- 1. Adicionar coluna endereco_pulmao na tabela produtos caso não exista
ALTER TABLE public.produtos ADD COLUMN IF NOT EXISTS endereco_pulmao TEXT;

-- 2. Criar índice para buscas rápidas de produtos por endereço
CREATE INDEX IF NOT EXISTS idx_produtos_endereco ON public.produtos(endereco_pulmao);

-- 3. Função RPC para atualização atômica e ultra-rápida em lote (processa milhares de produtos em segundos)
CREATE OR REPLACE FUNCTION public.atualizar_enderecos_lote(itens jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE public.produtos AS p
    SET endereco_pulmao = v.endereco
    FROM jsonb_to_recordset(itens) AS v(codigo text, endereco text)
    WHERE p.codigo = v.codigo;
END;
$$;

-- 4. Garantir permissão de execução da RPC para o papel anon/autenticado
GRANT EXECUTE ON FUNCTION public.atualizar_enderecos_lote(jsonb) TO anon, authenticated, service_role;
