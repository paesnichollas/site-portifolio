# 🚀 Portfólio Nichollas Rocha

Um site de portfólio profissional moderno e responsivo desenvolvido em React.js, apresentando projetos de desenvolvimento backend e fullstack com foco em Python/Django.

![Portfolio Preview](./docs/preview.png)

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com tema escuro
- **Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Bilíngue**: Suporte completo para Português e Inglês
- **Animações**: Efeitos hover suaves e transições elegantes
- **Performance**: Otimizado para carregamento rápido
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React.js 18+
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Ícones**: Lucide React
- **Animações**: Framer Motion
- **Build Tool**: Vite
- **Gerenciador de Pacotes**: pnpm

## 📁 Estrutura do Projeto

```
portfolio-nichollas/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   │   ├── business-dashboard.webp
│   │   ├── ecommerce-api.png
│   │   └── analytics-dashboard.png
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes UI base (shadcn/ui)
│   │   ├── sections/       # Seções do portfólio
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── Navigation.jsx  # Componente de navegação
│   ├── contexts/           # Contextos React
│   │   └── LanguageContext.jsx
│   ├── data/              # Dados e configurações
│   │   └── translations.js # Traduções PT/EN
│   ├── hooks/             # Hooks customizados
│   │   └── useTranslation.js
│   ├── App.jsx            # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── components.json        # Configuração shadcn/ui
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado globalmente (`npm install -g pnpm`)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/paesnichollas/portfolio-nichollas.git
   cd portfolio-nichollas
   ```

2. **Instale as dependências**

   ```bash
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**

   ```bash
   pnpm run dev
   ```

4. **Acesse no navegador**

   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza o build de produção
- `pnpm run lint` - Executa o linter

## 📝 Como Adicionar Novos Projetos

Para adicionar um novo projeto ao portfólio, siga estes passos:

### 1. Adicione a imagem do projeto

Coloque a imagem na pasta `src/assets/` com um nome descritivo:

```bash
src/assets/meu-novo-projeto.png
```

### 2. Importe a imagem no componente Projects

No arquivo `src/components/sections/Projects.jsx`, adicione o import:

```javascript
import meuNovoProjeto from '../../assets/meu-novo-projeto.png';
```

### 3. Adicione o projeto ao array

No mesmo arquivo, adicione um novo objeto ao array `projects`:

```javascript
{
  id: 4, // Próximo ID disponível
  title: "Meu Novo Projeto",
  description: "Descrição detalhada do projeto...",
  image: meuNovoProjeto,
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/paesnichollas/meu-novo-projeto",
  liveUrl: "https://meu-novo-projeto.vercel.app", // Opcional
  featured: false // true para destacar o projeto
}
```

### 4. Adicione as traduções (opcional)

Se quiser suporte bilíngue, adicione as traduções em `src/data/translations.js`:

```javascript
// Em translations.pt
projectsList: {
  // ... outros projetos
  meuNovoProjeto: {
    title: "Meu Novo Projeto",
    description: "Descrição em português..."
  }
}

// Em translations.en
projectsList: {
  // ... outros projetos
  meuNovoProjeto: {
    title: "My New Project",
    description: "Description in English..."
  }
}
```

### 5. Use as traduções no componente

Se adicionou traduções, substitua os textos fixos:

```javascript
title: t('projects.projectsList.meuNovoProjeto.title'),
description: t('projects.projectsList.meuNovoProjeto.description'),
```

## 🌐 Deploy

### GitHub Pages

1. **Configure o repositório**

   ```bash
   # Adicione o repositório remoto
   git remote add origin https://github.com/paesnichollas/portfolio-nichollas.git
   ```

2. **Configure o vite.config.js**

   ```javascript
   export default defineConfig({
     base: '/portfolio-nichollas/', // Nome do repositório
     // ... outras configurações
   })
   ```

3. **Instale gh-pages**

   ```bash
   pnpm add -D gh-pages
   ```

4. **Adicione scripts no package.json**

   ```json
   {
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **Faça o deploy**

   ```bash
   pnpm run deploy
   ```

### Vercel (Recomendado)

1. **Conecte o repositório no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub
   - Configure as variáveis se necessário

2. **Deploy automático**
   - Cada push na branch main fará deploy automático
   - Preview deployments para pull requests

## 🎨 Personalização

### Cores e Tema

As cores são definidas no arquivo `src/App.css` usando CSS custom properties:

```css
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  /* ... outras variáveis */
}

.dark {
  --primary: oklch(0.922 0 0);
  --background: oklch(0.145 0 0);
  /* ... outras variáveis */
}
```

### Informações Pessoais

Atualize as informações pessoais nos seguintes arquivos:

- `src/data/translations.js` - Textos e traduções
- `src/components/sections/About.jsx` - Skills e informações técnicas
- `src/components/sections/Contact.jsx` - Links de contato

### Adicionar Novas Seções

1. Crie um novo componente em `src/components/sections/`
2. Adicione a rota no `src/App.jsx`
3. Inclua no menu de navegação em `src/components/Navigation.jsx`
4. Adicione as traduções em `src/data/translations.js`

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Nichollas Rocha de Araújo Paes**

- GitHub: [@paesnichollas](https://github.com/paesnichollas)
- LinkedIn: [Nichollas Rocha](https://www.linkedin.com/in/nichollas-rocha-de-ara%C3%BAjo-paes-a84a441a3/?trk=opento_sprofile_details)
- Email: <paesnichollas@gmail.com>

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Biblioteca JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Lucide](https://lucide.dev/) - Ícones
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
