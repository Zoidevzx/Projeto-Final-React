🌟 <div align="center">Projeto Next.js + React + Express + PostgreSQL</div>
<div style="border: 2px solid #4A90E2; border-radius: 12px; padding: 18px; background: #F0F7FF; margin-bottom: 20px;"> <h2>🚀 Como rodar o projeto</h2> <p>Abaixo estão as instruções completas para iniciar o frontend, backend e banco de dados.</p> </div>
🏃‍♂️💻 1. Como rodar o projeto
<div style="font-size: 22px;">🟦 Frontend – Next.js / React (localhost:3000)</div>
<div style="border: 1px solid #ccc; border-radius: 10px; padding: 15px; background: #ffffff;">
▶️ Passos:

📌 Instale as dependências:

npm install


▶️ Execute o projeto:

npm run dev


🌐 Acesse: http://localhost:3000

</div>
<div style="font-size: 22px;">🟩 Backend – Express (localhost:4000)</div>
<div style="border: 1px solid #ccc; border-radius: 10px; padding: 15px; background: #ffffff;">
▶️ Passos:

Abra outro terminal

Acesse a pasta:

cd Backend


Instale dependências:

npm i


Inicie o servidor:

node app1.js


🌐 Acesse: http://localhost:4000

</div>
🗄️ Banco de Dados – PostgreSQL
<div style="border: 1px solid #ccc; border-radius: 10px; padding: 15px; background: #ffffff;">

Execute na sua base:

📄 table.sql – cria tabelas

📄 inserts.sql – popula dados

</div>
🔐 2. Variáveis de Ambiente (.env)
<div style="border: 2px solid #6C63FF; border-radius: 12px; padding: 15px; background: #F3F1FF;">
DB_HOST = localhost
DB_USER = postgres
DB_PASSWORD = postgres
DB_NAME = DB_Store
PORT = 5432

</div>
🗺️ 3. Mapa das Rotas da API (Backend Express)
<div style="border: 2px solid #FF9F43; border-radius: 12px; padding: 18px; background: #FFF8EE;">
📦 Produtos
  
- POST /add – adiciona produto

- GET /product/:id – busca por ID

- GET /products – lista tudo

- GET /products/tags/:tag – filtra por tag

- GET /products/categories/:cat – filtra por categoria

- POST /edit/:id – edita

- DELETE /delete/:id – deleta

🛒 Carrinho

-POST /add/cart – adiciona item

</div>
🧭 4. Rotas do Frontend (Next.js)
<div style="border: 2px solid #00B894; border-radius: 12px; padding: 18px; background: #EDFFF8;">
📍 Páginas principais

- / – Home

- /shop – Loja

- /product/[product] – Produto

- /cart – Carrinho

- /aboutus – Sobre nós
 
- /dev – Área administrativa

📂 Rotas dinâmicas (shop)

- /shop/[categories] – por categoria

- /shop/[tags] – por tag

🛠️ Rotas internas do /dev

- /dev/added – sucesso ao adicionar

- /dev/edited – sucesso ao editar

- /dev/error – erro em operações

</div>
👥 5. Integrantes do Grupo
<div style="border: 2px solid #0984E3; border-radius: 12px; padding: 18px; background: #F0F7FF;">
👨‍🏫 Professores (ordem alfabética)

- Adson Silva Rocha

- Rodrigo de Sousa Gomide

👨‍🎓 Alunos (ordem alfabética)

- Ana Clara Rezende Pires de Campos

- Bruno Gonçalves de Freitas

- Jean Carlos Pereira Souza

- João Victor Souza

</div>
