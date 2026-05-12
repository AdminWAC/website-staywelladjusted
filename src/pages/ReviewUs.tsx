import { useState } from "react";
import { Star, X, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const LOCATIONS = [
  {
    label: "Arlington, TX",
    name: "Well Adjusted Chiropractic - Arlington TX",
    address: "5717 SW Green Oaks Blvd Arlington, TX 76017",
    fullAddress: "Well Adjusted Chiropractic, 5717 SW Green Oaks Blvd, Arlington, TX 76017",
    phone: "(682) 238-0625",
  },
  {
    label: "Loveland, CO",
    name: "Well Adjusted Chiropractic - Loveland CO",
    address: "3850 N Grant Ave STE 100 Loveland, CO 80538",
    fullAddress: "Well Adjusted Chiropractic, 3850 N Grant Ave STE 100, Loveland, CO 80538",
    phone: "(970) 669-7620",
  },
  {
    label: "Greeley, CO",
    name: "Well Adjusted Chiropractic - Greeley CO",
    address: "6200 W 9th St #2A Greeley, CO 80634",
    fullAddress: "Well Adjusted Chiropractic, 6200 W 9th St #2A, Greeley, CO 80634",
    phone: "(970) 353-0337",
  },
  {
    label: "Fort Collins, CO",
    name: "Well Adjusted Chiropractic - Fort Collins CO",
    address: "1075 W Horsetooth Rd Fort Collins, CO 80526",
    fullAddress: "Well Adjusted Chiropractic, 1075 W Horsetooth Rd, Fort Collins, CO 80526",
    phone: "(970) 493-0611",
  },
  {
    label: "Erie, CO",
    name: "Well Adjusted Chiropractic - Erie CO",
    address: "680 Mitchell Way Unit 160, Erie, CO 80516",
    fullAddress: "Well Adjusted Chiropractic, 680 Mitchell Way Unit 160, Erie, CO 80516",
    phone: "303-323-9931",
  },
];

const ADMIN_EMAIL = "admin@staywelladjusted.com";

const ReviewUs = () => {
  const [lowModalOpen, setLowModalOpen] = useState(false);
  const [highModalOpen, setHighModalOpen] = useState(false);
  const [hoverStar, setHoverStar] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    location: "",
  });
  const [highLocation, setHighLocation] = useState("");

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    if (rating === 5) {
      setHighModalOpen(true);
    } else {
      setLowModalOpen(true);
    }
  };

  const handleLowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Patient Review (${selectedRating}★) — ${form.location || "No location selected"}`
    );
    const body = encodeURIComponent(
      `Rating: ${selectedRating} stars\nLocation: ${form.location}\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nHow Can We Help?\n${form.message}`
    );
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleHighSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loc = LOCATIONS.find((l) => l.label === highLocation);
    if (!loc) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.fullAddress)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setHighModalOpen(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="max-w-[1340px] mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
            How Was Your Experience?
          </h1>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto opacity-90">
            We are committed to patient satisfaction. Please let us know how your experience
            was in our office.
          </p>
        </div>
      </section>

      {/* Rating */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase mb-4">
            Rate Our Service
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Tap a star to share your experience with Well Adjusted Chiropractic.
          </p>

          <div
            className="flex items-center justify-center gap-3 md:gap-5"
            onMouseLeave={() => setHoverStar(0)}
          >
            {[1, 2, 3, 4, 5].map((n) => {
              const active = (hoverStar || selectedRating) >= n;
              return (
                <button
                  key={n}
                  type="button"
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  onMouseEnter={() => setHoverStar(n)}
                  onClick={() => handleStarClick(n)}
                  className="star-pop p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-transform"
                >
                  <Star
                    className={`w-12 h-12 md:w-16 md:h-16 transition-colors ${
                      active
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground/40"
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>
          <p className="mt-8 font-body text-sm text-muted-foreground">
            Your feedback helps us serve you better.
          </p>
        </div>
      </section>

      {/* Map + Locations */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-[1340px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-lg overflow-hidden shadow-md bg-background min-h-[420px]">
            <iframe
              title="Well Adjusted Chiropractic Locations Map"
              src="https://www.google.com/maps/d/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="bg-light-gold/60 rounded-2xl p-6 md:p-8 space-y-6">
            {LOCATIONS.map((loc) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.fullAddress)}`;
              return (
                <div key={loc.label} className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-heading font-bold text-secondary uppercase text-sm md:text-base hover:text-primary transition-colors"
                    >
                      {loc.name}
                    </a>
                    <p className="text-sm font-body text-foreground/80">{loc.address}</p>
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                      className="inline-block font-body font-bold text-primary hover:underline"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Low rating modal */}
      {lowModalOpen && (
        <Modal onClose={() => setLowModalOpen(false)}>
          <div className="text-center mb-6">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground uppercase mb-4">
              We Strive for 5 Stars—Every Time
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-2">
              Your experience matters to us. If we fell short of 5 stars, we want to make it
              right. Your feedback goes directly to our management team for review, and we
              take every concern seriously.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Please share your experience below so we can address any issues and improve our
              care.
            </p>
          </div>

          <form onSubmit={handleLowSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-full text-sm font-body bg-background"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-full text-sm font-body bg-background"
                />
              </Field>
            </div>
            <Field label="Email Address">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-full text-sm font-body bg-background"
              />
            </Field>
            <Field label="How Can We Help?">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-2xl text-sm font-body bg-background resize-none"
              />
            </Field>
            <LocationPicker
              value={form.location}
              onChange={(v) => setForm({ ...form, location: v })}
            />
            <div className="flex justify-center pt-2">
              <SubmitButton label="SEND MESSAGE" />
            </div>
          </form>
        </Modal>
      )}

      {/* High rating modal */}
      {highModalOpen && (
        <Modal onClose={() => setHighModalOpen(false)} variant="gold">
          <div className="text-center mb-6">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground uppercase">
              We Strive for 5 Stars—Every Time
            </h3>
          </div>
          <form onSubmit={handleHighSubmit} className="space-y-6">
            <LocationPicker value={highLocation} onChange={setHighLocation} />
            <div className="flex justify-center pt-2">
              <SubmitButton label="SUBMIT YOUR REVIEW" disabled={!highLocation} />
            </div>
          </form>
        </Modal>
      )}
    </Layout>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="text-left">
    <label className="block text-sm font-body font-bold text-foreground mb-1.5">{label}</label>
    {children}
  </div>
);

const LocationPicker = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="text-left">
    <p className="text-sm font-body font-bold text-foreground mb-2">Choose Location</p>
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {LOCATIONS.map((loc) => (
        <label
          key={loc.label}
          className="flex items-center gap-2 text-sm font-body text-foreground cursor-pointer"
        >
          <input
            type="radio"
            name="rev-location"
            value={loc.label}
            checked={value === loc.label}
            onChange={(e) => onChange(e.target.value)}
            className="accent-primary"
            required
          />
          {loc.label}
        </label>
      ))}
    </div>
  </div>
);

const SubmitButton = ({ label, disabled }: { label: string; disabled?: boolean }) => (
  <button
    type="submit"
    disabled={disabled}
    className="group flex items-center gap-2 bg-secondary/70 hover:bg-secondary text-secondary-foreground rounded-full pl-7 pr-2 py-2 font-body font-semibold tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="text-sm">{label}</span>
    <span className="bg-background text-secondary rounded-full w-9 h-9 flex items-center justify-center group-hover:translate-x-1 transition-transform">
      <ArrowRight className="w-4 h-4" />
    </span>
  </button>
);

const Modal = ({
  children,
  onClose,
  variant = "white",
}: {
  children: React.ReactNode;
  onClose: () => void;
  variant?: "white" | "gold";
}) => (
  <div
    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in"
    onClick={onClose}
  >
    <div
      className={`relative max-w-2xl w-full max-h-[92vh] overflow-y-auto rounded-lg p-6 md:p-10 shadow-2xl ${
        variant === "gold" ? "bg-primary/90" : "bg-background"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
      >
        <X className="w-5 h-5" />
      </button>
      {children}
    </div>
  </div>
);

export default ReviewUs;
