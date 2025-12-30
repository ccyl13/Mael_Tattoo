import { LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`group relative bg-gradient-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(0_0%_0%/0.3),0_0_30px_hsl(45_80%_55%/0.1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
