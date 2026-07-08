import { useState } from "react";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const heroImg = { url: "/images-uploaded/book-event/hero.png" };
const speakingImg = { url: "/images-uploaded/book-event/speaking.png" };
const whyImg = { url: "/images-uploaded/book-event/why.png" };

const MAPS_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6";

const locationDetails = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 238-0625" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 669-7620" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 353-0337" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 493-0611" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "303-323-9931" },
];

const eventTypes = [
  {
    key: "speaking",
    label: "Speaking Engagement",
    title: "SPEAKING ENGAGEMENT",
    image: speakingImg.url,
    text: "Our doctors at Well Adjusted Chiropractic are available for professional speaking engagements at schools, businesses, and community organizations across Northern Colorado and Arlington, Texas. We deliver educational talks focused on the connection between spinal health, posture, and overall wellness. Each presentation is designed to inspire healthier living and provide actionable steps that attendees can implement immediately. Whether it's a lunch-and-learn session or a keynote at a local event, our goal is to educate, engage, and empower your audience with practical strategies to improve their health naturally.",
  },
  { key: "screenings", label: "Spinal Screenings", title: "SPINAL SCREENINGS", image: speakingImg.url, text: "Bring our team on-site to provide complimentary posture and spinal screenings for your employees, members, or event attendees. It's a hands-on, engaging way to introduce your audience to the fundamentals of spinal health." },
  { key: "booth", label: "Booth Requests For Community Events", title: "BOOTH REQUESTS FOR COMMUNITY EVENTS", image: speakingImg.url, text: "Hosting a fair, expo, or community gathering? Our team can staff a professional booth with educational materials, giveaways, and free consultations to add real value to your event." },
  { key: "corporate", label: "Corporate Health Talks", title: "CORPORATE HEALTH TALKS", image: speakingImg.url, text: "Customized corporate presentations that help teams reduce pain, boost energy, and improve productivity through better posture, movement, and nervous system health." },
  { key: "workplace", label: "Workplace Wellness Programs", title: "WORKPLACE WELLNESS PROGRAMS", image: speakingImg.url, text: "Ongoing wellness partnerships designed to keep your workforce healthy, engaged, and performing at their best—delivered by chiropractors trusted across Colorado and Texas." },
];

const whyPoints = [
  { title: "Proven Track Record", text: "Our doctors have spoken to thousands of people at corporate events, conferences, universities, health expos, and leadership seminars." },
  { title: "Dynamic & Engaging Delivery", text: "We don't just give lectures—we deliver high-energy, interactive experiences that keep audiences engaged and entertained." },
  { title: "Expertise That Commands Attention", text: "Our speakers are recognized authorities in chiropractic, health optimization, neurology, functional wellness, personal development, and business success." },
  { title: "Tailored Presentations", text: "Every event is unique, which is why we customize our talks to match your audience's needs, industry, and goals." },
];

const topics = [
  { title: "The Truth About Health & Wellness", text: "Breaking down common health myths and giving audiences the tools to take control of their well-being." },
  { title: "Stress, Posture & Peak Performance", text: "How alignment, mobility, and nervous system function impact everything from energy levels to mental clarity." },
  { title: "Business & Leadership Success", text: "Lessons from running multi-million-dollar clinics, mentoring chiropractors, and training future industry leaders." },
  { title: "Workplace Wellness & Injury Prevention", text: "Helping employees increase productivity, reduce pain, and optimize performance." },
  { title: "Customized Presentations", text: "We can craft a powerful, high-impact talk tailored to your event, audience, and industry." },
];

const cityOptions = ["Arlington, TX", "Loveland, CO", "Fort Collins, CO", "Greeley, CO", "Erie, CO"];

