import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import img1 from "@/assets/massage-therapy/WAC-massage-therapy-photos1.png";
import img2 from "@/assets/massage-therapy/WAC-massage-therapy-photos2.jpg";
import img3 from "@/assets/massage-therapy/WAC-massage-therapy-photos3.jpg";

const carouselImages = [img1.url, img2.url, img3.url];

const massageTypes = [
  {
    title: "Deep Tissue Massage",
    points: [
      "Target muscles, fascia, and tendons deep beneath the surface.",
      "Helps with chronic tension, injuries, and muscle recovery.",
      "Releases tight knots and built-up stress.",
    ],
  },
  {
    title: "Facial Massage",
    points: [
      "Relaxes jaw, forehead, and facial muscles.",
      "Helps reduce tension headaches and facial tightness.",
      "Great for those who clench their jaw or experience facial discomfort.",
    ],
  },
  {
    title: "Therapeutic Massage",
    points: [
      "Aims to treat specific physical issues like pain or injury.",
      "Improves circulation, mobility, and muscle function.",
      "Ideal for managing chronic conditions or physical stress.",
    ],
  },
  {
    title: "Pre & Post Natal Massage",
    points: [
      "Eases pregnancy-related discomfort in the back, hips, and legs.",
      "Improves circulation and reduces swelling and stress.",
      "Safe techniques support physical and emotional well-being for new and expectant mothers.",
    ],
  },
  {
    title: "Relaxation Massage",
    points: [
      "Gentle, flowing techniques designed to calm the nervous system.",
      "Reduces stress, anxiety, and mental fatigue.",
      "Perfect for anyone looking to unwind and restore balance.",
    ],
  },
  {
    title: "Stretch Therapy",
    points: [
      "Targets flexibility, range of motion, and muscular imbalances.",
      "Reduces stiffness and risk of injury during daily activities.",
      "Great for athletes, office workers, and anyone feeling tight or restricted.",
    ],
  },
];

const painReliefItems = [
  { title: "Fibromyalgia and Neuralgia", desc: "Soothes chronic pain and nerve sensitivity." },
  { title: "Knee and Back Pain", desc: "Loosens tight muscles and supports spinal alignment." },
  { title: "High Blood Pressure", desc: "Promotes relaxation and circulatory balance." },
  { title: "Fatigue and Headaches", desc: "Relieves tension, reduces stress, and restores energy." },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "970-670-3607" },
];

