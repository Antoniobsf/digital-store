# 👟 Digital Store — Projeto Final de Front-end

Aplicação web de e-commerce desenvolvida em **React** como projeto final do módulo de Front-end, baseada no design oficial da **Digital Store** no Figma.

## 🚀 Tecnologias Utilizadas

* **[React](https://react.dev/)** (com **[Vite](https://vitejs.dev/)**)
* **[React Router DOM](https://reactrouter.com/)** — navegação entre páginas
* **[Bootstrap 5](https://getbootstrap.com/)** — layout responsivo e estilização
* **[Lucide React](https://lucide.dev/)** — biblioteca de ícones
* **CSS3** — variáveis customizadas para a paleta de cores oficial do Figma

## 📄 Páginas e Funcionalidades

* **Página Inicial (`/`):** Banner principal (Hero), coleções em destaque, grade de produtos em alta e seção de oferta especial.
* **Listagem de Produtos (`/products`):** Catálogo completo de itens com suporte a busca e filtros.
* **Visualização do Produto (`/product/:id`):** Detalhes do item selecionado, preços, avaliações, opções de tamanho/cor e produtos relacionados.
* **Layout Responsivo:** `Header` com barra de pesquisa e navegação ativa, e `Footer` padronizado em todas as rotas.

## 📂 Estrutura do Projeto

```text
digital-store/
├── public/
├── src/
│   ├── components/       # Header, Footer, Layout, ProductCard, ProductListing
│   ├── data/             # products.js (catálogo de produtos)
│   ├── pages/            # HomePage, ProductListingPage, ProductViewPage
│   ├── App.jsx           # Configuração das rotas
│   ├── index.css         # Paleta de cores e estilos globais
│   └── main.jsx          # Ponto de entrada e importação do Bootstrap
├── package.json
└── README.md