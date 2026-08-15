import { Play } from "lucide-react";
import type { PastWorkshop } from "@/config/workshops";

interface PastWorkshopCardProps {
  workshop: PastWorkshop;
  onOpen: (workshop: PastWorkshop) => void;
}

const PastWorkshopCard = ({ workshop, onOpen }: PastWorkshopCardProps) => {
  const thumb =
    workshop.thumbnail ||
    `https://i.ytimg.com/vi/${workshop.youtubeVideoId}/hqdefault.jpg`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-card">
      <button
        type="button"
        onClick={() => onOpen(workshop)}
        aria-label={`Watch ${workshop.title}`}
        className="relative block w-full aspect-video overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <img
          src={thumb}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute inset-0 bg-secondary/25 transition-colors group-hover:bg-secondary/40" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <Play className="w-6 h-6 ml-0.5" aria-hidden />
          </span>
        </span>
        {workshop.duration ? (
          <span className="absolute bottom-2 right-2 rounded bg-secondary/90 px-2 py-0.5 font-body text-xs text-secondary-foreground">
            {workshop.duration}
          </span>
        ) : null}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-primary">
          {workshop.category}
        </span>
        <h3 className="mt-2 font-heading text-lg text-secondary leading-snug">
          {workshop.title}
        </h3>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          {workshop.presenter} · {workshop.date}
        </p>
        <p className="mt-3 font-body text-sm text-foreground/80 line-clamp-3">
          {workshop.description}
        </p>
        <button
          type="button"
          onClick={() => onOpen(workshop)}
          className="mt-4 self-start font-body text-sm font-semibold uppercase tracking-wide text-secondary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Watch workshop
        </button>
      </div>
    </article>
  );
};

export default PastWorkshopCard;
