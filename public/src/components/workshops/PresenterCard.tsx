interface PresenterCardProps {
  name: string;
  title?: string;
  bio?: string;
  image?: string;
}

const PresenterCard = ({ name, title, bio, image }: PresenterCardProps) => (
  <div className="flex items-start gap-4">
    {image ? (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top border border-primary/30 flex-shrink-0"
      />
    ) : null}
    <div>
      <h3 className="font-heading text-lg md:text-xl text-secondary">{name}</h3>
      {title ? (
        <p className="font-body text-sm text-primary">{title}</p>
      ) : null}
      {bio ? (
        <p className="mt-2 font-body text-sm text-muted-foreground">{bio}</p>
      ) : null}
    </div>
  </div>
);

export default PresenterCard;
