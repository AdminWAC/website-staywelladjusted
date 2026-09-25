import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import weightLossImg from "@/assets/weight-loss/weight-loss-1.jpg";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const whyItems = [
  { title: "Personalized Coaching", text: "Receive one-on-one guidance from experienced coaches committed to helping you succeed at every step." },
  { title: "Customized Nutritional Plans", text: "Tailored meal plans designed specifically for your body type, lifestyle, and health goals, without restrictive dieting or strenuous workouts." },
  { title: "Professional Supervision", text: "Your journey is monitored by healthcare professionals dedicated to your long-term wellness and safety." },
  { title: "Real, Lasting Results", text: "Clients consistently experience significant weight loss, increased energy, improved mood, and enhanced overall health." },
];

const benefits = [
  { title: "Sustained Weight Loss", text: "Achieve results that last, eliminating frustrating cycles of losing and regaining weight." },
  { title: "Boosted Energy and Vitality", text: "Feel renewed energy and increased physical endurance for daily activities." },
  { title: "Improved Health Outcomes", text: "Experience positive changes in cholesterol, blood pressure, blood sugar levels, and overall metabolic health." },
];

const WeightLoss = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Weight Loss
          </h1>
        </div>
      </section>

      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6 italic">
                Transform Your Life With Our Personalized Weight Loss Program
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                At Well Adjusted Chiropractic, we understand that true wellness involves achieving and maintaining a healthy weight. Our comprehensive, doctor-supervised weight loss program provides personalized support, ensuring you reach your goals safely, effectively, and sustainably.
              </p>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Book An Appointment
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={weightLossImg} alt="Woman measuring her waist after weight loss progress" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-10 text-center">
            Why Our Weight Loss Program Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-[#fdf6ee] rounded-lg p-6">
                <p className="font-heading text-sm text-primary mb-2">{item.title}</p>
                <p className="text-muted-foreground font-body text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-[900px] mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-8 text-center">
              Benefits You'll Experience
            </h2>
            <div className="space-y-4 mb-12">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading text-sm text-primary">{b.title}</p>
                    <p className="text-muted-foreground font-body text-sm">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#fdf6ee] rounded-lg p-8 text-center">
              <h3 className="font-heading text-xl text-primary uppercase mb-4">
                Client Success Stories
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Our clients regularly share inspiring transformations
              </p>
              <p className="text-primary font-body text-base italic">
                "This program changed my life—I'm off my medications and feel healthier than ever"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
            Take Control of Your Health Today
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
            Contact Well Adjusted Chiropractic to start your personalized weight loss journey. Discover how our expert team can guide you toward achieving your health and wellness goals effectively and safely.
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

export default WeightLoss;
