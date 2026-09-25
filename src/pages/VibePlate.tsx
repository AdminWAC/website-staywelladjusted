import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import vibeImg from "@/assets/vibe-plate/vibe-plate-1.jpg";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const benefits = [
  { title: "Improved Muscle Strength and Tone", text: "Regular use increases muscular strength and tone, enhancing your overall physical fitness." },
  { title: "Enhanced Circulation", text: "Vibration stimulates blood flow, improving oxygen delivery to muscles and tissues, aiding quicker recovery and reducing inflammation." },
  { title: "Increased Bone Density", text: "Clinical studies have shown WBV therapy helps increase bone mineral density, reducing the risk of osteoporosis and fractures." },
  { title: "Balance and Coordination", text: "WBV improves balance, stability, and coordination, reducing your risk of falls and injury." },
  { title: "Pain Relief", text: "Gentle vibrations help reduce chronic pain, muscle soreness, and joint stiffness, promoting faster recovery and comfort." },
];

const whoItems = [
  "Athletes seeking improved performance and recovery",
  "Individuals recovering from injuries",
  "Seniors aiming to increase bone density and prevent falls",
  "Anyone experiencing chronic pain or muscle stiffness",
];

const VibePlate = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Vibe Plate
          </h1>
        </div>
      </section>

      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Enhance Your Wellness With Whole Body Vibe Plate Therapy
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                At Well Adjusted Chiropractic, we utilize advanced therapies like Whole Body Vibration (WBV) to elevate your overall health, enhance healing, and boost physical performance. Our state-of-the-art Vibe Plate therapy provides gentle, yet highly effective whole-body stimulation designed to improve strength, flexibility, and circulation.
              </p>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Call To Schedule!
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={vibeImg} alt="Patient using the Vibe Plate whole body vibration therapy machine" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-10 text-center">
            Benefits of Whole Body Vibe Plate Therapy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#fdf6ee] rounded-lg p-6">
                <p className="font-heading text-sm text-primary mb-2">{b.title}</p>
                <p className="text-muted-foreground font-body text-sm">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                What Is Whole Body Vibration Therapy?
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Whole Body Vibration involves standing, sitting, or exercising on a vibrating platform, stimulating muscle fibers and enhancing neuromuscular response. This gentle vibration therapy supports various health benefits and accelerates your path to wellness.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                Who Can Benefit from WBV Therapy?
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Whole Body Vibration Therapy is beneficial for:
              </p>
              <ul className="space-y-3">
                {whoItems.map((item) => (
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
            Take Control of Your Health
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
            Discover the powerful benefits of Whole Body Vibe Plate therapy at Well Adjusted Chiropractic. Schedule your session today and begin experiencing better health, enhanced performance, and improved quality of life.
          </p>
          <button
            onClick={() => setCallOpen(true)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
          >
            Call To Schedule!
          </button>
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

export default VibePlate;
