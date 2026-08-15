import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import spinalImg1 from "@/assets/spinal-decompression-1.png";
import spinalImg2 from "@/assets/spinal-decompression-2.png";
import spinalImg3 from "@/assets/spinal-decompression-3.png";

const carouselImages = [spinalImg1, spinalImg2, spinalImg3];

const conditions = [
  "Herniated or bulging discs",
  "Degenerative disc disease",
  "Sciatica and radiating leg pain",
  "Chronic low back pain",
  "Spinal stenosis",
  "Facet joint syndrome",
  "Numbness, tingling, or weakness in the arms or legs",
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "970-670-3607" },
];

const SpinalDecompression = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Title */}
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Spinal Decompression Therapy
          </h1>
        </div>
      </section>

      {/* Intro section with image carousel */}
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Gentle. Targeted. Proven.
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                <p>
                  If you've been struggling with chronic back pain, sciatica, disc issues, or spinal nerve compression, spinal decompression therapy may be exactly what your body needs to heal.
                </p>
                <p>
                  At Well Adjusted Chiropractic, we offer non-surgical spinal decompression as part of our advanced approach to restoring proper spinal function and relieving nerve pressure.
                </p>
                <p>
                  This gentle, computer-controlled treatment helps create negative pressure within the discs, allowing for improved circulation, disc rehydration, and pressure relief on pinched nerves.
                </p>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                {carouselImages.map((img, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                  >
                    <img
                      src={img}
                      alt={`Spinal decompression therapy ${i + 1}`}
                      className="w-[110%] h-[110%] object-cover -ml-[5%] -mt-[5%]"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-9 h-9 rounded-md flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-9 h-9 rounded-md flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary/30 uppercase text-center mb-10">
            What Conditions Does Spinal Decompression Help With?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="border border-primary/30 rounded-lg px-6 py-4 text-primary font-body text-sm"
              >
                {condition}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research + Treatment - Side by side cards */}
      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research Card */}
            <div className="bg-background border border-primary/20 rounded-lg p-8">
              <h3 className="font-heading text-lg text-primary mb-4">What the Research Says</h3>
              <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                <p>Clinical studies have shown that non-surgical spinal decompression can be effective in reducing disc pressure and alleviating symptoms in many patients.</p>
                <p>A 2010 study in the American Journal of Pain Management found that 86% of patients reported significant pain relief after a series of spinal decompression treatments.</p>
                <p>Other research suggests spinal decompression helps improve disc hydration and promotes long-term healing in properly selected patients.</p>
                <p>When combined with chiropractic care, decompression therapy enhances the body's ability to recover and maintain long-term spinal health.</p>
              </div>
            </div>

            {/* Treatment Card */}
            <div className="bg-background border border-primary/20 rounded-lg p-8">
              <h3 className="font-heading text-lg text-primary mb-4">What to Expect During Treatment</h3>
              <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                <p>Spinal decompression is a gentle, relaxing procedure that typically takes about 20–30 minutes per session. Most patients describe it as a light, controlled stretch—there's no cracking, popping, or abrupt movements involved. Instead, the treatment delivers steady, therapeutic decompression to the spine, which helps relieve pressure and promote healing.</p>
                <p>Our experienced team will conduct a thorough evaluation to determine if you're a good candidate. If so, we'll create a personalized care plan that includes decompression therapy and targeted chiropractic care to address the root cause of your symptoms and support long-term relief.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is It Right For You? */}
      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-secondary uppercase text-center mb-3">
            Is Spinal Decompression Right for You?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-primary/15 border border-primary/25 rounded-lg p-6 text-center">
              <h3 className="font-heading text-base text-secondary font-bold mb-3">The Problem</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Not everyone is a candidate, but if you've been told surgery is your only option, or you're tired of masking pain with medication.
              </p>
            </div>
            <div className="bg-primary/15 border border-primary/25 rounded-lg p-6 text-center">
              <h3 className="font-heading text-base text-secondary font-bold mb-3">The Solution</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                This gentle approach could be a game-changer. Help you move better, feel better, and heal naturally—without drugs or surgery.
              </p>
            </div>
            <div className="bg-primary/15 border border-primary/25 rounded-lg p-6 text-center">
              <h3 className="font-heading text-base text-secondary font-bold mb-3">Trusted Locally</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Patients across Northern Colorado and Arlington, TX trust our team for natural healing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching original cream/light bg */}
      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary uppercase tracking-wider mb-4">
            Take the First Step Today
          </h2>
          <p className="text-muted-foreground font-body text-sm mb-2">
            We'll perform a full neurological evaluation and spinal assessment to determine if decompression is the right fit for your condition.
          </p>
          <p className="text-muted-foreground font-body text-sm mb-8">
            Call today or book your visit online to get started.
          </p>
          <Link
            to="/special"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            BOOK AN APPOINTMENT
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
                      <span className="text-sm">📍</span>
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
    </Layout>
  );
};

export default SpinalDecompression;
