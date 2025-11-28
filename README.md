# 🚀 Projeto Next.js + React + Express + PostgreSQL

Este projeto integra um frontend em Next.js/React com um backend em Express e um banco de dados PostgreSQL.

-----

## 🏃‍♂️💻 1. Como rodar o projeto

Abaixo estão as instruções completas para iniciar o frontend, backend e banco de dados.

### 🟦 Frontend – Next.js / React (localhost:3000)

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    > 🌐 Acesse: **http://localhost:3000**

### 🟩 Backend – Express (localhost:4000)

1.  **Abra outro terminal**
2.  **Acesse a pasta:**
    ```bash
    cd Backend
    ```
3.  **Instale dependências:**
    ```bash
    npm i
    ```
4.  **Inicie o servidor:**
    ```bash
    node app1.js
    ```
    > 🌐 Acesse: **http://localhost:4000**

### 🗄️ Banco de Dados – PostgreSQL

Execute os seguintes arquivos na sua base de dados:

  * **`table.sql`** – cria as tabelas
  * **`inserts.sql`** – insere os dados

-----

## 🔐 2. Variáveis de Ambiente (.env)

Configure seu arquivo `.env` (provavelmente na pasta `Backend`) com as seguintes variáveis:

```env
DB_HOST = localhost
DB_USER = postgres
DB_PASSWORD = postgres
DB_NAME = DB_Store
PORT = 5432
```

-----

## 🗺️ 3. Mapa das Rotas da API (Backend Express)

### 📦 Produtos

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/add` | Adiciona produto |
| `GET` | `/product/:id` | Busca por ID |
| `GET` | `/products` | Lista todos os Produtos |
| `GET` | `/products/tags/:tag` | Filtra os Produtos por tag |
| `GET` | `/products/categories/:cat` | Filtra os Produtos por categoria |
| `POST` | `/edit/:id` | Edita Produto|
| `DELETE` | `/delete/:id` | Deleta Produto|

### 🛒 Carrinho

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/add/cart` | Adiciona item ao Carrinho |

-----

## 🧭 4. Rotas do Frontend (Next.js)

### 📍 Páginas principais

  * `/` – Home
  * `/shop` – Loja
  * `/product/[product]` – Produto
  * `/cart` – Carrinho
  * `/aboutus` – Sobre nós
  * `/dev` – Área administrativa
  * `/404` – Página de "Não Encontrado" (automática)

### 📂 Rotas dinâmicas (shop)

  * `/shop/[categories]` – por categoria
  * `/shop/[tags]` – por tag

### 🛠️ Rotas internas do /dev

  * `/dev/added` – sucesso ao adicionar
  * `/dev/edited` – sucesso ao editar
  * `/dev/error` – erro em operações

-----

## 👥 5. Integrantes do Grupo

### 👨‍🏫 Professores

*(ordem alfabética)*

  * Adson Silva Rocha
  * Rodrigo de Sousa Gomide

### 👨‍🎓 Alunos

*(ordem alfabética)*

  * Ana Clara Rezende Pires de Campos
  * Bruno Gonçalves de Freitas
  * Jean Carlos Pereira Souza
  * João Victor Souza
