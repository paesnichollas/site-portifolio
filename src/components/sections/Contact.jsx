import { Mail, Github, Linkedin, Download, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '../../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.contactMethods.email.title'),
      value: "paesnichollas@gmail.com",
      href: "mailto:paesnichollas@gmail.com",
      description: t('contact.contactMethods.email.description')
    },
    {
      icon: Github,
      title: t('contact.contactMethods.github.title'),
      value: "@paesnichollas",
      href: "https://github.com/paesnichollas",
      description: t('contact.contactMethods.github.description')
    },
    {
      icon: Linkedin,
      title: t('contact.contactMethods.linkedin.title'),
      value: "Nichollas Rocha de Araújo Paes",
      href: "https://www.linkedin.com/in/nichollas-rocha-de-ara%C3%BAjo-paes-a84a441a3/?trk=opento_sprofile_details",
      description: t('contact.contactMethods.linkedin.description')
    },
    {
      icon: MapPin,
      title: t('contact.contactMethods.location.title'),
      value: t('contact.contactMethods.location.value'),
      href: null,
      description: t('contact.contactMethods.location.description')
    }
  ];

  const handleDownloadCV = async () => {
    const lang = localStorage.getItem('lang') || 'pt';
    const isEnglish = lang === 'en';

    const url = isEnglish ? '/resume.pdf' : '/curriculo.pdf';
    const filename = isEnglish ? 'Resume_Nichollas_EN.pdf' : 'Curriculo_Nichollas_PT-BR.pdf';

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erro ao baixar o arquivo');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.click();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      alert('Não foi possível baixar o currículo.');
      console.error(error);
    }
  };


  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('contact.contactInfo')}
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {method.title}
                        </h4>
                        {method.href ? (
                          <a
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {method.value}
                          </span>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                {t('contact.quickActions')}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleDownloadCV} size="lg" className="flex-1">
                  <Download size={20} className="mr-2" />
                  {t('contact.downloadCV')}
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <a href="mailto:paesnichollas@gmail.com">
                    <MessageCircle size={20} className="mr-2" />
                    {t('contact.sendEmail')}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('contact.sendMessage')}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              <Button className="w-full" size="lg">
                <Mail size={20} className="mr-2" />
                {t('contact.form.send')}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                {t('contact.form.note')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            {t('contact.footer.copyright')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t('contact.footer.madeWith')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;