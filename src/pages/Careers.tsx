import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";
const heroTeam = { url: "/images-uploaded/careers/hero-team.jpg" };
const checkInImg = { url: "/images-uploaded/careers/check-in.png" };
const eliteImg = { url: "/images-uploaded/careers/elite.jpg" };
const nowHiringImg = { url: "/images-uploaded/careers/now-hiring.jpg" };
const rightFitImg = { url: "/images-uploaded/careers/right-fit.png" };

const MAPS_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6";

const locationDetails = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 238-0625" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 669-7620" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 353-0337" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 493-0611" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "303-323-9931" },
];

const placeholder =
  "Detailed role description is shared during the interview process. If this position speaks to you, please apply below and our team will follow up with the full responsibilities, expectations, and qualities we're looking for.";

const positions = [
  {
    key: "check-in",
    label: "Check-In Chiropractic Assistant",
    title: "CHECK-IN CHIROPRACTIC ASSISTANT",
    image: checkInImg.url,
    body: "Check-In CA is the “Boss of Today”. The primary focus is always on patient flow, originally scheduled appointments, and compliance. Check-In is always ready to receive the incoming patients, and she/he is the time-keeper for the office.",
    qualities: [
      "Extrovert / Host",
      "Competitive / Life is a Contest",
      "Encouraging / Little League Coach",
      "Inclusive / Widen the Circle",
      "Positive / Cheerleader",
      "Promoter / Internal Events",
    ],
  },
  { key: "check-out", label: "Check-Out Chiropractic Assistant", title: "CHECK-OUT CHIROPRACTIC ASSISTANT", image: checkInImg.url, body: placeholder },
  { key: "floor-tech", label: "Floor Tech Chiropractic Assistant", title: "FLOOR TECH CHIROPRACTIC ASSISTANT", image: checkInImg.url, body: placeholder },
  { key: "back-office", label: "Back Office Chiropractic Assistant", title: "BACK OFFICE CHIROPRACTIC ASSISTANT", image: checkInImg.url, body: placeholder },
  { key: "associate-builder", label: "Associate Doctor of Chiropractic – Business Builder", title: "ASSOCIATE DOCTOR OF CHIROPRACTIC – BUSINESS BUILDER", image: checkInImg.url, body: placeholder },
  { key: "associate-caregiver", label: "Associate Doctor of Chiropractic – Care Giver", title: "ASSOCIATE DOCTOR OF CHIROPRACTIC – CARE GIVER", image: checkInImg.url, body: placeholder },
  { key: "new-business-dev", label: "New Business Development Chiropractic Assistant", title: "NEW BUSINESS DEVELOPMENT CHIROPRACTIC ASSISTANT", image: checkInImg.url, body: placeholder },
  { key: "office-manager", label: "Office Manager", title: "OFFICE MANAGER", image: checkInImg.url, body: placeholder },
];

const whyPoints = [
  { title: "Be Part of a Thriving, Growing Organization", text: "With our recent expansion into Texas, we are building a powerhouse team across multiple states. Opportunities for leadership and growth are limitless." },
  { title: "Unparalleled Training & Mentorship", text: "Whether you're a seasoned chiropractor or a new grad, you'll receive world-class training in advanced techniques, patient care, and business growth." },
  { title: "Competitive Pay & Career Advancement", text: "Our expansion means new leadership opportunities, plus incredible compensation packages for the right candidates." },
  { title: "Work with a Team of High Performers", text: "If you thrive in a fast-paced, patient-driven, results-oriented environment, you'll fit right in. We don't just adjust—we transform lives." },
  { title: "Multi-State Opportunities", text: "Interested in working in Colorado or Texas? We are actively hiring in Loveland, Greeley, Fort Collins, and Arlington, TX." },
];

const hiringRoles = [
  { title: "Chiropractors", text: "If you want to hone your skills, work with cutting-edge chiropractic techniques, and be part of a high-growth team, we want to hear from you." },
  { title: "Chiropractic Assistants", text: "Love working with patients? Want to be part of an exciting, patient-focused team where you make a real impact every day? Apply now." },
  { title: "Marketing & Administrative Roles", text: "As we expand into Texas, we need smart, driven professionals to help grow our brand, engage with our communities, and support our fast-growing practice." },
];

const rightFitPoints = [
  "Thrive in a fast-paced, dynamic environment",
  "Have a passion for chiropractic care and patient success",
  "We are eager to grow, lead, and make an impact",
  "Want to be part of an elite, rapidly expanding chiropractic organization",
];

const JOIN_FORM_ID = "F2RPZItWtK9FkU99l0d1";

