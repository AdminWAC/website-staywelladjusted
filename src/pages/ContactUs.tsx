import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { MapPin, Phone } from "lucide-react";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 238-0625", id: "arlington" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 669-7620", id: "loveland" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 353-0337", id: "greeley" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 493-0611", id: "fortcollins" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "303-323-9931", id: "erie" },
];

const ContactUs = () => {
  return (
    <Layout>
      {/* CTA Banner */}
      <CTASection />

      {/* Map and locations */}
      <section className="py-12 bg-background">
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1bZQz8kBXmzL_6rB_vJqKQz3bZ-E&ehbc=2E312F"
                className="w-full h-full border-0"
                title="Well Adjusted Chiropractic Locations"
                allowFullScreen
              />
            </div>

            {/* Locations list */}
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.id} id={loc.id} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-base text-primary font-bold">{loc.name}</h3>
                    <p className="text-sm text-muted-foreground font-body">{loc.address}</p>
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-1 text-primary font-body font-semibold text-sm hover:underline mt-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
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

export default ContactUs;
