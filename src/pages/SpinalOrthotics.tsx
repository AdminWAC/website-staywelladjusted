import { useState } from "react";
import { Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import orthoticsImg from "@/assets/spinal-orthotics/orthotics-1.jpg";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const types = [
  {
    title: "Cervical Orthotics",
    text: "Cervical orthotics help gently restore the natural curve of your neck. This curve is important for proper posture, better balance, and healthy nerve flow. When the neck loses its shape—often from looking down at phones or sitting too much—it can lead to pain, stiffness, or even headaches. Using a cervical orthotic at home trains your neck to hold better alignment between chiropractic visits and supports long-term healing.",
  },
  {
    title: "Thoracic Orthotics",
    text: "Thoracic orthotics are used to open up the mid-back and improve posture. Many people develop tight, rounded shoulders from sitting, slouching, or stress. Thoracic orthotics work by stretching the chest and upper back, helping you breathe better, stand taller, and move more freely. They're a great way to support your spine and build better posture habits.",
  },
  {
    title: "Lumbar Orthotics",
    text: "Lumbar orthotics help support the natural curve in your lower back. This curve is key to protecting the spine during movement and preventing strain. If you sit for long hours or have poor posture, that curve can flatten—causing tension or back pain. Lumbar orthotics gently guide your spine back into proper shape, helping you feel stronger and more supported every day.",
  },
];

const SpinalOrthotics = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Spinal Orthotics
          </h1>
        </div>
      </section>

      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Support Your Spine
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Spinal orthotics are simple tools that help gently shape and support your spine at home. We use them to improve posture, restore healthy curves in your neck and back, and help your body hold the changes made during your chiropractic visits. Whether it's for your neck, mid-back, or lower back, these orthotics make your adjustments work better and last longer. They're an important part of getting real, lasting results—and feeling your best.
              </p>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Call To Schedule!
              </button>
            </div>
            <div className="rounded-lg overflow-hidden max-w-[420px] mx-auto w-full">
              <img src={orthoticsImg} alt="Cervical, thoracic and lumbar spinal orthotics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((t) => (
              <div key={t.title} className="bg-[#fdf6ee] rounded-lg p-6">
                <p className="font-heading text-lg text-primary uppercase mb-4">{t.title}</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCallOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Call To Schedule!
            </button>
          </div>
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

export default SpinalOrthotics;
