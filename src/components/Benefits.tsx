import { Users, GraduationCap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Para Niños",
    description: "Una herramienta que les permite expresarse libremente y comunicarse con el mundo que los rodea.",
  },
  {
    icon: GraduationCap,
    title: "Para Educadores",
    description: "Recursos pedagógicos diseñados para facilitar la enseñanza y el seguimiento del progreso.",
  },
  {
    icon: Heart,
    title: "Para Familias",
    description: "Fortalece los vínculos familiares permitiendo una comunicación más fluida en el hogar.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ¿Para Quién es Hands2Voice?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diseñado para toda la comunidad educativa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero shadow-glow">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
