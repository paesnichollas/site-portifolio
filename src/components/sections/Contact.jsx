import { Mail, Github, Linkedin, Download, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "paesnichollas@gmail.com",
      href: "mailto:paesnichollas@gmail.com",
      description: "Envie-me um email para discussões profissionais"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@paesnichollas",
      href: "https://github.com/paesnichollas",
      description: "Confira meus projetos e contribuições"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Nichollas Rocha de Araújo Paes",
      href: "https://www.linkedin.com/in/nichollas-rocha-de-ara%C3%BAjo-paes-a84a441a3/?trk=opento_sprofile_details",
      description: "Conecte-se comigo profissionalmente"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Maceió - AL, Brasil",
      href: null,
      description: "Disponível para trabalho remoto"
    }
  ];

  const handleDownloadCV = () => {
    // Aqui você pode implementar o download do CV
    // Por enquanto, vamos simular com um alert
    alert("Funcionalidade de download do CV será implementada em breve!");
  };

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
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

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Ações Rápidas
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="flex-1"
                >
                  <Download size={20} className="mr-2" />
                  Baixar Currículo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1"
                >
                  <a href="mailto:paesnichollas@gmail.com">
                    <MessageCircle size={20} className="mr-2" />
                    Enviar Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <Button className="w-full" size="lg">
                <Mail size={20} className="mr-2" />
                Enviar Mensagem
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                * Este formulário será implementado em uma versão futura. 
                Por enquanto, use os contatos diretos acima.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Nichollas Rocha de Araújo Paes. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Desenvolvido com ❤️ usando React.js e Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

