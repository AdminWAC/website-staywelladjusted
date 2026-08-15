import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LiveCountdown from "./LiveCountdown";
import PresenterCard from "./PresenterCard";
import type { CurrentWorkshop } from "@/config/workshops";

interface LiveWaitingRoomProps {
  workshop: CurrentWorkshop;
  msToStart: number;
}

const LiveWaitingRoom = ({ workshop, msToStart }: LiveWaitingRoomProps) => (
  <section className="py-12 md:py-20 bg-[#fdf6ee]">
    <div className="max-w-[900px] mx-auto px-4 text-center">
      <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary">
        Your workshop is coming up
      </p>
      <h1 className="mt-3 font-heading text-2xl md:text-4xl lg:text-5xl text-secondary leading-tight">
        {workshop.title}
      </h1>
      <p className="mt-4 font-body text-base text-muted-foreground">
        {workshop.presenter} · {workshop.dateLabel}
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-primary/20">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full aspect-video object-cover"
        />
      </div>

      <div className="mt-8">
        <LiveCountdown label={workshop.shortTitle} msRemaining={msToStart} />
      </div>

      <p className="mt-8 font-body text-base md:text-lg text-foreground/80">
        You're in the right place. Come back here when the workshop begins — this
        page will start automatically.
      </p>

      <div className="mt-8 max-w-md mx-auto text-left rounded-xl border border-primary/20 bg-card p-5">
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
        className="mt-8 font-body uppercase tracking-wide border-primary text-secondary"
      >
        <Link to="/workshops">Explore previous workshops</Link>
      </Button>
    </div>
  </section>
);

export default LiveWaitingRoom;
