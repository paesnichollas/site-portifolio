import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import businessDashboard from '../../assets/business-dashboard.webp';
import ecommerceApi from '../../assets/ecommerce-api.png';
import analyticsDashboard from '../../assets/analytics-dashboard.png';

const Projects = () => {
  // Projetos exemplo - facilmente editáveis
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description: "Aplicação web completa para gestão de empresas, incluindo controle de estoque, vendas, relatórios e dashboard administrativo. Desenvolvido com Django e PostgreSQL.",
      image: businessDashboard,
      technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/paesnichollas/sistema-gestao",
      liveUrl: "https://sistema-gestao-demo.herokuapp.com",
      featured: true
    },
    {
      id: 2,
      title: "API de E-commerce",
      description: "API RESTful robusta para e-commerce com autenticação JWT, processamento de pagamentos, gestão de produtos e integração com serviços externos.",
      image: ecommerceApi,
      technologies: ["Python", "Django REST", "Redis", "Celery", "Docker"],
      githubUrl: "https://github.com/paesnichollas/ecommerce-api",
      liveUrl: null,
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios. Interface moderna e responsiva.",
      image: analyticsDashboard,
      technologies: ["React", "Python", "FastAPI", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/paesnichollas/dashboard-analytics",
      liveUrl: "https://analytics-dashboard-demo.vercel.app",
      featured: false
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            Destaque
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Código
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              size="sm"
              asChild
              className="flex-1"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e significativos
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Code className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">15+</h3>
            <p className="text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Database className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">8+</h3>
            <p className="text-muted-foreground">Tecnologias Dominadas</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Server className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">5+</h3>
            <p className="text-muted-foreground">APIs Desenvolvidas</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais projetos ou discutir uma colaboração?
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/paesnichollas" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

