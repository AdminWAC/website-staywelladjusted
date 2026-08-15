import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PastWorkshop } from "@/config/workshops";

interface WorkshopVideoModalProps {
  workshop: PastWorkshop | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WorkshopVideoModal = ({ workshop, open, onOpenChange }: WorkshopVideoModalProps) => {
  if (!workshop) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[960px] w-[calc(100vw-2rem)] max-h-[92vh] overflow-y-auto p-0">
        <div className="w-full aspect-video bg-secondary">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${workshop.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${workshop.title} — Well Adjusted Chiropractic workshop recording`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <DialogHeader className="px-5 pb-6 pt-4 sm:px-7 text-left">
          <DialogTitle className="font-heading text-xl sm:text-2xl text-secondary leading-snug">
            {workshop.title}
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            {workshop.presenter} · {workshop.date}
          </DialogDescription>
          <p className="mt-2 font-body text-sm text-foreground/80">
            {workshop.description}
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopVideoModal;
