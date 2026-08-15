import { Link } from "react-router-dom";
import { Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import LivePlayer from "./LivePlayer";
import PresenterCard from "./PresenterCard";
import { trackEvent } from "@/lib/analytics";
import type { CurrentWorkshop } from "@/config/workshops";

interface LiveRoomProps {
  workshop: CurrentWorkshop;
}

const LiveRoom = ({ workshop }: LiveRoomProps) => {
  const meta = {
    workshop_id: workshop.id,
    workshop_title: workshop.title,
    event_type: workshop.eventType,
    video_id: workshop.youtubeVideoId,
  };

  return (
    <>
      <section className="bg-secondary py-6 md:py-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive px-3 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-destructive-foreground">
              <Radio className="w-3.5 h-3.5" aria-hidden /> Live now
            </span>
            <h1 className="mt-3 font-heading text-xl md:text-3xl text-secondary-foreground leading-snug">
              {workshop.title}
            </h1>
            <p className="mt-2 font-body text-sm text-secondary-foreground/80">
              {workshop.presenter} · {workshop.dateLabel}
            </p>
          </div>

          <div className="mt-5 md:mt-7">
            <LivePlayer
              videoId={workshop.youtubeVideoId}
              title={`${workshop.title} — live workshop`}
              onStart={() => trackEvent("live_player_start", meta)}
              onPause={() => trackEvent("live_player_pause", meta)}
              onComplete={() => trackEvent("live_player_complete", meta)}
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="font-heading text-xl md:text-2xl text-secondary">
              Tonight's Workshop
            </h2>
            <p className="mt-3 font-body text-base text-foreground/80">
              {workshop.description}
            </p>
            {workshop.highlights?.length ? (
              <ul className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
                {workshop.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl text-secondary">Your Host</h2>
            <div className="mt-4">
              <PresenterCard
                name={workshop.presenter}
                title={workshop.presenterTitle}
                bio={workshop.presenterBio}
                image={workshop.presenterImage}
              />
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-6 font-body uppercase tracking-wide border-primary text-secondary"
            >
              <Link to="/workshops">Explore previous workshops</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveRoom;
