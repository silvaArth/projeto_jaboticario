# 📦 Pulmão de Caixas — Gestão de Estoque e Pulmão Visual

Sistema web responsivo para gestão operacional e controle visual do pulmão de estoque do Grupo Boticário. O sistema oferece mapa interativo em tempo real, agrupamento inteligente de produtos por família/posição, registro por Nota Fiscal (NF-e XML ou manual) e sincronização atômica multiusuário via Supabase Realtime.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: HTML5 Semântico, CSS3 Moderno (Vanilla CSS), JavaScript (ES6+ Vanilla)
- **Banco de Dados & Realtime**: [Supabase](https://supabase.com/) (PostgreSQL + Realtime WebSockets)
- **Processamento de Planilhas**: [SheetJS (xlsx)](https://sheetjs.com/)
- **Hospedagem & Serverless**: [Vercel](https://vercel.com/) (Serverless Function em `/api/env.js` para injeção segura de env vars)

---

## 📁 Estrutura do Projeto

```text
projeto_jaboticario/
├── api/
│   └── env.js                 # Function Serverless Vercel para injetar env vars no navegador
├── css/
│   └── styles.css             # Estilos do sistema (Design System e Mapa Visual)
├── data/                      # Arquivos de dados de estoque de referência
├── docs/                      # Documentação auxiliar
├── js/
│   ├── app.js                 # Lógica de negócio, mapas, alocações e retiradas
│   ├── positions.js           # Cadastro de posições do pulmão (2.646 posições)
│   ├── products.js            # Cadastro de produtos e famílias
│   └── supabase-client.js     # Integração atômica e reativa com Supabase Realtime
├── scripts/
│   └── seed_supabase.py       # Script Python auxiliar para carga de dados no Supabase
├── .env.example               # Exemplo de variáveis de ambiente (sem valores reais)
├── .gitignore                 # Filtros de arquivos sensíveis e de build para Git
├── index.html                 # Ponto de entrada da aplicação web
├── supabase_schema.sql        # Script SQL para criação das tabelas e políticas no Supabase
├── vercel.json                # Configurações de rotas para deploy na Vercel
└── README.md                  # Documentação do repositório
```

---

## ⚙️ Variáveis de Ambiente (`.env`)

Copie o arquivo `.env.example` para `.env.local` na raiz do projeto ou configure no painel da Vercel:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon-publica-do-supabase
```

> **Importante**: Nunca envie senhas, chaves privadas ou service role keys para o GitHub. A chave `SUPABASE_ANON_KEY` é pública e protegida pelas políticas RLS no Supabase.

---

## 🛠️ Execução Local

Como a aplicação é construída com tecnologias web nativas (HTML/JS), não é necessário um processo pesado de build:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd projeto_jaboticario
   ```

2. Execute um servidor HTTP local simples (como Python HTTP Server ou Live Server do VS Code):
   ```bash
   # Com Python 3
   python -m http.server 8080
   ```

3. Acesse `http://127.0.0.1:8080` no seu navegador.

4. **Conexão com Banco de Dados**:
   - Clique no botão **☁️ Conectar Supabase** no cabeçalho.
   - Insira a URL e a Anon Key do seu projeto Supabase (ou configure no `.env` ao publicar na Vercel).

---

## 🗄️ Configuração do Banco de Dados (Supabase)

1. Acesse seu projeto no Dashboard do Supabase.
2. No menu **SQL Editor**, execute os comandos contidos no arquivo [`supabase_schema.sql`](./supabase_schema.sql).
3. Habilite a funcionalidade de **Realtime** para a tabela `caixas` nas configurações de publicação (`Database -> Publications -> supabase_realtime`).

---

## ☁️ Deploy na Vercel

1. Faça o push do repositório para o GitHub.
2. No painel da **Vercel** (`https://vercel.com`), clique em **Add New -> Project**.
3. Importe este repositório do GitHub.
4. Em **Environment Variables**, adicione:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
5. Clique em **Deploy**. A Vercel publicará a aplicação estática e a serverless function em `/api/env.js` automaticamente.

---

## 🔒 Segurança e Boas Práticas

- Nenhum token privado ou chave de acesso de serviço está gravada diretamente no código.
- As credenciais de conexão são injetadas em tempo de execução via variáveis de ambiente ou inseridas pelo usuário na interface e armazenadas localmente no `localStorage`.
- O repositório inclui `.gitignore` configurado para impedir vazamento de logs, chaves privadas ou dependências.
