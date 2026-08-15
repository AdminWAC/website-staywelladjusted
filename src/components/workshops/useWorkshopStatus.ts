import { useEffect, useState } from "react";
import type { CurrentWorkshop, WorkshopStatus } from "@/config/workshops";

function computeStatus(workshop: CurrentWorkshop, now: number): WorkshopStatus {
  if (workshop.statusOverride && workshop.statusOverride !== "auto") {
    return workshop.statusOverride;
  }
  const start = new Date(workshop.startAt).getTime();
  const end = new Date(workshop.endAt).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) return "upcoming";
  if (now < start) return "upcoming";
  if (now >= start && now < end) return "live";
  return "ended";
}

/** Client-side live state, re-evaluated every second so the page transitions live. */
export function useWorkshopStatus(workshop: CurrentWorkshop) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const status = computeStatus(workshop, now);
  const msToStart = new Date(workshop.startAt).getTime() - now;

  return { status, msToStart, now };
}
