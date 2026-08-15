import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";

import { Clipboard, Users, AlertCircle } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "970-670-3607" },
];

const Special = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll gallery to the right
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <Layout>
      <section className="py-8 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          {/* Left column: visit info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* First Visit */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clipboard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-primary mb-3">
                      WHAT CAN YOU EXPECT AT YOUR FIRST VISIT?
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                      Before you get adjusted, we will perform an in-depth consultation regarding your health history and the health goals you would like to reach. We will perform several different exams including our posture analysis, which is a window to your spine and nervous system. If clinically indicated, we will also perform spinal X-rays. This is one of the most important pieces of data we collect as we can see the health of your spine and how it may be affecting the nervous system by any abnormal curvatures or formations of the spine and pressure on the disc or nerves. The doctors will then take the time to thoroughly review the exam information to identify the problem.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-body">
                      <li>This visit typically takes about 40 minutes.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Second Visit */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-primary mb-3">
                      WHAT CAN YOU EXPECT ON YOUR SECOND VISIT?
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                      We will present and go through a personalized 10-15 page report compiled from all the tests we performed on your last visit. You get to take this report home and keep it. We will share with you the cause of your symptoms and discuss a path and a plan to restore health. After we have agreed on the path and plan, we will perform your first adjustment and walk you through the process of the unique and specific technique that gets such remarkable results.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-body">
                      <li>This visit takes about 60 minutes.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">
                      It is important that these initial appointments are longer so that we can thoroughly determine your individualized care. We recognize and value your time and we strive to make your visits as efficient as possible so that we can get you back to doing what you love to do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Please Know */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-red-500 mb-3">PLEASE KNOW:</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Our doctors do not adjust blindly. We pride ourselves on getting to the source of the problem as quickly as possible so you can get back to your best health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div>
              <h1 className="font-heading text-2xl md:text-3xl text-primary text-center mb-1">
                DON'T WAIT ANOTHER DAY
              </h1>
              <h2 className="font-heading text-lg md:text-xl text-primary text-center mb-4">
                SCHEDULE YOUR APPOINTMENT TODAY!
              </h2>
              <p className="text-sm text-muted-foreground font-body text-center mb-2">
                Please fill out the form below, including all required fields. After pressing continue, someone from our office will contact you within 24 hours. Thank you!
              </p>
              <p className="text-sm font-body font-bold text-foreground text-center mb-4 italic">
                *New Patient Exams are available at our Loveland, Erie, and Arlington offices. After that, your regular adjustments can be scheduled at whichever Well Adjusted clinic is most convenient for you.
              </p>

              {/* Same embedded form as hero */}
              <div className="bg-muted rounded-lg overflow-hidden">
                <h3 className="font-heading text-xl text-primary text-center pt-4 px-4">
                  FIND OUT MORE INFORMATION ON<br />WELL ADJUSTED CHIROPRACTIC
                </h3>
                <iframe
                  src="https://link.ngynai.com/widget/form/6zrGCjjaRagxIx8eWnOs"
                  style={{ width: "100%", height: "600px", border: "none" }}
                  title="New Patient Special Form"
                  scrolling="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Google Maps + Locations */}
      <section className="py-12 bg-muted">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
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

            {/* Location cards */}
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-[#c9a96e] rounded-lg p-4 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold">{loc.name}</h3>
                      <p className="text-xs opacity-90">{loc.address}</p>
                      <p className="text-xs opacity-90">{loc.phone}</p>
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

export default Special;