const BookAnEvent = () => {
  const [active, setActive] = useState(eventTypes[0].key);
  const current = eventTypes.find((e) => e.key === active) ?? eventTypes[0];
  const [form, setForm] = useState({ name: "", phone: "", email: "", help: "", event: "", cities: [] as string[] });

  const toggleCity = (c: string) =>
    setForm((f) => ({ ...f, cities: f.cities.includes(c) ? f.cities.filter((x) => x !== c) : [...f.cities, c] }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch to book your event.");
    setForm({ name: "", phone: "", email: "", help: "", event: "", cities: [] });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={heroImg.url} alt="Well Adjusted speaking event" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="relative max-w-[1200px] mx-auto px-4 py-24 md:py-32">
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-xl shadow-lg">
            <h1 className="font-heading text-4xl md:text-5xl uppercase text-primary mb-6">Book An Event</h1>
            <div className="space-y-4 text-muted-foreground font-body">
              <p>At Well Adjusted Chiropractic, we don't just practice exceptional chiropractic care—we are elite communicators and world-class public speakers who have captivated audiences of thousands across the country.</p>
              <p>Our doctors have delivered high-impact keynote speeches, corporate wellness talks, and expert presentations on a variety of topics, ranging from cutting-edge health and wellness strategies to business leadership, stress management, and peak performance.</p>
              <p>When you book a speaker from Well Adjusted Chiropractic, you're not just getting a talk—you're getting a transformational experience that educates, inspires, and motivates your audience to take action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event type tabs */}
      <section className="bg-muted py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-border pb-4 mb-10">
            {eventTypes.map((t) => {
              const isActive = t.key === active;
              return (
                <button key={t.key} onClick={() => setActive(t.key)} className={`font-body text-sm md:text-base pb-2 transition-colors ${isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-foreground/70 hover:text-primary"}`}>
                  {t.label}
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
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{current.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[hsl(45,45%,92%)] py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary uppercase text-center mb-10">Contact Us To Book An Event Now!</h2>
          <form onSubmit={submit} className="bg-background rounded-2xl shadow-sm p-6 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="block">
                <span className="font-body font-bold text-sm">Full Name *</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="mt-1 w-full border rounded-md px-3 py-2 font-body text-sm" />
              </label>
              <label className="block">
                <span className="font-body font-bold text-sm">Phone *</span>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="mt-1 w-full border rounded-md px-3 py-2 font-body text-sm" />
              </label>
              <label className="block">
                <span className="font-body font-bold text-sm">Email *</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="mt-1 w-full border rounded-md px-3 py-2 font-body text-sm" />
              </label>
              <label className="block">
                <span className="font-body font-bold text-sm">How Can We Help? *</span>
                <input required value={form.help} onChange={(e) => setForm({ ...form, help: e.target.value })} placeholder="How Can We Help?" className="mt-1 w-full border rounded-md px-3 py-2 font-body text-sm" />
              </label>
            </div>
            <label className="block">
              <span className="font-body font-bold text-sm">Event Option *</span>
              <select required value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="mt-1 w-full border rounded-md px-3 py-2 font-body text-sm bg-background">
                <option value="">Pick a type of event</option>
                {eventTypes.map((t) => (
                  <option key={t.key} value={t.label}>{t.label}</option>
                ))}
              </select>
            </label>
            <div>
              <p className="font-body font-bold text-sm mb-3">Which location are you inquiring about?</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {cityOptions.map((c) => (
                  <label key={c} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <input type="checkbox" checked={form.cities.includes(c)} onChange={() => toggleCity(c)} />
                    {c}
                  </label>
                ))}
              </div>
            </div>
            <div className="text-center pt-3">
              <Button type="submit" size="lg" className="rounded-full px-10">Send Message</Button>
            </div>
            <p className="text-center text-xs text-muted-foreground font-body">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/privacy-policy" className="hover:underline">Terms of Service</a>
            </p>
          </form>
        </div>
      </section>

      {/* Why our doctors */}
      <section className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary uppercase text-center mb-12">Why Our Doctors Are The Most In-Demand Speakers In The Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyPoints.map((w) => (
                <div key={w.title} className="bg-muted rounded-2xl p-5">
                  <h3 className="font-heading text-base text-primary uppercase mb-2">{w.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={whyImg.url} alt="Well Adjusted speakers" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="bg-muted py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src={speakingImg.url} alt="Speaking topics" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-4">Speaking Topics That Inspire And Transform</h2>
            <p className="text-muted-foreground font-body mb-6">Our doctors are versatile speakers who can present on a wide range of topics, including</p>
            <ul className="space-y-4">
              {topics.map((t) => (
                <li key={t.title} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <div>
                    <p className="font-body font-bold text-foreground">{t.title}</p>
                    <p className="font-body text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

export default BookAnEvent;
