import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Mail, Loader2, CheckCircle } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    if (!acceptedPrivacy) {
      toast({
        title: "Política de privacidad",
        description: "Debes aceptar la política de privacidad para continuar.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, introduce un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    toast({
      title: "¡Bienvenido!",
      description: "Te has suscrito correctamente a la lista.",
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
          ¡Gracias por suscribirte!
        </h3>
        <p className="text-muted-foreground text-lg">
          Pronto recibirás novedades exclusivas sobre el libro, cursos y más.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 glow-gold animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            Únete a la lista
          </h3>
          <p className="text-muted-foreground text-sm">
            Sé el primero en enterarte de todo
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nombre
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="privacy"
            checked={acceptedPrivacy}
            onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
            className="mt-0.5 border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <label
            htmlFor="privacy"
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
          >
            Acepto la{" "}
            <a href="#" className="text-primary hover:underline">
              política de privacidad
            </a>{" "}
            y recibir comunicaciones de Mael Tattoo Studio.
          </label>
        </div>

        <Button
          type="submit"
          variant="gold"
          size="xl"
          className="w-full mt-4"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Suscribiendo...
            </>
          ) : (
            "Suscribirme"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-2">
          Sin spam. Puedes darte de baja cuando quieras.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
