import { useEffect } from "react";
import Layout from "@/components/Layout";

const MassageTherapyScheduleErie = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://link.ngynai.com/js/form_embed.js";
    s.type = "text/javascript";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <Layout>
      <section className="py-12 bg-[#fdf6ee]">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary/30 text-center uppercase tracking-wider">
            Schedule Your Massage Therapy Session
          </h1>
          <p className="text-center font-body text-muted-foreground mt-4">
            Well Adjusted Chiropractic — Erie, CO
          </p>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-background rounded-lg overflow-hidden border border-primary/20">
            <iframe
              src="https://link.ngynai.com/widget/booking/5bAKXlbQJk2DkbV6xNIA"
              allow="payment"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: 900 }}
              scrolling="no"
              id="5bAKXlbQJk2DkbV6xNIA_1785242422723"
              title="Schedule Massage Therapy — Erie"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MassageTherapyScheduleErie;
