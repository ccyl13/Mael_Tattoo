import { BookOpen, Palette, GraduationCap, Instagram } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import ServiceCard from "@/components/ServiceCard";
import maelPhoto from "@/assets/mael-photo.jpeg";
import maelLogo from "@/assets/mael-logo.jpg";

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Nuevo Libro",
      description: "Mi primer libro sobre el arte del tatuaje. Técnicas, inspiración y años de experiencia en cada página.",
    },
    {
      icon: Palette,
      title: "Estudio",
      description: "Un espacio donde el arte cobra vida. Diseños personalizados y una experiencia única para cada cliente.",
    },
    {
      icon: GraduationCap,
      title: "Cursos",
      description: "Formación profesional para tatuadores. Aprende las técnicas que me han llevado a donde estoy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(45_80%_55%/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="animate-fade-in">
                <img 
                  src={maelLogo} 
                  alt="Mael Tattoo Studio" 
                  className="h-16 md:h-20 mx-auto lg:mx-0 mb-8 object-contain"
                />
              </div>
              
              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-none animate-slide-up"
              >
                Arte que
                <span className="block text-gradient-gold">vive en tu piel</span>
              </h1>
              
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                Suscríbete para ser el primero en conocer el lanzamiento de mi libro, 
                acceder a cursos exclusivos y novedades del estudio.
              </p>

              {/* Stats */}
              <div 
                className="flex justify-center lg:justify-start gap-8 md:gap-12 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <div>
                  <p className="font-display text-4xl md:text-5xl text-primary">15+</p>
                  <p className="text-muted-foreground text-sm">Años de experiencia</p>
                </div>
                <div>
                  <p className="font-display text-4xl md:text-5xl text-primary">3K+</p>
                  <p className="text-muted-foreground text-sm">Tatuajes realizados</p>
                </div>
                <div>
                  <p className="font-display text-4xl md:text-5xl text-primary">500+</p>
                  <p className="text-muted-foreground text-sm">Alumnos formados</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image & Form */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Photo */}
              <div className="relative mx-auto max-w-md lg:max-w-none animate-fade-in">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-50" />
                <img 
                  src={maelPhoto} 
                  alt="Mael - Tatuador profesional" 
                  className="relative w-full h-auto rounded-2xl border border-border shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Más que <span className="text-gradient-gold">tatuajes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Arte, formación y pasión. Descubre todo lo que tengo preparado para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 border-t border-border bg-[radial-gradient(ellipse_at_bottom,hsl(45_80%_55%/0.03),transparent_60%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                No te pierdas <span className="text-gradient-gold">nada</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Sé el primero en enterarte de lanzamientos, cursos y ofertas exclusivas.
              </p>
            </div>
            
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src={maelLogo} 
              alt="Mael Tattoo Studio" 
              className="h-10 object-contain"
            />
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de privacidad
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Aviso legal
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 Mael Tattoo Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
