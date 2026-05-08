import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import chiroCare1 from "@/assets/chiro-care-1.png";
import chiroCare2 from "@/assets/chiro-care-2.png";
import chiroCare3 from "@/assets/chiro-care-3.png";

const heroImages = [chiroCare1, chiroCare2, chiroCare3];

const locations = [
  { name: "Arlington, TX", phone: "682-238-0625" },
  { name: "Greeley, CO", phone: "970-353-0337" },
  { name: "Loveland, CO", phone: "970-669-7620" },
  { name: "Fort Collins, CO", phone: "970-493-0611" },
  { name: "Erie, CO", phone: "303-323-9931" },
];

const locationDetails = [
  {
    name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX",
    address: "5717 SW Green Oaks Blvd Arlington, TX 76017",
    phone: "(682) 238-0625",
  },
  {
    name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO",
    address: "3850 N Grant Ave STE 100 Loveland, CO 80538",
    phone: "(970) 669-7620",
  },
  {
    name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO",
    address: "6200 W 9th St #2A Greeley, CO 80634",
    phone: "(970) 353-0337",
  },
  {
    name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO",
    address: "1075 W Horsetooth Rd Fort Collins, CO 80526",
    phone: "(970) 493-0611",
  },
  {
    name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO",
    address: "680 Mitchell Way Unit 160, Erie, CO 80516",
    phone: "303-323-9931",
  },
];

const conditions = [
  {
    title: "Neck Pain",
    text: "Neck pain can interfere with your daily life, from driving to working or even sleeping. Common causes include poor posture, injuries, or spinal misalignments. At Well Adjusted, we identify the root of your discomfort and use gentle chiropractic adjustments to reduce pain and restore movement. Our personalized care helps relieve tension, improve mobility, and support long-term wellness—so you can get back to feeling your best.",
  },
  {
    title: "Low Back Pain",
    text: "Low back pain is a common issue that affects movement and quality of life. Whether it's due to poor posture, lifting injuries, or spinal misalignments, Well Adjusted offers safe, drug-free care to relieve pain and restore balance. We address the root cause with gentle chiropractic adjustments, helping you regain strength, flexibility, and comfort. Our goal is lasting relief and better function for the life you want to live.",
  },
  {
    title: "Headaches & Migraines",
    text: "Chronic headaches or migraines often stem from spinal tension or nerve irritation. At Well Adjusted, we look beyond symptoms to find the root cause—often misalignments in the neck and upper spine. Our chiropractic adjustments help reduce tension, improve nerve function, and bring lasting relief. Many patients experience fewer headaches, reduced severity, and improved focus and energy through regular chiropractic care.",
  },
  {
    title: "Numbness & Tingling",
    text: "Experiencing numbness or tingling in your hands, arms, legs, or feet? These sensations may be caused by spinal misalignments that place pressure on nearby nerves. At Well Adjusted, we focus on realigning the spine to relieve that pressure and restore natural nerve function. Our chiropractic care supports better circulation, less discomfort, and improved mobility—so you can move and feel better, naturally.",
  },
  {
    title: "Fatigue & Brain Fog",
    text: "If you feel constantly tired, mentally foggy, or drained, your spine may be affecting your nervous system. At Well Adjusted, we use chiropractic adjustments to reduce stress on the nerves and restore balance. With improved spinal alignment, many patients experience more energy, sharper thinking, and better sleep. Let us help you feel refreshed, focused, and ready to take on your day with clarity and confidence.",
  },
  {
    title: "Many Other Symptoms as well",
    text: "Our chiropractic care extends beyond these common conditions. Whether you're dealing with sports injuries, joint pain, posture problems, or other health concerns, our experienced team can help identify the root cause and develop a personalized treatment plan for your specific needs.",
    link: { label: "Learn about more conditions we treat", to: "/health-starts-here" },
  },
];

const MAPS_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6";

const ChiropracticCare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCallModal, setShowCallModal] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);
  return (
    <Layout>
      {/* Page Title */}
      <section className="bg-background py-8">
        <div className="max-w-[1340px] mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-primary uppercase">
            Chiropractic Care
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-muted py-10">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="bg-background rounded-xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left text */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-4">
                Chiropractic Care for<br />Pain Relief & Healing
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Suffering from back pain, neck pain, or an injury? Our chiropractors at Well Adjusted Chiropractic provide expert care in Loveland CO, Greeley CO, Fort Collins CO, Erie CO and Arlington TX.
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Using advanced chiropractic adjustments, spinal decompression, and soft-touch techniques, we help patients recover, restore mobility, and get back to doing what they love.
              </p>
              <button
                onClick={() => setShowCallModal(true)}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors w-fit"
              >
                Call to Schedule!
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
            {/* Right image carousel */}
            <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Chiropractic care ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="bg-background py-16">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary text-center uppercase mb-10">
            Common Conditions Chiropractic Care Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <div
                key={c.title}
                className="border border-primary/20 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-xl text-primary italic mb-4">
                  {c.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {c.text}
                </p>
                {c.link && (
                  <Link
                    to={c.link.to}
                    className="inline-block mt-4 text-primary font-body text-sm underline hover:text-primary/80"
                  >
                    {c.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Relief CTA */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary uppercase mb-4">
            Get Relief at Well Adjusted Chiropractic
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
            If you're experiencing pain, stiffness, or injury-related discomfort, our expert chiropractors in Loveland CO, Greeley CO, Fort Collins CO, Erie CO and Arlington TX can help. Book a consultation today or take advantage of our $64 New Patient Special (normally $279) for a comprehensive 45-minute evaluation and exam.
          </p>
          <p className="font-heading text-xl text-primary uppercase mt-6 mb-6">
            New Patient Special Offer
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Google Maps + Locations */}
      <section className="bg-background py-16">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm min-h-[450px]">
              <iframe
                src={MAPS_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 450 }}
                allowFullScreen
                loading="lazy"
                title="Well Adjusted Chiropractic Locations"
              />
            </div>
            {/* Location list */}
            <div className="space-y-4">
              {locationDetails.map((loc) => (
                <div key={loc.name} className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body">{loc.address}</p>
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                      className="text-primary font-body font-bold text-sm hover:underline"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Schedule Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4" onClick={() => setShowCallModal(false)}>
          <div
            className="bg-background rounded-xl shadow-2xl max-w-[500px] w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-heading text-xl text-primary mb-6">Call To Schedule!</h3>
            <div className="space-y-3">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="flex items-center justify-between bg-muted rounded-lg px-5 py-3"
                >
                  <span className="font-body text-sm text-foreground">{loc.name}</span>
                  <a
                    href={`tel:${loc.phone}`}
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-md font-body font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
                  >
                    Call Today
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ChiropracticCare;
