import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { CurrentWorkshop } from "@/config/workshops";

interface LiveEndedStateProps {
  workshop: CurrentWorkshop;
}

const LiveEndedState = ({ workshop }: LiveEndedStateProps) => (
  <section className="py-12 md:py-20 bg-[#fdf6ee]">
    <div className="max-w-[900px] mx-auto px-4 text-center">
      <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary">
        Thanks for joining us
      </p>
      <h1 className="mt-3 font-heading text-2xl md:text-4xl lg:text-5xl text-secondary leading-tight">
        {workshop.title}
      </h1>

      {workshop.replayAvailable ? (
        <>
          <p className="mt-4 font-body text-base text-muted-foreground">
            Watch the full replay below.
          </p>
          <div className="mt-8 w-full aspect-video overflow-hidden rounded-xl bg-secondary shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${workshop.youtubeVideoId}?rel=0&modestbranding=1&playsinline=1`}
              title={`${workshop.title} — replay`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </>
      ) : (
        <>
          <p className="mt-5 font-body text-lg text-foreground/80">
            This workshop has ended.
          </p>
          <p className="mt-2 font-body text-base text-muted-foreground">
            The replay will be available in our Workshop Library soon.
          </p>
        </>
      )}

      <Button asChild className="mt-8 font-body uppercase tracking-wide">
        <Link to="/workshops">Explore past workshops</Link>
      </Button>
    </div>
  </section>
);

export default LiveEndedState;
