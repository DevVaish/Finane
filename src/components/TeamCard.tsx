interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-card translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-sm opacity-90">View Profile</p>
        </div>
      </div>
      <div className="p-6 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
