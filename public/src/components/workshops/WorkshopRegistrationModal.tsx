import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Monitor } from "lucide-react";
import GhlFormEmbed from "./GhlFormEmbed";
import type { EventType } from "@/config/workshops";

export interface RegistrationTarget {
  id: string;
  title: string;
  dateLabel: string;
  eventType: EventType;
  location?: string;
  formEmbed: string;
}

interface WorkshopRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  workshop: RegistrationTarget | null;
}

const WorkshopRegistrationModal = ({
  open,
  onOpenChange,
  workshop,
}: WorkshopRegistrationModalProps) => {
  if (!workshop) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] w-[calc(100vw-2rem)] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-5 pt-6 sm:px-7 text-left">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">
            Reserve your spot
          </p>
          <DialogTitle className="font-heading text-xl sm:text-2xl text-secondary leading-snug">
            {workshop.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Workshop registration form
          </DialogDescription>
          <div className="mt-2 space-y-1.5 font-body text-sm text-muted-foreground">
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
          <p className="mt-3 font-body text-sm text-foreground/80">
            Register below and we'll send your workshop access details directly to
            your inbox.
          </p>
        </DialogHeader>

        <div className="px-5 pb-6 sm:px-7">
          <GhlFormEmbed
            key={workshop.id}
            embedHtml={workshop.formEmbed}
            className="w-full h-[560px] [&_iframe]:w-full [&_iframe]:h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopRegistrationModal;
