import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Acceso completo a todas las funcionalidades",
  "Biblioteca completa de señas en español",
  "Modo educativo con ejercicios interactivos",
  "Actualizaciones gratuitas de por vida",
  "Soporte técnico prioritario",
  "Compatible con Windows, Mac y Linux",
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Inversión en Comunicación
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una sola vez, beneficios para toda la vida
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-3xl"></div>
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-elegant">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-hero text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Licencia Única
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">S/ 70</span>
                </div>
                <p className="text-muted-foreground">Pago único • Sin mensualidades</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6 bg-gradient-hero hover:opacity-90 transition-all shadow-glow hover:shadow-glow-hover"
              >
                Obtener Hands2Voice
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Garantía de satisfacción de 30 días
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
