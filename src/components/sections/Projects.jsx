import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '../../hooks/useTranslation';
import NewLife from '../../assets/newlife.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Projeto New Life",
      description: "Projeto de e-commerce, focado na exposição de produtos naturais e suplementos.",
      image: NewLife,
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/paesnichollas/newlifeproject",
      liveUrl: null,
      featured: true
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
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
            {t('projects.featured')}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

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

        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                {t('projects.code')}
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                {t('projects.demo')}
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Code className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">3+</h3>
            <p className="text-muted-foreground">{t('projects.stats.completed')}</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Database className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">7+</h3>
            <p className="text-muted-foreground">{t('projects.stats.technologies')}</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <Server className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">3+</h3>
            <p className="text-muted-foreground">{t('projects.stats.apis')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            {t('projects.cta')}
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/paesnichollas" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              {t('projects.viewAllGithub')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
