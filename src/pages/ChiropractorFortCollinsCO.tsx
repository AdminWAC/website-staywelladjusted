import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Youtube, Quote } from "lucide-react";
import Layout from "@/components/Layout";

import kodyWindecker from "@/assets/team/kody-windecker.png";
import officeImg from "@/assets/locations/fort-collins-office.png";

import svcChiro from "@/assets/services-loveland/chiropractic-care.png";
import svcSpinalDecomp from "@/assets/services-loveland/spinal-decompression.png";
import svcSports from "@/assets/services-loveland/sports-physicals.png";
import svcNutrition from "@/assets/services-loveland/nutrition.png";
import svcSpinalOrth from "@/assets/services-loveland/spinal-orthotics.png";
import svcWobble from "@/assets/services-loveland/wobble-disks.png";
import svcMassage from "@/assets/services-loveland/massage-therapy.png";
import svcFoot from "@/assets/services-loveland/custom-foot-orthotics.jpg";
import svcSoftwave from "@/assets/services-loveland/softwave-therapy.png";
import svcWeight from "@/assets/services-loveland/weight-loss.png";
import svcDot from "@/assets/services-loveland/intersegmental-traction.png";

const PALETTE = {
  gold: "#c9a96e",
  goldDark: "#b8985d",
  cream: "#f5ede0",
  blueGray: "#8aa3b8",
  blueGrayDark: "#6f8aa0",
  lightGray: "#f1f3f5",
  textDark: "#3d3d3d",
};

const reviews = [
  {
    name: "Andrew Sinclair",
    text: "I have been very pleased with the personal attention and care I have received from Well-Adjusted Chiropractic. As a long-distance runner, I am now experiencing better post-run recovery, improvements to my overall well-being, and further gains to benefits from prior Physical Therapy. Kudos and thanks to Dr. Cody for keeping me young, and helping me stay in prak condition on my \"fitness journey\"! (Or at least, keeping the Aging Monster at bay.) And special thanks to Tatiana and Avery for making me feel welcome and important, at each and every visit.",
  },
  {
    name: "Chris Karst",
    text: "The team at Gateway Chiropractic are truly amazing and very friendly and responsive. Dr. Cody has done wonders with my back, neck and legs. I feel and move so much better now and grateful they are here for us!!!",
  },
  {
    name: "Amanda Wray",
    text: "I followed Dr. Kody up here from loveland because he has been doing such an amazing job helping me get back to 100%. I came to him barely able to move my neck and with his adjustments and recommandations including the best pillow I have ever used, I have even been waking up pain free for the first time in a very long time.",
  },
  {
    name: "Simon Tafoya",
    text: "I have been seeing Dr Cody for six months I had been dealing with constant pain in my neck, shoulders, lower back and feet 10+ yrs. Since seeing Dr Cody I have mostly been pain free and the occasions when I do have pain it is not for long. I couldn't recommend him more.",
  },
  {
    name: "Adam Powell",
    text: "Been going to Dr. Kody for about a year now and it has dramatically improved the quality of my health and living. Anyone looking for a friendly, knowledgeable, and honest chiropractor should look no further, highly recommend.",
  },
];

const services = [
  { label: "Chiropractic Care", img: svcChiro, url: "/chiropractic-care" },
  { label: "Spinal Decompression", img: svcSpinalDecomp, url: "/spinal-decompression" },
  { label: "Sports Physicals", img: svcSports, url: "/sports-physicals" },
  { label: "Nutrition Services", img: svcNutrition, url: "/nutrition" },
  { label: "DOT Exams", img: svcDot, url: "/dot-exams" },
  { label: "Spinal Orthotics", img: svcSpinalOrth, url: "/spinal-orthotics" },
  { label: "Wobble Disks", img: svcWobble, url: "/wobble-discs" },
  { label: "Massage Therapy", img: svcMassage, url: "/massage-therapy" },
  { label: "Custom Foot Orthotics", img: svcFoot, url: "/custom-foot-orthotics" },
  { label: "Softwave Therapy", img: svcSoftwave, url: "/dual-shockwave" },
  { label: "Weight Loss", img: svcWeight, url: "/weight-loss" },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "+1 682-277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "+1 970-427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "+1 970-888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "+1 970-714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "+1 970-670-3607" },
];

const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5b800" className="inline">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChiropractorFortCollinsCO = () => {
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
            <div className="flex justify-center">
              <div className="w-[260px]">
                <div className="rounded-md overflow-hidden bg-white shadow-sm h-[290px]">
                  <img src={kodyWindecker} alt="Kody Windecker, D.C." className="w-full h-[380px] object-cover object-top" loading="lazy" />
                </div>
                <div
                  className="text-center text-white text-sm font-body py-2 mt-2 rounded-full"
                  style={{ background: PALETTE.gold }}
                >
                  Kody Windecker, D.C.
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-heading uppercase tracking-wide text-3xl md:text-4xl mb-3" style={{ color: PALETTE.gold }}>
                Fort Collins, CO<br />Chiropractic Care
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
              <img src={officeImg} alt="Well Adjusted Chiropractic Fort Collins office" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
            <div className="p-8 text-white">
              <h2 className="font-heading text-3xl mb-5 tracking-wide">OFFICE HOURS</h2>
              <ul className="font-body text-sm space-y-1.5">
                <li><strong>Monday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Tuesday</strong> : 3:00 pm-6:00 pm</li>
                <li><strong>Wednesday</strong> : 8:00 am-12:00 pm</li>
                <li><strong>Thursday</strong> : 8:00 am-12:00 pm | 3:00 pm-6:00 pm</li>
                <li><strong>Friday, Saturday &amp; Sunday</strong> : Closed</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a href="https://www.facebook.com/profile.php?id=61575765027322" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://x.com/welladjustedco" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCuTc_0GerACgE36ARJrt25g/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://www.google.com/maps/place/Well+Adjusted+Chiropractic+-+Fort+Collins+(Formerly+Fort+Collins+Chiropractic)/@40.5378114,-105.0982361,581m/data=!3m3!1e3!4b1!5s0x87694b91a1e7f8f5:0xae5f431822ae7b66!4m6!3m5!1s0x87694ae0a46f8ea3:0x39bfa155f796967f!8m2!3d40.5378074!4d-105.0956612!16s%2Fg%2F1tjjpvyt" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80" style={{ color: PALETTE.blueGrayDark }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
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
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-gray-400" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
              </div>
              <div className="font-body font-bold text-foreground">{reviews[reviewIdx].name}</div>
            </div>
            <Quote className="absolute right-6 bottom-6 w-12 h-12 text-blue-100 rotate-180" strokeWidth={1.5} />
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
                <div className="absolute left-4 right-4 bottom-4 bg-white rounded-md py-3 px-4 text-center shadow-md transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                  <span className="font-body font-bold text-sm" style={{ color: PALETTE.textDark }}>{s.label}</span>
                </div>
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
    </Layout>
  );
};

export default ChiropractorFortCollinsCO;
