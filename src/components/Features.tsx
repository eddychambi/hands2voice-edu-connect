import { Card } from "@/components/ui/card";
import featureCommunication from "@/assets/feature-communication.png";
import featureEducation from "@/assets/feature-education.png";
import featureEasy from "@/assets/feature-easy.png";

const features = [
  {
    title: "Comunicación Visual",
    description: "Interfaz intuitiva que permite a los niños expresarse mediante gestos, imágenes y lenguaje de señas digital.",
    image: featureCommunication,
  },
  {
    title: "Entorno Educativo",
    description: "Diseñado específicamente para apoyar el aprendizaje con actividades interactivas y progresivas.",
    image: featureEducation,
  },
  {
    title: "Fácil de Usar",
    description: "Interfaz adaptada para niños con navegación simple y elementos visuales claros.",
    image: featureEasy,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Características Principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una herramienta completa diseñada para facilitar la comunicación y el aprendizaje
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
