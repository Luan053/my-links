# Meu Linktree Simples

Este projeto é uma página simples para exibir e organizar meus links pessoais, como redes sociais e outros recursos. Inspirado no conceito do [Linktree](https://linktr.ee/), é totalmente personalizável e desenvolvido em **Next.js**.

## Demonstração
    
![mp4](https://github.com/user-attachments/assets/107b29ae-c2be-4208-8a78-fc452062821f)

Se preferir acesse a página em: https://luanschz.netlify.app

## Tecnologias Utilizadas

- **Next.js**: Framework React para criação de aplicações web rápidas e escaláveis.
- **TailwindCSS**: Para estilização da página.

## Funcionalidades

- Exibe uma lista de links personalizados.
- Contador de visualizações em tempo real
- Design minimalista e responsivo.
- Fácil personalização de conteúdo e estilo.

## Como Executar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Luan053/my-links.git
   cd my-links
2. **instale as dependências**:
    ```bash
    npm install
3. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
4. **Acesse a aplicação: Abra seu navegador e visite http://localhost:3000.**


## Personalização
Adicione seus links:

No arquivo app/page.js, insira seus links no formato adequado:
  ```bash
const infos = {
  github: {
      logo: <Github />,
      linkName: "GitHub",
      linkDesc: "github.com/Luan053",
      href: "https://github.com/Luan053",
    },
  linkedin: {
      logo: <LinkedIn />,
      linkName: "LinkedIn",
      linkDesc: "linkedin.com/in/luanrs-",
      href: "https://www.linkedin.com/in/luanrs-/",
    },
  };
