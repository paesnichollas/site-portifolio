import { GraduationCap, MapPin, Languages, Code, Heart, Users, Zap } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Home = () => {
  const { t } = useTranslation();

  const technicalSkills = [
    'Python', 'Django', 'PostgreSQL', 'Docker', 'DevOps', 'REST APIs',
    'Git', 'Linux', 'JavaScript', 'React', 'HTML/CSS'
  ];

  const softSkills = [
    { name: t('about.softSkillsList.communication'), icon: Users },
    { name: t('about.softSkillsList.adaptability'), icon: Zap },
    { name: t('about.softSkillsList.empathy'), icon: Heart },
    { name: t('about.softSkillsList.proactivity'), icon: Code },
  ];

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.bio2')}
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <GraduationCap className="text-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">{t('about.education')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.educationValue')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="text-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">{t('about.location')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.locationValue')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 sm:col-span-2">
                <Languages className="text-primary" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">{t('about.languages')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.languagesValue')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.technicalSkills')}</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.softSkills')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <Icon className="text-primary" size={20} />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <blockquote className="text-foreground italic text-lg">
                {t('about.quote')}
              </blockquote>
              <cite className="text-muted-foreground text-sm mt-2 block">{t('about.quoteAuthor')}</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
