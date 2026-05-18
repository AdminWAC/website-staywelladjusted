import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const PALETTE = {
  gold: "#c9a96e",
  goldDark: "#b8985d",
  cream: "#f5ede0",
  textDark: "#3d3d3d",
};

const existingPatientLinks = [
  { label: "Arlington, TX", url: "https://clinic.patienthealthcenters.org/schedule?code=WELLAD22GSTX" },
  { label: "Greeley, CO", url: "https://clinic.patienthealthcenters.org/schedule?code=GATEWF22GSCO" },
  { label: "Loveland, CO", url: "https://clinic.patienthealthcenters.org/schedule?code=GATEWF22GSCO" },
  { label: "Fort Collins, CO", url: "https://clinic.patienthealthcenters.org/schedule?code=GATEWF22GSCO" },
  { label: "Erie, CO", url: "https://clinic.patienthealthcenters.org/schedule?code=WELLAD25GSCO" },
];

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "+1 682-277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "+1 970-427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "+1 970-888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "+1 970-714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "+1 970-670-3607" },
];

const ScheduleAppointment = () => {
  const [showExisting, setShowExisting] = useState(false);

  return (
    <Layout>
      <section style={{ background: PALETTE.cream }} className="py-16 md:py-20 relative z-20">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="font-heading uppercase tracking-wide text-4xl md:text-5xl mb-2" style={{ color: PALETTE.gold }}>
            Schedule an Appointment
          </h1>
          <p className="font-body text-sm md:text-base uppercase tracking-wider mb-10" style={{ color: PALETTE.gold }}>
            Online today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <Link
              to="/special"
              className="text-white font-body font-semibold text-sm uppercase tracking-wider py-5 px-6 rounded-md transition-opacity hover:opacity-90 flex items-center justify-center"
              style={{ background: PALETTE.gold }}
            >
              New patients to the office click here!
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowExisting((v) => !v)}
                className="w-full text-white font-body font-semibold text-sm uppercase tracking-wider py-5 px-6 rounded-md transition-opacity hover:opacity-90"
                style={{ background: PALETTE.gold }}
              >
                Existing patients click here!
              </button>
              {showExisting && (
                <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  {existingPatientLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 font-body text-sm border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                      style={{ color: PALETTE.textDark }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md min-h-[500px]">
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
            <div className="rounded-lg p-5 space-y-3" style={{ background: "#e6edf5" }}>
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white rounded-md p-4 flex gap-3 items-start shadow-sm">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: PALETTE.gold }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1" style={{ color: PALETTE.textDark }}>{loc.name}</h3>
                    <p className="text-xs font-body text-muted-foreground">{loc.address}</p>
                    <p className="text-xs font-body font-semibold" style={{ color: PALETTE.gold }}>{loc.phone}</p>
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

export default ScheduleAppointment;
