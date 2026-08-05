import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


import slide1 from "@/assets/custom-foot-orthotics/orthotics-1.webp";
import slide2 from "@/assets/custom-foot-orthotics/orthotics-2.webp";
import slide3 from "@/assets/custom-foot-orthotics/orthotics-3.jpg";

const PALETTE = {
  gold: "#c9a96e",
  cream: "#f5ede0",
  blueGray: "#8aa3b8",
  blueGrayDark: "#6f8aa0",
  lightGray: "#f1f3f5",
  textDark: "#3d3d3d",
};

const slides = [
  { img: slide1, alt: "Patient entering details on the Foot Levelers scanning kiosk" },
  { img: slide2, alt: "Patient standing on the Foot Levelers 3D foot scanner" },
  { img: slide3, alt: "Foot Levelers scanner in the Well Adjusted Chiropractic office" },
];

const whyItems = [
  {
    title: "Custom Precision",
    text: "Unlike generic insoles, Foot Levelers orthotics are custom-made using advanced 3D scanning technology to match your individual foot structure and specific health needs.",
  },
  {
    title: "Complete Arch Support",
    text: "Foot Levelers supports all three arches of your foot—medial, lateral, and transverse—providing balanced weight distribution, improved posture, and reduced stress on your joints.",
  },
  {
    title: "Proven Pain Relief",
    text: "Clinical studies have demonstrated that patients using Foot Levelers orthotics experience significant reductions in low back pain—up to 34.5% improvement—and enhanced overall function by up to 32.3% when combined with chiropractic care.",
  },
];

const benefits = [
  {
    title: "Reduced Pain and Discomfort",
    text: "Correcting foot alignment helps relieve pain in your feet, knees, hips, and lower back.",
  },
  {
    title: "Enhanced Athletic Performance",
    text: "Proper foot support boosts performance, reduces fatigue, and decreases the risk of injury during sports and daily activities.",
  },
  {
    title: "Injury Prevention",
    text: "Addressing foot imbalances protects against common injuries caused by improper alignment or poor foot mechanics.",
  },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const CustomFootOrthotics = () => {
  const [slide, setSlide] = useState(0);
  const [callOpen, setCallOpen] = useState(false);


  useEffect(() => {
    const t = setInterval(() => setSlide((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: PALETTE.cream }} className="py-12">
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading uppercase tracking-wide text-3xl md:text-5xl mb-4" style={{ color: PALETTE.gold }}>
              Custom Foot Orthotics
            </h1>
            <h2 className="font-heading text-xl md:text-2xl mb-4" style={{ color: PALETTE.blueGrayDark }}>
              Step Into Better Health With Foot Levelers Custom Orthotics
            </h2>
            <p className="font-body text-sm md:text-base mb-6" style={{ color: PALETTE.textDark }}>
              At Well Adjusted Chiropractic, we recognize that your feet are the foundation of your body's alignment and
              overall health. Misalignment in your feet can lead to pain in your knees, hips, and back, affecting your
              daily activities. That's why we proudly offer Foot Levelers custom orthotics, precisely designed to support
              your unique foot structure and enhance your total wellness.
            </p>
            <button
              type="button"
              onClick={() => setCallOpen(true)}
              className="inline-flex items-center gap-3 text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ background: PALETTE.gold }}
            >
              Get Scanned
              <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

          </div>

          {/* AUTO SLIDER */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-white">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt={s.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className="w-2.5 h-2.5 rounded-full transition-colors"
                  style={{ background: i === slide ? PALETTE.gold : "rgba(255,255,255,0.7)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-14 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 tracking-wide" style={{ color: PALETTE.gold }}>
            WHY FOOT LEVELERS CUSTOM ORTHOTICS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItems.map((w) => (
              <div key={w.title} className="rounded-xl p-6 shadow-sm" style={{ background: PALETTE.lightGray }}>
                <h3 className="font-heading text-lg mb-3" style={{ color: PALETTE.blueGrayDark }}>{w.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14" style={{ background: PALETTE.lightGray }}>
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 tracking-wide" style={{ color: PALETTE.gold }}>
            BENEFITS YOU'LL NOTICE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8 mb-3" style={{ color: PALETTE.gold }} />
                <h3 className="font-heading text-lg mb-2" style={{ color: PALETTE.blueGrayDark }}>{b.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="py-14 bg-background">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-5 tracking-wide" style={{ color: PALETTE.gold }}>
            TRUSTED BY PATIENTS LIKE YOU
          </h2>
          <p className="font-body text-base" style={{ color: PALETTE.textDark }}>
            Many of our patients report life-changing results after using Foot Leveler's custom orthotics. Experience
            better mobility, less pain, and increased quality of life—just like they have.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: PALETTE.gold }}>
        <div className="max-w-[1100px] mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 tracking-wide">READY TO IMPROVE YOUR STEP?</h2>
          <p className="font-body text-sm md:text-base mb-6 max-w-2xl mx-auto">
            Take control of your health today. Contact Well Adjusted Chiropractic to schedule your custom foot scan and
            discover the benefits of Foot Levelers orthotics.
          </p>
          <button
            type="button"
            onClick={() => setCallOpen(true)}
            className="inline-flex items-center gap-3 bg-white font-body font-semibold text-sm uppercase tracking-wider px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ color: PALETTE.gold }}
          >
            Call Today to Get Started!
            <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: PALETTE.gold, color: "white" }}>
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

        </div>
      </section>

      {/* RESEARCH */}
      <section className="py-10 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h3 className="font-heading text-xl mb-4" style={{ color: PALETTE.blueGrayDark }}>Foot Levelers Clinical Research</h3>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <a href="https://www.footlevelers.com/proven-research" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline" style={{ color: PALETTE.gold }}>
                Proven Research <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a href="https://www.footlevelers.com/orthotics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline" style={{ color: PALETTE.gold }}>
                Foot Levelers Orthotics <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* MAP + LOCATIONS */}
      <section className="py-12 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Well Adjusted Chiropractic Locations"
              />
            </div>
            <div className="rounded-lg p-5 space-y-3" style={{ background: "#e6edf5" }}>
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white rounded-md p-4 flex gap-3 items-start shadow-sm">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: PALETTE.gold }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1" style={{ color: PALETTE.textDark }}>{loc.name}</h3>
                    <p className="text-xs font-body text-muted-foreground">{loc.address}</p>
                    <p className="text-xs font-body font-semibold" style={{ color: PALETTE.gold }}>{loc.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL POPUP */}
      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl" style={{ color: PALETTE.textDark }}>
              Call To Schedule!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {locations.map((loc) => {
              const label = loc.name.replace("WELL ADJUSTED CHIROPRACTIC - ", "");
              return (
                <div
                  key={loc.name}
                  className="flex items-center justify-between gap-3 rounded-lg px-4 py-3"
                  style={{ background: "#eef3f8" }}
                >
                  <div>
                    <p className="font-heading text-sm font-bold" style={{ color: PALETTE.textDark }}>{label}</p>
                    <p className="text-xs font-body text-muted-foreground">{loc.phone}</p>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 text-white font-body font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex-shrink-0"
                    style={{ background: PALETTE.gold }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Today
                  </a>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>

  );
};

export default CustomFootOrthotics;
