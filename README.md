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
│   └── styles.css             # Estilos do sistema (Design System e Mapa Visual Responsivo)
├── data/                      # Arquivos de dados de estoque de referência
├── docs/                      # Documentação auxiliar
├── js/
│   ├── app.js                 # Lógica de negócio, mapas, alocações e retiradas
│   ├── positions.js           # Cadastro de posições do pulmão (2.646 posições)
│   ├── products.js            # Cadastro de produtos e famílias
│   └── supabase-client.js     # Integração atômica e reativa com Supabase Realtime
├── scripts/
│   └── seed_supabase.py       # Script Python auxiliar para carga de dados no Supabase
├── .env.example               # Modelo de variáveis de ambiente
├── .gitignore                 # Arquivos ignorados pelo Git (.env, caches, logs)
├── index.html                 # Ponto de entrada da aplicação web
├── package.json               # Gerenciador de comandos e scripts (npm start, npm run dev)
├── server.js                  # Servidor local leve (Zero dependências, lê .env automaticamente)
├── supabase_schema.sql        # Script SQL para criação das tabelas e políticas no Supabase
├── vercel.json                # Configurações de rotas para deploy na Vercel
└── README.md                  # Documentação do repositório
```

---

## 💻 Como Trabalhar no Projeto em Outra Máquina

Para clonar e rodar o projeto em qualquer outro computador (Windows, Linux ou Mac):

### 1. Clonar o Repositório
```bash
git clone https://github.com/silvaArth/projeto_jaboticario.git
cd projeto_jaboticario
```

### 2. Configurar as Variáveis de Ambiente
Copie o modelo de ambiente `.env.example` para `.env`:
```bash
# No Windows (PowerShell):
copy .env.example .env

# No Linux / macOS / Git Bash:
cp .env.example .env
```

Abra o arquivo `.env` gerado e preencha com as credenciais do seu projeto Supabase:
```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon-publica-do-supabase
```

### 3. Iniciar o Servidor de Desenvolvimento
O projeto conta com um servidor local nativo sem necessidade de instalar dependências pesadas (`node_modules`):

```bash
npm run dev
# ou
npm start
# ou diretamente:
node server.js
```

O servidor iniciará automaticamente em:
👉 **`http://localhost:3000`**

Ao abrir no navegador, o sistema se conectará de forma transparente ao Supabase e exibirá o status `🟢 Sistema Online`.

---

## 🛠️ Métodos Alternativos de Execução Local

Se você não tiver Node.js instalado na máquina secundária, pode utilizar:

- **Via Python:**
  ```bash
  python -m http.server 3000
  ```
- **Via VS Code:** Utilize a extensão **Live Server** clicando com o botão direito em `index.html` -> *Open with Live Server*.


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
