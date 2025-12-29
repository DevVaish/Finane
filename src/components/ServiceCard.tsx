import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, image, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <Link 
      to="/services"
      className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {icon}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary group-hover:after:w-full after:transition-all after:duration-300">
            Learn more
          </span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