const MassageTherapy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [callOpen, setCallOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    const i = setInterval(nextSlide, 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <Layout>
      {/* Hero Title */}
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Massage Therapy
          </h1>
        </div>
      </section>

      {/* Intro + carousel */}
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Massage Therapy – Expert Therapeutic Care
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                <p>
                  At Well Adjusted Chiropractic, we provide professional massage therapy in Loveland CO, Fort Collins CO and Erie CO, designed to relieve pain, accelerate healing, and restore balance to your body. Whether you need deep tissue work, relaxation, or injury recovery, our expert massage therapist works alongside our top-rated chiropractors to ensure you get the best possible care.
                </p>
              </div>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call to Schedule!
              </button>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                {carouselImages.map((src, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                  >
                    <img src={src} alt={`Massage therapy ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-9 h-9 rounded-md flex items-center justify-center hover:bg-primary/80" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-9 h-9 rounded-md flex items-center justify-center hover:bg-primary/80" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary/30 uppercase mb-8">
            Why Choose Massage Therapy at Well Adjusted Chiropractic?
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
            <p>
              Massage therapy does more than just relax you—it enhances circulation, promotes muscle recovery, and reduces pain. When combined with chiropractic care, massage helps your body heal faster, reduce tension, and improve mobility.
            </p>
            <p>
              Whether you're recovering from an injury, dealing with chronic pain, or simply want to feel your best, our expert massage therapist customizes every session to fit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Massage */}
      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-secondary uppercase text-center mb-3">
            Types of Massage Therapy We Offer
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massageTypes.map((t) => (
              <div key={t.title} className="bg-background border border-primary/20 rounded-lg p-6">
                <h3 className="font-heading text-lg text-primary mb-4">{t.title}</h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm leading-relaxed list-disc pl-5">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain & Injury Recovery */}
      <section className="py-16 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary/30 uppercase text-center mb-6">
            Massage Therapy for Pain & Injury Recovery
          </h2>
          <p className="text-muted-foreground font-body text-sm md:text-base text-center max-w-[900px] mx-auto mb-10 leading-relaxed">
            Massage therapy is a powerful tool for relieving pain and promoting natural healing. It improves circulation, reduces inflammation, and helps flush toxins from the body. Our specialized techniques can help with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {painReliefItems.map((item) => (
              <div key={item.title} className="bg-primary/10 border border-primary/25 rounded-lg p-6">
                <h3 className="font-heading text-base text-secondary font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-sm md:text-base text-center max-w-[900px] mx-auto mt-10 leading-relaxed">
            If you're dealing with chronic pain, stiffness, or stress, massage therapy can be the relief you've been looking for.
          </p>
        </div>
      </section>

      {/* Benefits + Expert side by side */}
      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-primary/20 rounded-lg p-8">
              <h3 className="font-heading text-lg text-primary mb-4">The Benefits of Massage Therapy</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                Even if you're not in pain, regular massage therapy can:
              </p>
              <ul className="space-y-2 text-muted-foreground font-body text-sm leading-relaxed list-disc pl-5">
                <li>Improve circulation &amp; mobility.</li>
                <li>Speed up muscle, ligament &amp; tendon recovery.</li>
                <li>Reduce pain &amp; stiffness.</li>
                <li>Flush out toxins.</li>
                <li>Promote faster healing after workouts or injuries.</li>
              </ul>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mt-4">
                Our skilled massage therapist works with your body's natural healing processes to help you move, feel, and function at your best.
              </p>
            </div>

            <div className="bg-background border border-primary/20 rounded-lg p-8 flex flex-col">
              <h3 className="font-heading text-lg text-primary mb-4">Expert Massage Therapy</h3>
              <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed flex-1">
                <p>
                  At Well Adjusted Chiropractic, our highly skilled massage therapist works alongside our expert chiropractic team to provide targeted care for injury recovery, pain relief, and wellness. Whether you need a therapeutic massage after an accident, sports injury, or just want to feel better, we've got you covered.
                </p>
                <p>Call now to schedule your massage therapy session.</p>
              </div>
              <Link
                to="/#home-contact-us"
                className="mt-6 inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Special Offer CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <p className="text-primary-foreground font-body text-lg mb-2">Ready to find out more?</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground uppercase tracking-wider mb-8">
            new patient special offer
          </h2>
          <Link
            to="/#home-contact-us"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-secondary transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Google Maps + Locations */}
      <section className="py-12 bg-muted">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg min-h-[500px]">
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
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-primary rounded-lg p-4 text-primary-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold">{loc.name}</h3>
                      <p className="text-xs opacity-90">{loc.address}</p>
                      <a href={`tel:${loc.phone}`} className="text-xs font-bold hover:underline">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call popup */}
      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl text-primary uppercase tracking-wider">
              Call to Schedule
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {locations.map((loc) => {
              const label = loc.name.replace("WELL ADJUSTED CHIROPRACTIC - ", "");
              return (
                <a
                  key={loc.name}
                  href={`tel:${loc.phone}`}
                  className="flex items-center justify-between gap-3 bg-primary/10 hover:bg-primary/20 border border-primary/25 rounded-lg px-4 py-3 transition-colors"
                >
                  <div>
                    <p className="font-heading text-sm font-bold text-secondary">{label}</p>
                    <p className="text-sm font-body text-muted-foreground">{loc.phone}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                </a>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default MassageTherapy;
