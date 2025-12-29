import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
}

const PricingCard = ({ title, description, price, features, highlighted = false, icon }: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group ${
        highlighted
          ? "bg-secondary text-secondary-foreground shadow-xl scale-105"
          : "bg-card border border-border shadow-sm hover:border-primary/30"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
        highlighted ? "bg-primary-foreground/20" : "bg-primary/10 group-hover:bg-primary/20"
      }`}>
        <div className={highlighted ? "text-primary-foreground" : "text-primary"}>
          {icon}
        </div>
      </div>

      <h3 className={`font-display text-xl font-semibold mb-2 ${
        highlighted ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h3>
      
      <p className={`text-sm mb-6 leading-relaxed ${
        highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
      }`}>
        {description}
      </p>

      <div className="mb-6">
        <span className={`font-display text-4xl font-bold transition-all duration-300 group-hover:scale-110 inline-block ${
          highlighted ? "text-primary-foreground" : "text-foreground"
        }`}>
          ${price}
        </span>
        <span className={`text-sm ${
          highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {" "}USD/month
        </span>
      </div>

      <Button
        asChild
        variant={highlighted ? "secondary" : "default"}
        className={`w-full mb-6 transition-all duration-300 group-hover:shadow-lg ${highlighted ? "bg-card text-foreground hover:bg-card/90" : ""}`}
      >
        <Link to="/contact">Get Started</Link>
      </Button>

      <div className={`pt-6 border-t ${highlighted ? "border-primary-foreground/20" : "border-border"}`}>
        <p className={`text-sm font-medium mb-4 ${
          highlighted ? "text-primary-foreground" : "text-foreground"
        }`}>
          Services Included:
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 group/item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Check className={`h-4 w-4 transition-transform duration-300 group-hover/item:scale-125 ${highlighted ? "text-primary-foreground" : "text-primary"}`} />
              <span className={`text-sm ${
                highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
