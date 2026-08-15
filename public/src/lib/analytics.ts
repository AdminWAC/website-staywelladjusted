/**
 * Lightweight frontend analytics bridge.
 *
 * Reuses whatever is already on the page: GTM `dataLayer` and/or GA4 `gtag`.
 * If neither exists, events are queued into `window.dataLayer` so a tag
 * manager installed later still receives them. No backend, no new platform.
 *
 * Never pass personal information (names, emails, phone numbers) here.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type WorkshopEvent =
  | "workshop_reserve_click"
  | "workshop_registration_modal_open"
  | "live_room_view"
  | "live_player_start"
  | "live_player_pause"
  | "live_player_complete"
  | "past_workshop_open";

export function trackEvent(event: WorkshopEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const payload = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== ""),
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}
