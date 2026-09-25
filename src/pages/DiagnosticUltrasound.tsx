import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import ultrasoundImg from "@/assets/diagnostic-ultrasound/ultrasound-1.jpg";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const diagnoses = [
  "Muscle and joint injuries",
  "Tendonitis and ligament sprains",
  "Chronic pain conditions",
  "Inflammation and swelling",
];

const whyItems = [
  "Immediate, accurate visualization of soft tissue injuries",
  "Non-radiation imaging, safe for all ages",
  "Enhanced precision in chiropractic care",
  "Rapid diagnosis means quicker recovery times",
];

const DiagnosticUltrasound = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Diagnostic Ultrasound
          </h1>
        </div>
      </section>

      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Advanced Diagnostic Ultrasound in Greeley, CO
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
                <p>
                  At Well Adjusted Chiropractic in Greeley, we believe accurate diagnosis is key to effective treatment and long-term health. Our state-of-the-art Diagnostic Ultrasound provides clear, precise imaging to quickly identify your source of pain or injury—right here in Greeley.
                </p>
              </div>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Call To Schedule!
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={ultrasoundImg} alt="Diagnostic ultrasound being performed on a patient's knee" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                See Clearly, Heal Quickly
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Diagnostic Ultrasound is safe, non-invasive, and incredibly effective for diagnosing:
              </p>
              <ul className="space-y-3">
                {diagnoses.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mt-6">
                This advanced imaging helps our expert chiropractors pinpoint exactly what's causing your discomfort, creating targeted, personalized treatment plans that get results faster.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                Why Choose Diagnostic Ultrasound?
              </h2>
              <ul className="space-y-3">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
            Experience the Difference at Well Adjusted Chiropractic
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
            Our Greeley patients consistently experience better outcomes thanks to precise diagnostics and tailored treatments. Stop guessing and start healing today.
          </p>
          <h3 className="font-heading text-xl text-primary uppercase mb-4">
            Schedule Your Diagnostic Ultrasound Today
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
            Don't let pain slow you down – contact our Greeley office and take advantage of our advanced Diagnostic Ultrasound technology. Experience relief, clarity, and rapid recovery by booking your appointment now.
          </p>
          <button
            onClick={() => setCallOpen(true)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
          >
            Call To Schedule!
          </button>
          <p className="text-muted-foreground font-body text-sm mt-8 italic">
            Well Adjusted Chiropractic – Your trusted partner for precise, effective chiropractic care in Greeley, CO.
          </p>
        </div>
      </section>

      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl text-primary">Call to Schedule</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0">
                <div>
                  <p className="font-heading text-sm text-primary">{loc.name}</p>
                  <p className="text-muted-foreground text-xs">{loc.address}</p>
                  <p className="text-muted-foreground text-xs">{loc.phone}</p>
                </div>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                  className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-heading uppercase"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default DiagnosticUltrasound;
