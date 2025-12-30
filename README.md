# WoodWork Design

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-orange) ![Docker](https://img.shields.io/badge/Docker-Ready-blue)

Aplicação institucional e portfólio desenvolvida como Single Page Application (SPA). O projeto foca em componentização, performance e manutenibilidade, utilizando React e Vite com infraestrutura containerizada via Docker.

## Tecnologias

- **Runtime/Build:** Node.js (v18+), Vite
- **Frontend:** React 18, React DOM 18
- **Roteamento:** React Router DOM 6
- **Estilização:** Bootstrap 5, CSS Modules/Variables
- **Infraestrutura:** Docker, Docker Compose, Nginx (Alpine)

## Estrutura do Projeto

Separa responsabilidades entre lógica de apresentação, dados estáticos e layouts.

```text
src/
├── assets/          # Recursos estáticos (imagens, estilos globais)
├── components/      # Componentes de UI reutilizáveis
├── data/            # Fontes de dados estáticos e configurações de conteúdo
├── layouts/         # Componentes estruturais de página (HOCs)
├── pages/           # Visualizações principais mapeadas nas rotas
└── main.jsx         # Entrypoint da aplicação
