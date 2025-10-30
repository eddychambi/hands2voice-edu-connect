import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hands2Voice</h3>
            <p className="opacity-90 leading-relaxed">
              Empoderando la comunicación y el aprendizaje para todos los niños.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:underline">Acerca de</a></li>
              <li><a href="#" className="hover:underline">Características</a></li>
              <li><a href="#" className="hover:underline">Descargar</a></li>
              <li><a href="#" className="hover:underline">Soporte</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@hands2voice.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+34 900 123 456</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center opacity-90">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 fill-current" /> para una comunicación inclusiva
          </p>
          <p className="mt-2 text-sm">
            © 2024 Hands2Voice. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
