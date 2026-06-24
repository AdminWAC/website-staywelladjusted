import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const SCHEDULE_PATH = "/schedule-an-appointment-new-patient-special-offer";

const locations = [
  { name: "Arlington TX", phone: "(682) 277-1966", tel: "6822771966" },
  { name: "Fort Collins CO", phone: "(970) 714-2207", tel: "9707142207" },
  { name: "Greeley CO", phone: "(970) 888-7097", tel: "9708887097" },
  { name: "Erie CO", phone: "(970) 670-3607", tel: "9706703607" },
  { name: "Loveland CO", phone: "(970) 427-2543", tel: "9704272543" },
];

const shortTestimonials = [
  {
    quote:
      "I've been to surgeons, orthopedic doctors, and PTs with no relief. After just 3 visits here, everything changed.",
    name: "Rachel S.",
  },
  {
    quote:
      "I walked in five weeks before a scheduled lumbar fusion surgery. I never needed it.",
    name: "Pete B.",
  },
  {
    quote: "I have not had a true migraine attack since beginning treatment.",
    name: "Danielle S.",
  },
];

const checklist = [
  "Full spinal x-rays, where clinically indicated",
  "Neurological insight scanning",
  "In-depth health history review",
  "A dedicated findings appointment",
  "A personalized plan forward for you",
];

// Build schedule URL with UTM params forwarded (or default brochure ones)
const useScheduleHref = () => {
  const [href, setHref] = useState(SCHEDULE_PATH);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const out = new URLSearchParams();
    utmKeys.forEach((k) => {
      const v = params.get(k);
      if (v) out.set(k, v);
    });
    // Fallback defaults if visitor came directly from the printed brochure QR
    if (!out.get("utm_source")) out.set("utm_source", "brochure");
    if (!out.get("utm_medium")) out.set("utm_medium", "qr");
    if (!out.get("utm_campaign")) out.set("utm_campaign", "new_patient_acquisition");
    setHref(`${SCHEDULE_PATH}?${out.toString()}`);
  }, []);

  return href;
};

// Fire a tracking event (dataLayer + gtag if available)
const track = (event: string, data: Record<string, unknown> = {}) => {
  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  if (typeof w.gtag === "function") {
    w.gtag("event", event, data);
  }
};

const GoldButton = ({
  href,
  children,
  trackingLabel,
}: {
  href: string;
  children: React.ReactNode;
  trackingLabel: string;
}) => (
  <a
    href={href}
    onClick={() => track("schedule_cta_click", { label: trackingLabel })}
    className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-wide text-base md:text-lg px-8 py-4 rounded-md shadow-md hover:opacity-90 transition-opacity"
  >
    {children}
  </a>
);

const VideoBlock = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const milestones = useRef<Set<number>>(new Set());
  const startedRef = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const onPlay = () => {
      if (!startedRef.current) {
        startedRef.current = true;
        track("video_start", { video_title: "start_page_testimonial" });
      }
    };
    const onTime = () => {
      if (!v.duration || isNaN(v.duration)) return;
      const pct = (v.currentTime / v.duration) * 100;
      [25, 50, 75].forEach((m) => {
        if (pct >= m && !milestones.current.has(m)) {
          milestones.current.add(m);
          track("video_progress", {
            video_title: "start_page_testimonial",
            percent: m,
          });
        }
      });
    };
    const onEnd = () => {
      if (!milestones.current.has(100)) {
        milestones.current.add(100);
        track("video_complete", { video_title: "start_page_testimonial" });
      }
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  return (
    <video
      ref={ref}
      controls
      playsInline
      preload="metadata"
      poster="/images-lp-francio/kylee-poster.jpg"
      crossOrigin="anonymous"
      className="w-full h-full rounded-lg shadow-lg bg-black"
      src="/images-lp-francio/Kylee_Testimonal_14mb.mp4"
    >
      <track
        kind="captions"
        label="English"
        srcLang="en"
        src="/images-lp-francio/kylee-captions.vtt"
        default
      />
    </video>
  );
};

