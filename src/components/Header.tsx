import { useState, useEffect } from "react";
import maelLogo from "@/assets/mael-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNewsletter = () => {
    const element = document.getElementById("newsletter");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={maelLogo}
                alt="Mael Tattoo Studio"
                className="h-12 md:h-14 object-contain relative"
              />
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNewsletter}
            className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_30px_hsl(45_80%_55%/0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Únete
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
