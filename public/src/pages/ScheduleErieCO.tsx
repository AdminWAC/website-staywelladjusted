import { useEffect } from "react";
import Layout from "@/components/Layout";

const PALETTE = {
  gold: "#c9a96e",
  cream: "#f5ede0",
};

const ScheduleErieCO = () => {
  useEffect(() => {
    // Configure ChiroCat booking widget
    (window as any).cc_booking = {
      version: "2",
      container: "booking-frame",
      "cc-account": 11756,
      path: "https://embed.chirocat.app/well-adjusted-chiropractic/bookings/users?eventtype_id=16685",
    };

    // Inject ChiroCat embed script
    const script = document.createElement("script");
    script.src = "https://embed.chirocat.app/js/booking/v2/external.js";
    script.setAttribute("data-cc-account", "11756");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete (window as any).cc_booking;
    };
  }, []);

  return (
    <Layout>
      <section style={{ background: PALETTE.cream }} className="py-12 md:py-16 relative z-20">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h1
            className="font-heading uppercase tracking-wide text-3xl md:text-5xl mb-2"
            style={{ color: PALETTE.gold }}
          >
            Schedule an Appointment
          </h1>
          <p
            className="font-body text-sm md:text-base uppercase tracking-wider mb-2"
            style={{ color: PALETTE.gold }}
          >
            Existing Patients &mdash; Erie, CO
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 min-h-[700px]">
            <div id="booking-frame" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ScheduleErieCO;
