import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Youtube, Quote } from "lucide-react";
import Layout from "@/components/Layout";

import codyEischeid from "@/assets/team/cody-eischeid.png";
import averiHughes from "@/assets/team/averi-hughes.png";
import tatianaBoyd from "@/assets/team/tatiana-boyd.png";

import officeImg from "@/assets/locations/arlington-office.png";

import svcChiro from "@/assets/services-arlington/chiropractic-care.jpg";
import svcSpinalDecomp from "@/assets/services-arlington/spinal-decompression.jpg";
import svcSports from "@/assets/services-arlington/sports-physicals.jpg";
import svcNutrition from "@/assets/services-arlington/nutrition.jpg";
import svcFoot from "@/assets/services-arlington/custom-foot-orthotics.jpg";
import svcSpinalOrth from "@/assets/services-arlington/spinal-orthotics.jpg";
import svcWobble from "@/assets/services-arlington/wobble-disks.jpg";
import svcWeight from "@/assets/services-arlington/weight-loss.jpg";
import svcVibe from "@/assets/services-arlington/vibe-plate.jpg";

const PALETTE = {
  gold: "#c9a96e",
  goldDark: "#b8985d",
  cream: "#f5ede0",
  blueGray: "#8aa3b8",
  blueGrayDark: "#6f8aa0",
  lightGray: "#f1f3f5",
  textDark: "#3d3d3d",
};

const doctors = [
  { name: "Cody Eischeid, D.C.", photo: codyEischeid },
  { name: "Averi Hughes", photo: averiHughes },
  { name: "Tatiana Boyd", photo: tatianaBoyd },
];

const reviews = [
  {
    name: "Lisa Brown",
    text: "Being a retired nurse I am quick to notice superior assessment skills and interview questions. Well Adjusted Chiropractic company were spot on with my diagnosis and treatment plan. Their positive and holistic approach had me walking upright and a major decrease in pain in about 3 weeks! I enjoy and love the staff with their family atmosphere.",
  },
  {
    name: "Laura Bell",
    text: "This is my first experience with a chiropractor & I am so glad I found this one! Avery did my intake appt & was very informative & helpful with all of my questions. Dr Cody met with me the following day to go over my treatment plan and explained everything in detail. The entire team is amazing! I have been going since October and don't know what I did before this. I'm pain free and I look forward to every appointment. Tatiana & Dr Cody make each visit fun and they are both very attentive to my needs.",
  },
  {
    name: "Katelin Avila-Drost",
    text: "This family owned practice is amazing. After an accident, I chose this practice because I saw they had experience with children. My two children, 2 years old and 6 months old, were also in the accident with me. They have taken care of all three of us with so much kindness and care. The receptionists are very kind and playful with my kids, and it means a lot to me being that since I go 2 times a week. They make sure to do regular progress exams to see how well we are coming along. And I have already felt a huge difference in my overall well-being, as well as my kids. Dr Cody is amazing, and I give him the credit for my progress. But I also would like to add that Dr Mike, went out of his way to see me when I had severe neck pain. He saw me after hours on a Friday, and I will never forget that. Dr Mike and his practice are a wonderful team. I am very grateful.",
  },
  {
    name: "Key",
    text: "BEST chiropractor I have ever been to, they are very smart and know what they are doing and they have been helping me heal my herniated discs through decompression, which the doctors said i had to have surgery. They showed me a way that was so much better and more comfortable for me. I cannot recommend Well Adjusted Chiropractic more! 10/10 overall everyone is so nice and welcoming and they are very good at what they do! If you need a chiropractor check this place out!!",
  },
  {
    name: "Jason Thomas",
    text: "This is a 5-star chiropractor. They really care about learning everything about you and making sure they are correcting what is wrong. I came here because of migraines and pain going down my leg. I am only on my 5th visit and we are already making a dramatic amount of progress. I have been to other chiropractors and this is the correct place to go.",
  },
  {
    name: "Donna Singer",
    text: "If you are looking for a professional and holistic approach to ailments without the need for medication, Well Adjusted Chiropractic is the place to go. Their very knowledgeable and friendly staff will set up an affordable program to assist you with solving the issues that may affect your personal situation. They have various options to help you navigate and solve many problems or issues. Give them a chance and I am sure you will find their approach may be the answer you are seeking.",
  },
];

