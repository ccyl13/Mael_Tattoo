import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Clock, BookMarked } from "lucide-react";

const BookPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: BookMarked,
      title: "200+ Páginas",
      description: "De contenido exclusivo"
    },
    {
      icon: Sparkles,
      title: "Técnicas Únicas",
      description: "Desarrolladas en 15 años"
    },
    {
      icon: Clock,
      title: "Acceso Anticipado",
      description: "Para suscriptores"
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(45_80%_55%/0.06),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              Próximo lanzamiento
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              El libro que todo tatuador
              <span className="block text-gradient-gold">necesita leer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              15 años de experiencia condensados en un manual práctico. 
              Desde los fundamentos hasta las técnicas más avanzadas.
            </p>
          </div>

          {/* Book mockup area */}
          <div className="relative mb-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Book visual */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-card via-secondary to-card rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45_80%_55%/0.1),transparent_50%)]" />
                    <div className="absolute top-8 left-8 right-8 space-y-2">
                      <div className="h-1 w-12 bg-primary/40 rounded" />
                      <div className="h-1 w-20 bg-primary/20 rounded" />
                    </div>
                    <div className="text-center px-6 relative z-10">
                      <p className="font-display text-5xl md:text-6xl text-foreground mb-2">MAEL</p>
                      <div className="h-0.5 w-16 mx-auto bg-primary mb-4" />
                      <p className="text-muted-foreground text-sm uppercase tracking-widest">
                        El Arte del Tatuaje
                      </p>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="h-0.5 w-full bg-border" />
                    </div>
                  </div>
                  
                  {/* Shadow */}
                  <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-background/50 to-transparent blur-xl" />
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-4">
                      Contenido del libro
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Fundamentos y técnicas esenciales</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Diseño y composición personalizada</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Gestión de estudio y clientes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>Casos prácticos y proyectos reales</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-semibold">Suscríbete</span> para recibir 
                      un capítulo gratuito y acceso anticipado al lanzamiento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-xl md:text-2xl text-foreground mb-1">{feature.title}</p>
                <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPreview;
