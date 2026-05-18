import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import WellAdjustedExperience from "@/components/WellAdjustedExperience";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PatientReviews from "@/components/PatientReviews";
import BlogSection from "@/components/BlogSection";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966", hours: ["Monday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Tuesday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Wednesday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Thursday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Friday , Saturday & Sunday : Closed"] },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543", hours: ["Monday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Tuesday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Wednesday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Thursday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Friday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Saturday & Sunday : Closed"] },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097", hours: ["Monday : 8:00 am–12:00 pm / 2:00 pm–6:00 pm", "Tuesday : 8:00 am–12:00 pm / 2:00 pm–6:00 pm", "Wednesday : 8:00 am–12:00 pm / 2:00 pm–6:00 pm", "Thursday : 7:00 am–12:00 pm / 2:00 pm–7:00 pm", "Friday : 8:00 am–12:00 pm / 2:00 pm–6:00 pm", "Saturday & Sunday : Closed"] },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207", hours: ["Monday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Tuesday : 3:00 pm–6:00 pm", "Wednesday : 8:00 am–12:00 pm", "Thursday : 8:00 am–12:00 pm | 3:00 pm–6:00 pm", "Friday , Saturday & Sunday : Closed"] },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "970-670-3607", hours: ["Monday : 9:00 am–12:00 pm / 3:00 pm–6:00 pm", "Tuesday : 3:00 pm–6:00 pm", "Wednesday : 9:00 am–12:00 pm / 3:00 pm–6:00 pm", "Thursday : 9:00 am–12:00 pm / 3:00 pm–6:00 pm", "Friday : 9 am–12:30 pm", "Saturday & Sunday : Closed"] },
];

const LocationCard = ({ loc }: { loc: typeof locations[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-background rounded-lg shadow-sm p-6 text-center border-2 border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
      <h3 className="font-heading text-sm font-bold text-primary mb-2 uppercase">{loc.name}</h3>
      <p className="text-xs text-muted-foreground font-body mb-2">{loc.address}</p>
      <a href={`tel:${loc.phone}`} className="text-primary font-body font-bold text-sm hover:underline">{loc.phone}</a>
      <div className={`overflow-hidden transition-all duration-300 ${hovered ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
        <ul className="text-left text-xs text-muted-foreground font-body space-y-1 list-disc list-inside">
          {loc.hours.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    if (window.location.hash === "#home-contact-us") {
      setTimeout(() => {
        document.getElementById("home-contact-us")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <Layout>
      <HeroSection />
      <WellAdjustedExperience />
      <TestimonialsSection />
      <TeamSection />
      <AwardsSection />
      <FAQSection />
      <CTASection />
      <PatientReviews />
      <BlogSection />

      {/* Logo + Location Cards */}
      <section className="bg-background py-12">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img
              src="/images-wp/header-logo.svg"
              alt="Well Adjusted Chiropractic"
              className="h-16"
            />
          </div>
          <div className="bg-muted rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {locations.slice(0, 3).map((loc) => (
                <LocationCard key={loc.name} loc={loc} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
              {locations.slice(3, 5).map((loc) => (
                <LocationCard key={loc.name} loc={loc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Out More Information Form */}
      <section id="home-contact-us" className="bg-muted py-12 scroll-mt-24">
        <div className="max-w-[1340px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary text-center mb-2 uppercase">
            Find Out More Information on{" "}
            <span className="block text-primary">WELL ADJUSTED CHIROPRACTIC</span>
          </h2>
          <div className="max-w-[800px] mx-auto mt-6 bg-background rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://link.ngynai.com/widget/form/6zrGCjjaRagxIx8eWnOs"
              style={{ width: "100%", height: "750px", border: "none" }}
              title="Contact Form"
              scrolling="auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
