import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '../../hooks/useTranslation';

const Home = ({ onSectionChange }) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              {t('home.greeting')}{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
                {t('home.name')}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              {t('home.role')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.description')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/paesnichollas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors duration-200"
            >
              <Github size={24} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/nichollas-rocha-de-ara%C3%BAjo-paes-a84a441a3/?trk=opento_sprofile_details"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors duration-200"
            >
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a
              href="mailto:paesnichollas@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-accent transition-colors duration-200"
            >
              <Mail size={24} className="text-foreground" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => onSectionChange('projects')}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              {t('home.viewProjects')}
            </Button>
            <Button
              onClick={() => onSectionChange('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg"
            >
              {t('home.getInTouch')}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() => onSectionChange('about')}
              className="animate-bounce p-2 rounded-full hover:bg-accent transition-colors duration-200"
            >
              <ArrowDown size={24} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