const Start = () => {
  const scheduleHref = useScheduleHref();

  useEffect(() => {
    document.title = "Start Your Healing Journey | Well Adjusted Chiropractic";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "description",
      "Real patient stories and a clear path forward. Schedule your examination with Well Adjusted Chiropractic today."
    );

    // Mark landing page view (helpful for brochure attribution)
    track("brochure_landing_view", {
      page: "/start",
      query: window.location.search,
    });
  }, []);

  return (
    <main className="bg-background text-foreground">
      {/* Minimal top brand band — no navigation links */}
      <div className="bg-primary py-4">
        <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-center">
          <img
            src="/images-wp/header-logo.svg"
            alt="Well Adjusted Chiropractic"
            className="h-12 md:h-14 brightness-0 invert"
          />
        </div>
      </div>

      {/* Block 1 — Headline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-secondary leading-tight mb-6">
            She hadn't gone a day without a migraine since she was ten.
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 max-w-[700px] mx-auto">
            After trying everything, she found us. She has not had a migraine since
            her first visit.
          </p>
          <p className="font-body text-sm md:text-base text-secondary/70 italic mb-8">
            — Danielle S., Erie CO
          </p>
          <GoldButton href={scheduleHref} trackingLabel="block1_headline">
            Schedule Your Examination
          </GoldButton>
        </div>
      </section>

      {/* Block 2 — Video */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-8 uppercase">
            Watch What's Possible.
          </h2>
          <div className="aspect-video max-w-[860px] mx-auto mb-6">
            <VideoBlock />
          </div>
          <p className="font-body text-base md:text-lg text-secondary mb-8 italic">
            Real patient. Real story.
          </p>
          <GoldButton href={scheduleHref} trackingLabel="block2_video">
            Schedule Now
          </GoldButton>
        </div>
      </section>

      {/* Block 3 — 3 short testimonials */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {shortTestimonials.map((t) => (
              <div
                key={t.name}
                className="bg-muted rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-sm border-t-4 border-primary"
              >
                <p className="font-body text-base md:text-lg text-secondary leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <p className="font-heading text-sm uppercase tracking-wide text-primary">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4 — Checklist */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[760px] mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 uppercase">
            What Your Visit Includes
          </h2>
          <ul className="text-left space-y-5 mb-12 max-w-[600px] mx-auto">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check
                    className="w-4 h-4 text-primary"
                    strokeWidth={3}
                  />
                </span>
                <span className="font-body text-base md:text-lg text-secondary">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <GoldButton href={scheduleHref} trackingLabel="block4_checklist">
            Schedule Your Examination
          </GoldButton>
        </div>
      </section>

      {/* Block 5 — Minimal Footer */}
      <footer className="bg-primary py-12">
        <div className="max-w-[1100px] mx-auto px-4 text-primary-foreground">
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <img
              src="/images-wp/header-logo.svg"
              alt="Well Adjusted Chiropractic"
              className="h-14 brightness-0 invert"
            />
            <p className="font-body italic text-sm md:text-base opacity-90">
              Soft Touch. Remarkable Results.
            </p>
            <a
              href="https://staywelladjusted.com"
              className="font-body text-sm underline hover:opacity-80"
            >
              staywelladjusted.com
            </a>
          </div>

          <div className="border-t border-primary-foreground/30 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {locations.map((l) => (
                <div key={l.name}>
                  <p className="font-body text-xs uppercase tracking-wider opacity-90 mb-1">
                    {l.name}
                  </p>
                  <a
                    href={`tel:${l.tel}`}
                    className="font-heading text-sm md:text-base font-bold hover:underline"
                  >
                    {l.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs font-body opacity-80 mt-8">
            © 2022 Well Adjusted Chiropractic. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Start;
