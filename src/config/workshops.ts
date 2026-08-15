/**
 * ============================================================================
 *  WELL ADJUSTED — WORKSHOPS CENTRAL CONFIGURATION
 * ============================================================================
 *  This is the ONLY file you need to edit to manage workshops.
 *
 *  - Change the live YouTube video ....... currentWorkshop.youtubeVideoId
 *  - Change / replace the GHL form ....... currentWorkshop.registrationFormEmbed
 *  - Force a live state .................. currentWorkshop.statusOverride
 *  - Add upcoming events ................. upcomingWorkshops[]
 *  - Add recordings ...................... pastWorkshops[]
 *
 *  No backend, no database, no CMS. 100% local to this repository.
 * ============================================================================
 */

import nathanPotter from "@/assets/team/nathan-potter.png";
import workshopFeature from "@/assets/gallery-3.jpg";

export type EventType = "online" | "in-person" | "hybrid";
export type WorkshopStatus = "upcoming" | "live" | "ended";
export type StatusOverride = "auto" | WorkshopStatus;

export interface CurrentWorkshop {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  /** Optional bullets shown in the live room under the player. */
  highlights?: string[];
  presenter: string;
  presenterTitle?: string;
  presenterBio?: string;
  presenterImage: string;
  dateLabel: string;
  /** ISO 8601 with explicit UTC offset, e.g. "2026-08-20T18:00:00-06:00" */
  startAt: string;
  endAt: string;
  timezone: string;
  eventType: EventType;
  location: string;
  youtubeVideoId: string;
  /** Raw GHL iframe embed HTML. Replace with any new form embed. */
  registrationFormEmbed: string;
  registrationOpen: boolean;
  statusOverride: StatusOverride;
  image: string;
  /**
   * When true, after endAt the live page shows the replay of youtubeVideoId
   * instead of the "replay coming soon" message.
   */
  replayAvailable?: boolean;
}

export interface UpcomingWorkshop {
  id: string;
  title: string;
  description: string;
  category?: string;
  presenter: string;
  presenterImage?: string;
  dateLabel: string;
  startAt: string;
  eventType: EventType;
  location?: string;
  image?: string;
  registrationOpen?: boolean;
  /** Optional per-event form embed; falls back to the current workshop embed. */
  registrationFormEmbed?: string;
}

export interface PastWorkshop {
  id: string;
  title: string;
  description: string;
  category: string;
  presenter: string;
  date: string;
  youtubeVideoId: string;
  /** Optional local thumbnail; otherwise the YouTube thumbnail is used. */
  thumbnail?: string;
  duration?: string;
  location?: string;
}

/** GHL registration form embed — replace the iframe below to swap forms. */
export const GHL_WORKSHOP_FORM_EMBED = `
<iframe
  src="https://link.ngynai.com/widget/form/Enlal1vgOBvJunicU0Y4"
  style="width:100%;height:100%;border:none;border-radius:8px"
  id="inline-Enlal1vgOBvJunicU0Y4"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="FRM | Website | Workshop "
  data-height="550"
  data-layout-iframe-id="inline-Enlal1vgOBvJunicU0Y4"
  data-form-id="Enlal1vgOBvJunicU0Y4"
  title="FRM | Website | Workshop ">
</iframe>
`;

/** Script that activates GHL inline form embeds. */
export const GHL_FORM_SCRIPT_SRC = "https://link.ngynai.com/js/form_embed.js";

export const currentWorkshop: CurrentWorkshop = {
  id: "body-signals-2026-08",
  title: "Body Signals: What Your Symptoms Are Really Telling You",
  shortTitle: "Body Signals",
  description:
    "A live educational workshop on how pain, fatigue and tension are signals from your nervous system — and the practical steps you can take to respond to them before they become chronic.",
  highlights: [
    "How the nervous system communicates stress through symptoms",
    "The difference between pain relief and true correction",
    "Simple daily habits that protect your spine and posture",
    "Live Q&A with Dr. Nate",
  ],
  presenter: "Dr. Nathan Potter",
  presenterTitle: "Doctor of Chiropractic",
  presenterBio:
    "Dr. Nate leads clinical care at Well Adjusted Chiropractic, helping thousands of families across Colorado and Texas restore function through principled chiropractic care.",
  presenterImage: nathanPotter,
  dateLabel: "Thursday, August 20 · 6:00 PM MT",
  startAt: "2026-08-20T18:00:00-06:00",
  endAt: "2026-08-20T19:30:00-06:00",
  timezone: "America/Denver",
  eventType: "online",
  location: "Live online — join from anywhere",
  youtubeVideoId: "jfKfPfyJRdk",
  registrationFormEmbed: GHL_WORKSHOP_FORM_EMBED,
  registrationOpen: true,
  statusOverride: "auto",
  image: workshopFeature,
  replayAvailable: false,
};

export const upcomingWorkshops: UpcomingWorkshop[] = [];

export const pastWorkshops: PastWorkshop[] = [];

/** Categories present in the configured library (client-side filters). */
export const workshopCategories = Array.from(
  new Set(pastWorkshops.map((w) => w.category).filter(Boolean)),
);
