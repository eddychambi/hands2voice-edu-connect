import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, Check } from "lucide-react";

const features = [
  "Compatible con Windows, Mac y Linux",
  "Interfaz adaptada para niños",
  "Actualizaciones automáticas gratuitas",
  "Soporte técnico dedicado",
  "Sin publicidad ni compras dentro de la app",
];

const Download = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-card border-0 shadow-glow animate-scale-in">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Descarga Hands2Voice
              </h2>
              <p className="text-xl text-muted-foreground">
                Comienza a transformar la comunicación hoy mismo
              </p>
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-left animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-hero text-white hover:opacity-90 shadow-glow text-lg px-12 py-7 h-auto"
            >
              <DownloadIcon className="mr-2 h-6 w-6" />
              Descargar Gratis
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Versión 2.0 | Compatible con todos los sistemas operativos
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Download;
