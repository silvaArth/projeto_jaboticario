import os
import sys
import json
import re
import urllib.request
import urllib.parse

# Configurações do Supabase
SUPABASE_URL = os.environ.get("SUPABASE_URL", "").rstrip("/")
SUPABASE_KEY = os.environ.get("SUPABASE_ANON_KEY", "") or os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")

def batch_insert(table_name, rows, batch_size=1000):
    if not SUPABASE_URL or not SUPABASE_KEY:
        print(f"[ERRO] SUPABASE_URL ou SUPABASE_ANON_KEY nao informados.")
        return False
    
    endpoint = f"{SUPABASE_URL}/rest/v1/{table_name}"
    total = len(rows)
    print(f"-> Enviando {total} registros para a tabela '{table_name}'...")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    }

    for i in range(0, total, batch_size):
        chunk = rows[i:i + batch_size]
        data_bytes = json.dumps(chunk).encode('utf-8')
        req = urllib.request.Request(endpoint, data=data_bytes, headers=headers, method='POST')
        try:
            with urllib.request.urlopen(req) as resp:
                if resp.status in (200, 201, 204):
                    print(f"   [OK] Lote {i // batch_size + 1}/{(total + batch_size - 1) // batch_size} inserido ({len(chunk)} registros)")
                else:
                    print(f"   [AVISO] Resposta status: {resp.status}")
        except Exception as e:
            print(f"   [ERRO] Erro ao enviar lote {i}: {e}")
            if hasattr(e, 'read'):
                print("   Detalhes:", e.read().decode('utf-8', errors='ignore'))
            return False
    return True

def parse_positions(filepath):
    print("-> Lendo posições de positions.js...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    json_str = content.split('POS = ')[1].split(';')[0].strip()
    raw_pos = json.loads(json_str)
    positions = []
    for p in raw_pos:
        rua_str = str(p.get("rua", "5"))
        rua_num = int(re.sub(r'\D', '', rua_str) or 5)
        positions.append({
            "id": p["id"],
            "rua": rua_num,
            "rack": str(p.get("rack", 1)).zfill(2),
            "coluna": str(p.get("col", p.get("coluna", "B"))),
            "nivel": int(p.get("linha", p.get("nivel", 1))),
            "disponivel": True
        })
    print(f"   Carregadas {len(positions)} posições.")
    return positions

def parse_products(filepath):
    print("-> Lendo produtos de products.js...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    json_str = content.split('PRODUTOS = ')[1].split(';')[0].strip()
    raw_prod = json.loads(json_str)
    products = []
    for code, info in raw_prod.items():
        desc = info if isinstance(info, str) else (info.get("desc", "") if isinstance(info, dict) else str(info))
        cx = info.get("cx", 0) if isinstance(info, dict) else 0
        products.append({
            "codigo": str(code).strip(),
            "descricao": str(desc).strip(),
            "cx_por_palete": int(cx)
        })
    print(f"   Carregados {len(products)} produtos.")
    return products

def main():
    if len(sys.argv) >= 3:
        global SUPABASE_URL, SUPABASE_KEY
        SUPABASE_URL = sys.argv[1].rstrip("/")
        SUPABASE_KEY = sys.argv[2]
    
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("Uso: python seed_supabase.py <SUPABASE_URL> <SUPABASE_ANON_KEY_OU_SERVICE_ROLE_KEY>")
        return

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pos_file = os.path.join(base_dir, "js", "positions.js")
    prod_file = os.path.join(base_dir, "js", "products.js")

    positions = parse_positions(pos_file)
    products = parse_products(prod_file)

    print("\n--- INICIANDO CARGA NO SUPABASE ---")
    if batch_insert("posicoes", positions, batch_size=1000):
        print("[OK] Posicoes importadas com sucesso!")
    if batch_insert("produtos", products, batch_size=1000):
        print("[OK] Produtos importados com sucesso!")

    print("\n--- CARGA CONCLUIDA ---")

if __name__ == "__main__":
    main()
