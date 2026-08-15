import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import slide1 from "@/assets/sports-physicals/sports-physicals-1.png";
import slide2 from "@/assets/sports-physicals/sports-physicals-2.png";
import slide3 from "@/assets/sports-physicals/sports-physicals-3.png";

const PALETTE = {
  gold: "#c9a96e",
  cream: "#f5ede0",
  blueGray: "#8aa3b8",
  blueGrayDark: "#6f8aa0",
  lightGray: "#f1f3f5",
  textDark: "#3d3d3d",
};

const slides = [
  { img: slide1, alt: "Young athlete receiving a chiropractic sports physical exam" },
  { img: slide2, alt: "Chiropractor assessing a patient during a sports physical" },
  { img: slide3, alt: "Chiropractor checking a young athlete's posture and mobility" },
];

const risks = [
  "Sprains & Repetitive Stress Injuries",
  "Heat exhaustion & dehydration",
  "Concussions & impact-related injuries",
  "Underlying health conditions that may increase risk",
];

const examItems = [
  "Review medical history & family history to identify potential health risks",
  "Check blood pressure, heart, lungs, vision, and vital signs",
  "Assess posture, joints, strength, flexibility, and mobility",
  "Identify any health concerns that may require additional evaluation",
];

const prepItems = [
  { title: "Arrive Early", text: "Arrive 15 minutes early to complete necessary paperwork" },
  { title: "Bring Forms", text: "Bring any forms provided by the school or sports organization" },
  { title: "Come Prepared", text: "Come with questions about your child's health or injury concerns" },
  { title: "Quick Appointment", text: "The appointment typically takes 20-25 minutes" },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const SportsPhysicals = () => {
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
              Sports Physicals
            </h1>
            <h2 className="font-heading text-xl md:text-2xl mb-4" style={{ color: PALETTE.blueGrayDark }}>
              Comprehensive Sports Physicals
            </h2>
            <p className="font-body text-sm md:text-base mb-6" style={{ color: PALETTE.textDark }}>
              Need a sports physical in Northern Colorado? If your child or teen is participating in school or community
              sports, a pre-participation physical exam (PPE) is essential to ensure they are healthy, strong, and ready
              for the season ahead. At Well Adjusted Chiropractic, we provide fast, thorough, and affordable sports
              physicals in Loveland CO, Greeley CO, Fort Collins CO, Erie CO and Arlington TX to help young athletes stay
              safe and performing at their best.
            </p>
            <button
              type="button"
              onClick={() => setCallOpen(true)}
              className="inline-flex items-center gap-3 text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ background: PALETTE.gold }}
            >
              Call to Schedule!
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

      {/* WHY IMPORTANT */}
      <section className="py-14 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-8 tracking-wide" style={{ color: PALETTE.gold }}>
            WHY ARE SPORTS PHYSICALS IMPORTANT?
          </h2>
          <p className="font-body text-sm md:text-base text-center max-w-3xl mx-auto mb-10" style={{ color: PALETTE.textDark }}>
            More than 38 million children and teens in the U.S. play organized sports. While athletics promote fitness,
            teamwork, and discipline, they also come with risks such as:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r} className="rounded-xl p-5 flex gap-3 items-start shadow-sm" style={{ background: PALETTE.lightGray }}>
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: PALETTE.gold }} />
                <p className="font-body text-sm" style={{ color: PALETTE.textDark }}>{r}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm md:text-base text-center max-w-3xl mx-auto mt-10" style={{ color: PALETTE.textDark }}>
            A sports physical helps identify potential health concerns before they become serious, ensuring your child
            can safely participate in sports without unnecessary risks.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-14" style={{ background: PALETTE.lightGray }}>
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 tracking-wide" style={{ color: PALETTE.gold }}>
            WHAT TO EXPECT DURING A SPORTS PHYSICAL
          </h2>
          <p className="font-body text-sm md:text-base text-center max-w-3xl mx-auto mb-10" style={{ color: PALETTE.textDark }}>
            A sports physical, or pre-participation physical exam (PPE), is designed to assess your child's overall
            health and fitness for athletic activity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg mb-4" style={{ color: PALETTE.blueGrayDark }}>Our experienced chiropractors will:</h3>
              <ul className="space-y-3">
                {examItems.map((e) => (
                  <li key={e} className="flex gap-3 items-start font-body text-sm" style={{ color: "#6b6b6b" }}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: PALETTE.gold }} />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg mb-4" style={{ color: PALETTE.blueGrayDark }}>Comprehensive Approach</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>
                Our comprehensive approach ensures that your young athlete is cleared for participation and better
                prepared to prevent injuries.
              </p>
              <Link
                to="/#home-contact-us"
                className="mt-6 inline-flex items-center gap-3 text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ background: PALETTE.gold }}
              >
                Contact Us
                <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO PREPARE */}
      <section className="py-14 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 tracking-wide" style={{ color: PALETTE.gold }}>
            HOW TO PREPARE FOR YOUR CHILD'S SPORTS PHYSICAL
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prepItems.map((p) => (
              <div key={p.title} className="rounded-xl p-6 shadow-sm" style={{ background: PALETTE.lightGray }}>
                <h3 className="font-heading text-lg mb-2" style={{ color: PALETTE.blueGrayDark }}>{p.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: PALETTE.gold }}>
        <div className="max-w-[1100px] mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 tracking-wide">READY TO GET YOUR ATHLETE CLEARED?</h2>
          <p className="font-body text-sm md:text-base mb-6 max-w-2xl mx-auto">
            Schedule a fast, thorough sports physical at any Well Adjusted Chiropractic location.
          </p>
          <Link
            to="/#home-contact-us"
            className="inline-flex items-center gap-3 bg-white font-body font-semibold text-sm uppercase tracking-wider px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ color: PALETTE.gold }}
          >
            Contact Us
            <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: PALETTE.gold, color: "white" }}>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
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
                <div key={loc.name} className="flex items-center justify-between gap-3 rounded-lg px-4 py-3" style={{ background: "#eef3f8" }}>
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

export default SportsPhysicals;