const Careers = () => {
  const [active, setActive] = useState(positions[0].key);
  const current = positions.find((p) => p.key === active) ?? positions[0];

  useEffect(() => {
    if (document.querySelector('script[src="https://link.growrichllc.com/js/form_embed.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://link.growrichllc.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={heroTeam.url} alt="Well Adjusted Chiropractic team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-24 md:py-32">
          <h1 className="font-heading text-4xl md:text-6xl uppercase mb-3 max-w-2xl">
            Join The Best In Chiropractic
          </h1>
          <p className="font-body text-lg md:text-xl mb-8 max-w-xl">Your Career Starts Here</p>
          <p className="font-body max-w-xl mb-8 text-base md:text-lg">
            At Well Adjusted, we're a community focused on excellence in care and professional growth. Join us to make a difference and build your career in a supportive environment.
          </p>
          <a
            href="#join-our-team"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Join Our Team
            <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Position Tabs */}
      <section className="bg-muted py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-border pb-4 mb-10">
            {positions.map((p) => {
              const isActive = p.key === active;
              return (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={`font-body text-sm md:text-base pb-2 transition-colors ${
                    isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-5">{current.title}</h2>
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{current.body}</p>
              {current.qualities && (
                <div className="mt-6">
                  <p className="font-body font-bold text-foreground mb-2">Qualities / Attributes:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground font-body text-sm md:text-base">
                    {current.qualities.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team form */}
      <section id="join-our-team" className="bg-[hsl(45,45%,92%)] py-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary uppercase text-center mb-4">Join Our Team</h2>
          <p className="text-center font-body text-muted-foreground max-w-2xl mx-auto mb-10">
            Thank you for your interest in joining our team at Well Adjusted Chiropractic. Please take a moment to fill out the employment application below.
          </p>
          <div className="bg-background rounded-2xl shadow-sm p-4 md:p-6">
            <iframe
              src={`https://link.growrichllc.com/widget/form/${JOIN_FORM_ID}`}
              style={{ width: "100%", height: "690px", border: "none", borderRadius: 0 }}
              id={`inline-${JOIN_FORM_ID}`}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="(WA) Contact Us - Join Our Team"
              data-height="490"
              data-layout-iframe-id={`inline-${JOIN_FORM_ID}`}
              data-form-id={JOIN_FORM_ID}
              title="(WA) Contact Us - Join Our Team"
            />
          </div>
        </div>
      </section>

      {/* Elite Opportunities */}
      <section className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
              Elite Opportunities for Chiropractors, Chiropractic Assistants &amp; More in Colorado &amp; Texas
            </h2>
            <p className="text-muted-foreground font-body mb-4">
              At Well Adjusted Chiropractic, we don't just offer jobs—we offer careers that change lives. Our organization is rapidly expanding, with established locations in Loveland, Greeley, and Fort Collins, CO, and our newest expansion in Arlington, TX.
            </p>
            <p className="text-muted-foreground font-body mb-4">
              We are on the hunt for top-tier chiropractors, chiropractic assistants, and team members who are passionate about helping patients, achieving exceptional results, and being part of something bigger than themselves.
            </p>
            <p className="text-muted-foreground font-body">
              If you want to work in a fast-paced, high-energy environment where your skills will be sharpened, challenged, and refined, this is the place for you.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={eliteImg.url} alt="Well Adjusted Chiropractic team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-primary py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground uppercase text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((w) => (
              <div key={w.title} className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-lg text-primary uppercase mb-3">{w.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Now Hiring */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl uppercase mb-4">Now Hiring For Our Growing Team</h2>
            <p className="font-body mb-6">We are actively recruiting for the following positions in Colorado and Texas:</p>
            <ul className="space-y-4">
              {hiringRoles.map((r) => (
                <li key={r.title}>
                  <p className="font-body font-bold">✓ {r.title}</p>
                  <p className="font-body text-sm opacity-90">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={nowHiringImg.url} alt="Well Adjusted team meeting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Are You The Right Fit */}
      <section className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={rightFitImg.url} alt="Chiropractic adjustment" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-4">Are You The Right Fit?</h2>
            <p className="text-muted-foreground font-body mb-4">We are looking for highly motivated, high-performing individuals who:</p>
            <ul className="space-y-3">
              {rightFitPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-muted-foreground font-body">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Join Our Growing Team CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-[900px] mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4">Join Our Growing Team</h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto">
            This isn't just a job—it's an opportunity to be part of a movement, elevate your career, and work alongside the best in the field.
          </p>
          <a
            href="tel:9706697620"
            className="inline-flex items-center gap-3 bg-background text-primary px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-background/90 transition-colors"
          >
            Call Us Today
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Map + Locations */}
      <section className="bg-background py-16">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-sm min-h-[450px]">
              <iframe src={MAPS_URL} width="100%" height="100%" style={{ border: 0, minHeight: 450 }} allowFullScreen loading="lazy" title="Well Adjusted Chiropractic Locations" />
            </div>
            <div className="space-y-4">
              {locationDetails.map((loc) => (
                <div key={loc.name} className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase">{loc.name}</h4>
                    <p className="text-xs text-muted-foreground font-body">{loc.address}</p>
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="text-primary font-body font-bold text-sm hover:underline">{loc.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
