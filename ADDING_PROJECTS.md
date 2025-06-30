# 📋 Guia Completo: Como Adicionar Novos Projetos

Este guia fornece instruções detalhadas para adicionar novos projetos ao seu portfólio de forma rápida e eficiente.

## 🎯 Visão Geral

O sistema de projetos foi projetado para ser facilmente extensível. Cada projeto é definido como um objeto JavaScript com propriedades específicas que controlam sua aparência e comportamento.

## 📝 Passo a Passo Detalhado

### Passo 1: Preparar a Imagem do Projeto

#### 1.1 Escolher a Imagem
- **Formato recomendado**: PNG, WebP ou JPG
- **Dimensões ideais**: 400x250 pixels (proporção 16:10)
- **Tamanho máximo**: 500KB para otimizar o carregamento
- **Qualidade**: Alta resolução, mas otimizada para web

#### 1.2 Nomear o Arquivo
Use um nome descritivo e sem espaços:
```
✅ Bom: sistema-gestao-vendas.png
✅ Bom: api-ecommerce-nodejs.webp
❌ Ruim: Projeto 1.jpg
❌ Ruim: imagem-do-meu-projeto-muito-legal.png
```

#### 1.3 Adicionar ao Projeto
Coloque a imagem na pasta `src/assets/`:
```bash
src/assets/nome-do-projeto.png
```

### Passo 2: Configurar o Projeto no Código

#### 2.1 Abrir o Arquivo de Projetos
Navegue até: `src/components/sections/Projects.jsx`

#### 2.2 Importar a Imagem
No topo do arquivo, adicione o import:
```javascript
// Imports existentes
import businessDashboard from '../../assets/business-dashboard.webp';
import ecommerceApi from '../../assets/ecommerce-api.png';
import analyticsDashboard from '../../assets/analytics-dashboard.png';

// Seu novo import
import nomeDoSeuProjeto from '../../assets/nome-do-projeto.png';
```

#### 2.3 Adicionar o Objeto do Projeto
Localize o array `projects` e adicione um novo objeto:

```javascript
const projects = [
  // ... projetos existentes
  
  // Seu novo projeto
  {
    id: 4, // Sempre use o próximo número disponível
    title: "Nome do Seu Projeto",
    description: "Descrição detalhada do projeto. Explique o que ele faz, quais problemas resolve e quais tecnologias utiliza. Seja específico mas conciso.",
    image: nomeDoSeuProjeto, // Variável importada
    technologies: ["React", "Node.js", "MongoDB", "Express"], // Array de strings
    githubUrl: "https://github.com/paesnichollas/nome-do-projeto", // URL do repositório
    liveUrl: "https://nome-do-projeto.vercel.app", // URL do projeto online (opcional)
    featured: false // true para destacar o projeto com badge "Destaque"
  }
];
```

### Passo 3: Configurar Traduções (Opcional)

Se você quiser que o projeto tenha suporte bilíngue:

#### 3.1 Abrir o Arquivo de Traduções
Navegue até: `src/data/translations.js`

#### 3.2 Adicionar Traduções em Português
Localize `pt.projects.projectsList` e adicione:
```javascript
projectsList: {
  // ... projetos existentes
  
  nomeDoSeuProjeto: {
    title: "Nome do Seu Projeto",
    description: "Descrição em português do projeto..."
  }
}
```

#### 3.3 Adicionar Traduções em Inglês
Localize `en.projects.projectsList` e adicione:
```javascript
projectsList: {
  // ... projetos existentes
  
  nomeDoSeuProjeto: {
    title: "Your Project Name",
    description: "English description of the project..."
  }
}
```

#### 3.4 Usar as Traduções no Componente
Volte ao arquivo `Projects.jsx` e substitua os textos fixos:
```javascript
{
  id: 4,
  title: t('projects.projectsList.nomeDoSeuProjeto.title'),
  description: t('projects.projectsList.nomeDoSeuProjeto.description'),
  // ... resto das propriedades
}
```

## 🎨 Propriedades Detalhadas

### `id` (obrigatório)
- **Tipo**: Number
- **Descrição**: Identificador único do projeto
- **Exemplo**: `4`
- **Dica**: Use sempre o próximo número disponível

### `title` (obrigatório)
- **Tipo**: String
- **Descrição**: Nome do projeto
- **Limite**: 50 caracteres recomendado
- **Exemplo**: `"Sistema de Gestão de Vendas"`

### `description` (obrigatório)
- **Tipo**: String
- **Descrição**: Descrição detalhada do projeto
- **Limite**: 200-300 caracteres recomendado
- **Exemplo**: `"Sistema completo para gestão de vendas com dashboard, relatórios e integração com APIs de pagamento."`

