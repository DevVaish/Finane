interface StatCardProps {
  value: string;
  label: string;
  hasBorder?: boolean;
}

const StatCard = ({ value, label, hasBorder = true }: StatCardProps) => {
  return (
    <div className={`text-center py-4 group cursor-default ${hasBorder ? "border-t-4 border-primary/20 hover:border-primary transition-colors duration-300" : ""}`}>
      <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 inline-block transform">
        {value}
      </div>
      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{label}</p>
    </div>
  );
};

export default StatCard;
