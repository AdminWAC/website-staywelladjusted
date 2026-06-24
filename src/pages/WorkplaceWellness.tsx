import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import img1 from "@/assets/ww-1.jpeg.asset.json";
import img2 from "@/assets/ww-2.jpeg.asset.json";
import img3 from "@/assets/ww-3.jpeg.asset.json";
import img4 from "@/assets/ww-4.jpeg.asset.json";
import img5 from "@/assets/ww-5.jpg.asset.json";

const locations = [
  { name: "Arlington, TX", phone: "(682) 277-1966" },
  { name: "Greeley, CO", phone: "(970) 888-7097" },
  { name: "Loveland, CO", phone: "(970) 427-2543" },
  { name: "Fort Collins, CO", phone: "(970) 714-2207" },
  { name: "Erie, CO", phone: "(970) 670-3607" },
];

const benefits = [
  "Healthier teams with fewer sick days and missed shifts",
  "Stronger retention and a happier workplace culture",
  "Higher focus, energy, and day-to-day productivity",
  "A meaningful perk that sets your company apart",
];

const topics = [
  "Move Better at Work — Posture & Ergonomics",
  "The Foundations of Lifelong Health",
  "Raising Healthy Kids — A Parent's Guide",
  "Stress Less, Live More",
  "Six Simple Habits for a Stronger Body",
  "Desk Reset — Stretches You Can Do Anywhere",
  "Peak Performance — Unlocking Your Best",
  "Fueling Your Body — Smart Nutrition Basics",
  "The 5-Minute Recharge — Quick Stress Relief",
];

const WorkplaceWellness = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#0f1c2e] text-white">
        <div className="absolute inset-0 opacity-30">
          <img src={img1.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 py-20 md:py-28 text-center">
          <p className="uppercase tracking-[0.25em] text-[#d4af37] text-sm mb-4">
            Workplace Wellness Partnerships
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Bring Better Health <br className="hidden md:block" />
            Into Your Workplace
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
            Well Adjusted Chiropractic partners with local employers, teams, and
            community organizations to deliver on-site posture screenings,
            wellness talks, and spinal health education your people will
            actually look forward to.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#b8941f] text-[#0f1c2e] font-semibold px-8 py-4 rounded transition-colors"
          >
            Plan an Event With Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-5">
              Wellness That Meets Your Team Where They Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Long hours at a desk, on a job site, or behind the wheel quietly
              add up — tight shoulders, achy backs, poor posture, low energy.
              The good news? A small dose of prevention can make a big
              difference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our chiropractors bring approachable, on-site care to offices,
              warehouses, schools, gyms, fire stations, churches, and community
              events across Colorado and Texas. Each visit is built to give
              your team practical tools to feel and function better — without
              taking the day off.
            </p>
          </div>
          <img
            src={img2.url}
            alt="Well Adjusted Chiropractic team presenting to local employees"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-3">
              Why Employers Invest in On-Site Wellness
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A short, well-run wellness event pays off in ways that show up on
              your bottom line and in the break room.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-white rounded-lg p-6 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p className="text-gray-800">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <img src={img3.url} alt="On-site wellness talk" className="rounded-lg object-cover h-56 w-full" />
            <img src={img4.url} alt="Relaxed consultation lounge" className="rounded-lg object-cover h-56 w-full" />
            <img src={img5.url} alt="Community partnership award" className="rounded-lg object-cover h-56 w-full" />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={img1.url}
            alt="Well Adjusted community wellness event"
            className="rounded-lg shadow-lg w-full object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-5">
              What a Visit Looks Like
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We keep things simple, friendly, and useful. A typical on-site
              session can include:
            </p>
            <ul className="space-y-3">
              {[
                "A short, engaging health talk tailored to your team",
                "Quick posture and spinal screenings (no appointment needed)",
                "Hands-on tips for desks, lifting, sleep, and stress",
                "An optional healthy lunch-and-learn format",
                "Take-home resources so the benefit lasts past the event",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[#0f1c2e] text-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">
              Talks We Can Tailor to Your Team
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pick a topic that fits your crew — or tell us what you'd like
              covered and we'll build it around your group.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => (
              <div
                key={t}
                className="border border-white/15 rounded-lg p-5 hover:border-[#d4af37] transition-colors"
              >
                <p className="text-sm md:text-base">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Schedule */}
      <section id="contact" className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            Let's Plan Something for Your Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            Reach out to the Well Adjusted clinic closest to you. We'll put
            together a wellness experience that fits your space, schedule, and
            goals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={`tel:${loc.phone.replace(/[^\d]/g, "")}`}
                className="bg-gray-50 hover:bg-[#d4af37]/10 border border-gray-200 rounded-lg p-5 text-left transition-colors block"
              >
                <p className="font-semibold text-[#0f1c2e] mb-2">{loc.name}</p>
                <p className="flex items-center gap-2 text-gray-700 text-sm">
                  <Phone className="w-4 h-4 text-[#d4af37]" /> {loc.phone}
                </p>
              </a>
            ))}
          </div>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-[#0f1c2e] hover:bg-[#1a2e4a] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Send Us a Message <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WorkplaceWellness;
