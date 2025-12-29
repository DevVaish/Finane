import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, content, image }: TestimonialCardProps) => {
  return (
    <div className="group bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5 fill-accent text-accent transition-transform duration-300 hover:scale-125" 
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      <blockquote className="font-display text-lg text-foreground mb-6 leading-relaxed relative">
        <span className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</span>
        {content}
        <span className="text-4xl text-primary/20 font-serif">"</span>
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-primary/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
        <div>
          <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-sm text-primary">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
