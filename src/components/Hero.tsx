import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hands2Voice
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Comunicación inclusiva para niños sordos y mudos. 
              Un entorno educativo profesional y accesible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Conocer Más
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-float" />
            <img 
              src={heroImage}
              alt="Niños comunicándose con lenguaje de señas"
              className="relative rounded-2xl shadow-glow w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
