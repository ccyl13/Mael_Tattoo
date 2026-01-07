import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Mail, Loader2, CheckCircle, Gift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

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
    
    try {
      const { data, error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email, name },
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      toast({
        title: "¡Bienvenido!",
        description: "Te has suscrito correctamente a la lista.",
      });
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description: "No se pudo completar la suscripción. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div 
        ref={ref}
        className={`bg-gradient-card border border-primary/30 rounded-2xl p-8 md:p-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl mb-3 text-foreground">
          ¡Bienvenido al círculo!
        </h3>
        <p className="text-muted-foreground text-lg mb-6">
          Pronto recibirás novedades exclusivas sobre el libro, cursos y más.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Gift className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Revisa tu email para tu regalo de bienvenida</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className={`relative bg-gradient-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-700 hover:border-primary/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Subtle glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl opacity-50 blur-sm -z-10" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            Únete a la lista
          </h3>
          <p className="text-muted-foreground text-sm">
            +500 suscriptores ya dentro
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
            Nombre
            <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
            Email
            <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary transition-all duration-300"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="privacy"
            checked={acceptedPrivacy}
            onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
            className="mt-0.5 border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all duration-300"
          />
          <label
            htmlFor="privacy"
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer hover:text-foreground transition-colors"
          >
            Acepto la{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              política de privacidad
            </a>{" "}
            y recibir comunicaciones de Mael Tattoo Studio.
          </label>
        </div>

        <Button
          type="submit"
          variant="gold"
          size="xl"
          className="w-full mt-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Suscribiendo...
            </>
          ) : (
            <>
              Quiero unirme
              <span className="ml-2">→</span>
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-2 flex items-center justify-center gap-2">
          <span className="w-1 h-1 rounded-full bg-green-500" />
          Sin spam. Puedes darte de baja cuando quieras.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
