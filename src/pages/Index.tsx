import { BookOpen, Palette, GraduationCap, Instagram, ArrowDown } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import maelPhoto from "@/assets/mael-photo.jpeg";

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

  const scrollToContent = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45_80%_55%/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(45_80%_55%/0.05),transparent_50%)]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Próximamente: Nuevo Libro
                </span>
              </div>

              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-[0.9] tracking-tight animate-slide-up"
              >
                El arte
                <span className="block text-gradient-gold">permanece</span>
              </h1>
              
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                Más de 15 años transformando ideas en arte. Suscríbete y sé el primero 
                en acceder al lanzamiento de mi libro, cursos exclusivos y novedades del estudio.
              </p>

              {/* Stats */}
              <div 
                className="grid grid-cols-3 gap-6 md:gap-10 max-w-lg mx-auto lg:mx-0 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="text-center lg:text-left">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-none">15+</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wider">Años</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-none">3K+</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wider">Tatuajes</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-none">500+</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wider">Alumnos</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm lg:max-w-md animate-fade-in">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-2xl opacity-40" />
                
                {/* Frame decoration */}
                <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/50 via-transparent to-primary/50 rounded-2xl" />
                
                <div className="relative bg-card rounded-2xl overflow-hidden">
                  <img 
                    src={maelPhoto} 
                    alt="Mael - Tatuador profesional" 
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-display text-3xl md:text-4xl text-foreground">MAEL</p>
                        <p className="text-primary text-sm tracking-widest uppercase">Tattoo Artist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        >
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <ArrowDown className="w-5 h-5 animate-float group-hover:text-primary" />
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Lo que ofrezco
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Más que <span className="text-gradient-gold">tatuajes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Arte, formación y pasión. Descubre todo lo que tengo preparado para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
      <section id="newsletter" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_80%_55%/0.05),transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Newsletter exclusiva
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Entra en el <span className="text-gradient-gold">círculo</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Acceso anticipado a lanzamientos, descuentos en cursos y contenido exclusivo.
              </p>
            </div>
            
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-display text-2xl text-foreground mb-1">MAEL</p>
              <p className="text-muted-foreground text-sm">Tattoo Studio</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                aria-label="Instagram"
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
              © 2024 Mael Tattoo Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
