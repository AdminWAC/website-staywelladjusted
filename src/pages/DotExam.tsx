import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import dotImg from "@/assets/dot-exam/dot-exam-1.jpg";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const whyItems = [
  { title: "No Long Wait Times", text: "Get in and out quickly without waiting in line" },
  { title: "Same-Day & Next-Day Appointments Available", text: "" },
  { title: "Lower Cost Compared to Urgent Care Clinics", text: "" },
  { title: "DOT-Certified Exam & Paperwork Completed on the Spot", text: "" },
  { title: "Friendly & Professional Service", text: "You'll be treated with respect & top-notch customer care" },
];

const examIncludes = [
  "Blood pressure & heart health check",
  "Vision & hearing tests",
  "Reflexes, mobility & neurological evaluation",
  "Urinalysis to check for underlying conditions",
  "Medical history review & required documentation",
];

const bringItems = [
  { title: "A valid driver's license", text: "Proof of legal authorization to operate a vehicle." },
  { title: "Current medications list & any required medical paperwork", text: "List of meds and forms for medical condition review." },
  { title: "Glasses or hearing aids if required for driving", text: "Bring required eyewear or hearing aids for testing." },
  { title: "Previous DOT medical card (if renewing)", text: "An old DOT card is needed for renewal verification." },
];

const DotExam = () => {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            DOT Physicals
          </h1>
        </div>
      </section>

      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-2 italic">
                DOT Physicals in Fort Collins, CO
              </h2>
              <p className="font-heading text-primary uppercase tracking-wider mb-6">
                Fast, Affordable & Hassle-Free CDL Exams
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                If you need a Department of Transportation (DOT) physical to maintain or obtain your Commercial Driver's License (CDL), Well Adjusted Chiropractic offers quick, affordable, and hassle-free DOT exams in Fort Collins, CO. Unlike crowded clinics where you wait in line for hours, we provide same-day and next-day appointments so you can get back on the road—fast.
              </p>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Call To Schedule!
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={dotImg} alt="Doctor consulting a patient during a DOT physical exam" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                Why Choose Us for Your DOT Physical?
              </h2>
              <ul className="space-y-4">
                {whyItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-sm text-primary">{item.title}</p>
                      {item.text && <p className="text-muted-foreground font-body text-sm">{item.text}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-6">
                What to Expect During Your DOT Physical
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                A DOT physical is a federally required medical exam that ensures you are physically fit to operate a commercial vehicle. Our exam includes:
              </p>
              <ul className="space-y-3">
                {examIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mt-6">
                Our goal is to keep you compliant with FMCSA regulations while making the process as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase mb-8 text-center">
            What to Bring to Your DOT Physical
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {bringItems.map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-6">
                <p className="font-heading text-sm text-primary mb-2">{item.title}</p>
                <p className="text-muted-foreground font-body text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              Get in fast, avoid the long wait, and experience customer service built for professional drivers.
            </p>
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

export default DotExam;
