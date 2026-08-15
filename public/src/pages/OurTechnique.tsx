import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
const thompsonAsset = { url: "/images-uploaded/our-technique/thompson.png" };
const sotAsset = { url: "/images-uploaded/our-technique/sot.png" };
const akAsset = { url: "/images-uploaded/our-technique/applied-kinesiology.png" };
const manualAsset = { url: "/images-uploaded/our-technique/manual-diversified.png" };
const cranialAsset = { url: "/images-uploaded/our-technique/cranial.png" };
const videoPoster = { url: "/images-uploaded/our-technique/video-poster.png" };

const MAPS_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&femb=1&ll=36.705912089674364%2C-101.1439669&z=6";

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

const techniques = [
  {
    key: "thompson",
    label: "Thompson Technique",
    title: "THOMPSON TECHNIQUE",
    image: thompsonAsset.url,
    text: "One of the most significant benefits of their technique is that it's easy on the body. They use drop tables, which provide a gentle force that's specific to the patient's needs. This technique, known as the Thompson technique, is highly effective and allows doctors to tailor their adjustments to each patient's unique response. Drop tables are especially helpful for patients who have difficulty relaxing or are in significant pain during an adjustment.",
  },
  {
    key: "sot",
    label: "Sacral Occipital Technique",
    title: "SACRAL OCCIPITAL TECHNIQUE",
    image: sotAsset.url,
    text: "Sacral Occipital Technique (SOT) focuses on the relationship between the sacrum (the triangular bone at the base of the spine) and the occiput (the base of the skull). By addressing imbalances between these two areas, SOT helps regulate cerebrospinal fluid flow and improve nerve function, leading to enhanced overall health and well-being. This gentle, precise technique is used across our clinics to support optimal spinal alignment and neurological function.",
  },
  {
    key: "ak",
    label: "Applied Kinesiology",
    title: "APPLIED KINESIOLOGY",
    image: akAsset.url,
    text: "Applied Kinesiology (AK) is a technique that uses muscle testing to identify imbalances in the body's structure, chemistry, and emotions. By evaluating how different muscles respond, chiropractors can pinpoint areas of misalignment and dysfunction. We use this testing to confirm that subluxations have been corrected, ensuring the body is properly aligned. This approach allows us to tune adjustments and make sure patients get the best possible results. AK helps create personalized care plans that support better movement, function, and overall well-being.",
  },
  {
    key: "gpa",
    label: "Gravitational Pattern Alignment",
    title: "GRAVITATIONAL PATTERN ALIGNMENT",
    image: thompsonAsset.url,
    text: "Gravitational Pattern Alignment focuses on how your body organizes itself against gravity. By analyzing posture, weight distribution, and movement patterns, our doctors identify where the spine and joints are being pulled out of alignment—and correct those patterns so your body can move with less stress, better balance, and long-term stability.",
  },
  {
    key: "manual",
    label: "Manual Or Diversified Adjusting",
    title: "MANUAL OR DIVERSIFIED ADJUSTING",
    image: manualAsset.url,
    text: "Manual or Diversified Adjusting is the most common chiropractic technique, used by about 80% of chiropractors. It involves hands-on adjustments that apply a precise force to misaligned vertebrae to restore movement and function. While this method is effective, our chiropractors go beyond basic spinal manipulation. Every adjustment is tailored to the patient's specific needs, ensuring that each thrust is not just a general correction but a precisely delivered movement based on the body's unique requirements. Diversified adjusting is often combined with other advanced techniques to create a comprehensive, results-driven approach that supports long-term spinal health and function.",
  },
  {
    key: "cranial",
    label: "Cranial Adjusting",
    title: "CRANIAL ADJUSTING",
    image: cranialAsset.url,
    text: "Cranial Adjusting is a powerful yet often overlooked technique that focuses on gentle adjustments to the bones of the skull to restore proper movement and improve cerebrospinal fluid flow. Originally developed by osteopathic doctors and later refined by chiropractors, this method is rarely taught in modern chiropractic schools despite its profound impact on nervous system function. Our chiropractors have witnessed incredible transformations using this technique, helping patients experience improved brain function, pain relief, and overall well-being in ways traditional adjustments cannot achieve.",
  },
  {
    key: "cbp",
    label: "Chiropractic Biophysics",
    title: "CHIROPRACTIC BIOPHYSICS",
    image: thompsonAsset.url,
    text: "Chiropractic Biophysics (CBP) is a research-based, corrective approach that uses posture analysis, X-ray, and specific adjustments, exercises, and traction to restore proper spinal alignment. Instead of just relieving symptoms, CBP works to rebuild the structure of the spine—giving you lasting improvements in posture, function, and long-term health.",
  },
];

const OurTechnique = () => {
  const [active, setActive] = useState(techniques[0].key);
  const current = techniques.find((t) => t.key === active) ?? techniques[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[hsl(45,45%,92%)] py-16 overflow-hidden">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="bg-background/70 backdrop-blur-sm rounded-3xl shadow-sm px-6 py-10 md:px-12 md:py-14">
            <h1 className="font-heading text-4xl md:text-5xl text-primary text-center mb-8">
              A Well Adjusted Approach
            </h1>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
                poster={videoPoster.url}
                src="/images-lp-francio/Day-1-Np-Video-Our-Techniques.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-muted py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-border pb-4 mb-10">
            {techniques.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`font-body text-sm md:text-base pb-2 transition-colors ${
                    isActive
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-5">
                {current.title}
              </h2>
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-[900px] mx-auto px-4 text-center text-primary-foreground">
          <p className="font-body text-lg mb-2">Ready to find out more?</p>
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-8">
            New Patient Special Offer
          </h2>
          <Link
            to="/schedule-an-appointment-new-patient-special-offer"
            className="inline-flex items-center gap-3 bg-background text-primary px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-background/90 transition-colors"
          >
            Request An Appointment
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Map + locations */}
      <section className="bg-background py-16">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </Layout>
  );
};

export default OurTechnique;
