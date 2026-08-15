import { Calendar, MapPin, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UpcomingWorkshop } from "@/config/workshops";

interface WorkshopCardProps {
  workshop: UpcomingWorkshop;
  onReserve: (workshop: UpcomingWorkshop) => void;
}

const WorkshopCard = ({ workshop, onReserve }: WorkshopCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-card transition-shadow hover:shadow-md">
    {workshop.image ? (
      <img
        src={workshop.image}
        alt={workshop.title}
        loading="lazy"
        className="w-full aspect-[16/9] object-cover"
      />
    ) : null}
    <div className="flex flex-1 flex-col p-5">
      {workshop.category ? (
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-primary">
          {workshop.category}
        </span>
      ) : null}
      <h3 className="mt-2 font-heading text-xl text-secondary leading-snug">
        {workshop.title}
      </h3>
      <div className="mt-3 space-y-1.5 font-body text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
          {workshop.dateLabel}
        </p>
        <p className="flex items-center gap-2">
          {workshop.eventType === "online" ? (
            <Monitor className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
          ) : (
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
          )}
          <span className="capitalize">{workshop.eventType}</span>
          {workshop.location ? <span>· {workshop.location}</span> : null}
        </p>
      </div>
      <p className="mt-3 font-body text-sm text-foreground/80 line-clamp-3">
        {workshop.description}
      </p>
      <p className="mt-3 font-body text-sm text-secondary">{workshop.presenter}</p>
      {workshop.registrationOpen !== false ? (
        <Button
          className="mt-5 w-full font-body uppercase tracking-wide"
          onClick={() => onReserve(workshop)}
        >
          Reserve spot
        </Button>
      ) : null}
    </div>
  </article>
);

export default WorkshopCard;
