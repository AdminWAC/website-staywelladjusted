import { Link } from "react-router-dom";
import { Calendar, MapPin, Monitor, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CurrentWorkshop, WorkshopStatus } from "@/config/workshops";

interface FeaturedWorkshopProps {
  workshop: CurrentWorkshop;
  status: WorkshopStatus;
  onReserve: () => void;
}

const FeaturedWorkshop = ({ workshop, status, onReserve }: FeaturedWorkshopProps) => {
  const isLive = status === "live";

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl border border-primary/20 bg-card">
          <div className="relative min-h-[240px] md:min-h-[340px]">
            <img
              src={workshop.image}
              alt={workshop.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {isLive ? (
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-destructive px-3 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-destructive-foreground">
                <Radio className="w-3.5 h-3.5" aria-hidden /> Live now
              </span>
            ) : null}
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-center">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary">
              {isLive ? "Happening now" : "Next workshop"}
            </p>
            <h2 className="mt-3 font-heading text-2xl md:text-4xl text-secondary leading-tight">
              {workshop.title}
            </h2>

            <div className="mt-4 space-y-2 font-body text-sm md:text-base text-muted-foreground">
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

            <p className="mt-5 font-body text-base text-foreground/80">
              {workshop.description}
            </p>

            <p className="mt-4 font-body text-sm text-secondary">
              Presented by <strong>{workshop.presenter}</strong>
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {status === "live" ? (
                <Button asChild size="lg" className="font-body uppercase tracking-wide">
                  <Link to="/live-stream">Join live workshop</Link>
                </Button>
              ) : status === "upcoming" && workshop.registrationOpen ? (
                <Button
                  size="lg"
                  onClick={onReserve}
                  className="font-body uppercase tracking-wide"
                >
                  Reserve my spot
                </Button>
              ) : status === "ended" && workshop.replayAvailable ? (
                <Button asChild size="lg" className="font-body uppercase tracking-wide">
                  <Link to="/live-stream">Watch replay</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkshop;