### `image` (obrigatório)
- **Tipo**: Imported image
- **Descrição**: Imagem de preview do projeto
- **Exemplo**: `meuProjeto` (variável importada)

### `technologies` (obrigatório)
- **Tipo**: Array de strings
- **Descrição**: Tecnologias utilizadas no projeto
- **Limite**: 3-6 tecnologias recomendado
- **Exemplo**: `["React", "Node.js", "PostgreSQL", "Docker"]`

### `githubUrl` (obrigatório)
- **Tipo**: String (URL)
- **Descrição**: Link para o repositório no GitHub
- **Exemplo**: `"https://github.com/paesnichollas/meu-projeto"`

### `liveUrl` (opcional)
- **Tipo**: String (URL) ou null
- **Descrição**: Link para o projeto em produção
- **Exemplo**: `"https://meu-projeto.vercel.app"` ou `null`

### `featured` (opcional)
- **Tipo**: Boolean
- **Descrição**: Se o projeto deve ter destaque especial
- **Padrão**: `false`
- **Exemplo**: `true` (mostra badge "Destaque")

## 🔧 Exemplos Práticos

### Exemplo 1: Projeto Simples
```javascript
{
  id: 5,
  title: "Todo List App",
  description: "Aplicativo de lista de tarefas com React e localStorage para persistência de dados.",
  image: todoListApp,
  technologies: ["React", "CSS3", "LocalStorage"],
  githubUrl: "https://github.com/paesnichollas/todo-list",
  liveUrl: "https://todo-list-nichollas.vercel.app",
  featured: false
}
```

### Exemplo 2: Projeto em Destaque
```javascript
{
  id: 6,
  title: "E-learning Platform",
  description: "Plataforma completa de ensino online com sistema de usuários, cursos, avaliações e certificados.",
  image: elearningPlatform,
  technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
  githubUrl: "https://github.com/paesnichollas/elearning-platform",
  liveUrl: "https://elearning.nichollas.dev",
  featured: true
}
```

### Exemplo 3: Projeto Apenas no GitHub
```javascript
{
  id: 7,
  title: "Python Data Analysis",
  description: "Scripts em Python para análise de dados de vendas com pandas, matplotlib e seaborn.",
  image: dataAnalysis,
  technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
  githubUrl: "https://github.com/paesnichollas/data-analysis",
  liveUrl: null,
  featured: false
}
```

## ✅ Checklist de Verificação

Antes de finalizar, verifique se:

- [ ] A imagem está otimizada e na pasta correta
- [ ] O import da imagem foi adicionado
- [ ] O ID do projeto é único e sequencial
- [ ] Todas as propriedades obrigatórias estão preenchidas
- [ ] As URLs do GitHub e live estão corretas
- [ ] As tecnologias estão listadas corretamente
- [ ] A descrição é clara e informativa
- [ ] As traduções foram adicionadas (se aplicável)
- [ ] O projeto aparece corretamente no navegador

## 🚀 Testando as Mudanças

1. **Salve todos os arquivos**
2. **Execute o projeto localmente**:
   ```bash
   pnpm run dev
   ```
3. **Navegue até a seção "Projetos"**
4. **Verifique se o novo projeto aparece corretamente**
5. **Teste os links do GitHub e demo**
6. **Teste a responsividade em diferentes tamanhos de tela**

## 🎯 Dicas Avançadas

### Organizando Projetos por Importância
- Use `featured: true` para no máximo 2-3 projetos
- Ordene os projetos por relevância (mais importantes primeiro)
- Considere remover projetos muito antigos ou menos relevantes

### Otimizando Imagens
```bash
# Usando imagemin-cli para otimizar imagens
npm install -g imagemin-cli imagemin-webp
imagemin src/assets/*.png --out-dir=src/assets --plugin=webp
```

### Adicionando Métricas
Considere adicionar propriedades extras como:
```javascript
{
  // ... propriedades padrão
  metrics: {
    stars: 15,
    forks: 3,
    language: "JavaScript"
  },
  status: "Em desenvolvimento" // ou "Concluído", "Arquivado"
}
```

## 🆘 Solução de Problemas

### Imagem não aparece
- Verifique se o caminho do import está correto
- Confirme se a imagem está na pasta `src/assets/`
- Verifique se o nome do arquivo não tem espaços ou caracteres especiais

### Projeto não aparece na lista
- Confirme se o objeto foi adicionado ao array `projects`
- Verifique se não há erros de sintaxe JavaScript
- Abra o console do navegador para ver possíveis erros

### Links não funcionam
- Verifique se as URLs estão completas (incluindo `https://`)
- Teste os links em uma nova aba do navegador
- Para projetos sem demo, use `liveUrl: null`

---

💡 **Dica**: Mantenha este arquivo atualizado conforme você adiciona novas funcionalidades ao sistema de projetos!