const services = [
  { label: "Chiropractic Care", img: svcChiro, url: "/chiropractic-care" },
  { label: "Spinal Decompression", img: svcSpinalDecomp, url: "/spinal-decompression" },
  { label: "Sports Physicals", img: svcSports, url: "/sports-physicals" },
  { label: "Nutrition Services", img: svcNutrition, url: "/nutrition" },
  { label: "Custom Foot Orthotics", img: svcFoot, url: "/custom-foot-orthotics" },
  { label: "Spinal Orthotics", img: svcSpinalOrth, url: "/spinal-orthotics" },
  { label: "Wobble Disks", img: svcWobble, url: "/wobble-discs" },
  { label: "Weight Loss", img: svcWeight, url: "/weight-loss" },
  { label: "Vibe Plate", img: svcVibe, url: "/vibe-plate" },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5b800" className="inline">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ChiropractorArlingtonTX = () => {
  // Doctor autoscroll
  const docScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = docScrollRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;
    const step = () => {
      pos += 0.4;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Reviews carousel
  const [reviewIdx, setReviewIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setReviewIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section style={{ background: PALETTE.cream }} className="py-10">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Doctor autoscroll */}
            <div className="overflow-hidden">
              <div ref={docScrollRef} className="flex gap-4 overflow-hidden" style={{ whiteSpace: "nowrap" }}>
                {[...doctors, ...doctors, ...doctors].map((d, i) => (
                  <div key={i} className="flex-shrink-0 w-[180px]">
                    <div className="rounded-md overflow-hidden bg-white shadow-sm">
                      <img src={d.photo} alt={d.name} className="w-full h-[200px] object-cover" loading="lazy" />
                    </div>
                    <div
                      className="text-center text-white text-xs font-body py-1.5 mt-2 rounded-full"
                      style={{ background: PALETTE.gold }}
                    >
                      {d.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Title + CTA */}
            <div>
              <h1 className="font-heading uppercase tracking-wide text-3xl md:text-4xl mb-3" style={{ color: PALETTE.gold }}>
                Chiropractors in<br />Arlington, TX
              </h1>
              <p className="font-body text-sm md:text-base mb-6" style={{ color: PALETTE.textDark }}>
                Come experience the Well Adjusted Chiropractic Soft touch.<br />
                Remarkable results.™
              </p>
              <Link
                to="/special"
                className="inline-flex items-center gap-3 text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ background: PALETTE.gold }}
              >
                Special Offer
                <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE HOURS */}
      <section className="py-10 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2" style={{ background: PALETTE.blueGray }}>
            <div className="p-6">
              <img src={officeImg} alt="Well Adjusted Chiropractic Arlington office" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
            <div className="p-8 text-white">
              <h2 className="font-heading text-3xl mb-5 tracking-wide">OFFICE HOURS</h2>
              <ul className="font-body text-sm space-y-1.5">
                <li><strong>Monday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Tuesday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Wednesday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Thursday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Friday, Saturday &amp; Sunday</strong> : Closed</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a href="https://www.facebook.com/welladjustedtx/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://x.com/welladjustedco" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCuTc_0GerACgE36ARJrt25g/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT REVIEWS */}
      <section className="py-12" style={{ background: PALETTE.lightGray }}>
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-8 tracking-wide" style={{ color: PALETTE.gold }}>
            PATIENT REVIEWS
          </h2>
          <div className="bg-white rounded-lg p-8 md:p-10 relative min-h-[280px]">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <p className="font-body text-sm md:text-base leading-relaxed mb-8" style={{ color: "#6b6b6b" }}>
              {reviews[reviewIdx].text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-gray-400" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
              </div>
              <div className="font-body font-bold text-foreground">{reviews[reviewIdx].name}</div>
            </div>
            <Quote className="absolute right-6 bottom-6 w-12 h-12 text-blue-100 rotate-180" strokeWidth={1.5} />
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIdx(i)}
                  aria-label={`Show review ${i + 1}`}
                  className="w-2.5 h-2.5 rounded-full transition-colors"
                  style={{ background: i === reviewIdx ? "#3d3d3d" : "#d4d4d4" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 tracking-wide" style={{ color: PALETTE.gold }}>
            SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.label}
                to={s.url}
                className="group relative block rounded-lg overflow-hidden bg-white shadow-sm h-[280px]"
              >
                <img src={s.img} alt={s.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                {/* Default label card */}
                <div className="absolute left-4 right-4 bottom-4 bg-white rounded-md py-3 px-4 text-center shadow-md transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                  <span className="font-body font-bold text-sm" style={{ color: PALETTE.textDark }}>{s.label}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-xl mb-3" style={{ color: PALETTE.blueGrayDark }}>{s.label}</h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#6b6b6b" }}>
                    Learn more about our {s.label.toLowerCase()} services and how we can help.
                  </p>
                  <span
                    className="inline-block text-white text-xs font-body font-semibold uppercase tracking-wider px-5 py-2 rounded-md"
                    style={{ background: PALETTE.gold }}
                  >
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW PATIENT SPECIAL */}
      <section className="py-14" style={{ background: PALETTE.gold }}>
        <div className="max-w-[1100px] mx-auto px-4 text-center text-white">
          <p className="font-body text-sm mb-2">Ready to find out more?</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-6 tracking-wide">NEW PATIENT SPECIAL OFFER</h2>
          <Link
            to="/special"
            className="inline-flex items-center gap-3 bg-white font-body font-semibold text-sm uppercase tracking-wider px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ color: PALETTE.gold }}
          >
            Request an Appointment
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
    </Layout>
  );
};

export default ChiropractorArlingtonTX;
