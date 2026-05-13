import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Phone } from "lucide-react";

const locations = [
  { name: "WELL ADJUSTED CHIROPRACTIC - ARLINGTON TX", addr: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "WELL ADJUSTED CHIROPRACTIC - LOVELAND CO", addr: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "WELL ADJUSTED CHIROPRACTIC - FORT COLLINS CO", addr: "2627 Redwing Rd #110 Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "WELL ADJUSTED CHIROPRACTIC - GREELEY CO", addr: "2939 W 29th St Greeley, CO 80631", phone: "(970) 888-7097" },
  { name: "WELL ADJUSTED CHIROPRACTIC - ERIE CO", addr: "2770 Arapahoe Rd Suite 108 Erie, CO 80516", phone: "970-670-3607" },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    const id = "privacy-form-embed-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.src = "https://link.ngynai.com/js/form_embed.js";
    s.id = id;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <Layout>
      {/* Page title banner */}
      <section className="bg-muted py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary uppercase tracking-wider">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Policy content */}
      <section className="py-16 bg-background">
        <div className="max-w-[900px] mx-auto px-4 font-body text-foreground space-y-6">
          <h2 className="font-heading text-2xl md:text-3xl text-secondary">Website Privacy Policy</h2>
          <p>
            Well Adjusted Chiropractic LLC, doing business as Well-Adjusted Chiropractic ("Well-Adjusted Chiropractic"),
            operates the website staywelladjusted.com (also referred to as "Well Adjusted" or "the Site").
          </p>
          <p>
            <strong>Website:</strong> staywelladjusted.com<br />
            <strong>Privacy Officer Contact:</strong>{" "}
            <a href="#privacy-request-form" className="text-primary underline hover:opacity-80">
              Submit a secure privacy request below
            </a>
          </p>
          <p><strong>Effective Date:</strong> April 2, 2025</p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Introduction</h3>
          <p>
            This Privacy Policy describes how Well Adjusted Chiropractic LLC, doing business as Well-Adjusted
            Chiropractic ("we," "us," or "our"), collects, uses, and protects your information when you visit
            staywelladjusted.com. We are committed to ensuring that your privacy is protected.
          </p>
          <p>
            By using our website, you agree to the terms of this Privacy Policy. We may update this policy from time to
            time by updating this page. You should review this page periodically to ensure that you agree with any
            changes.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Contact information, including phone number and email address</li>
            <li>Demographic information such as postal code, preferences, and interests</li>
            <li>Other information relevant to surveys, forms, or offers</li>
          </ul>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">How We Use Your Information</h3>
          <p>We collect your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve our services</li>
            <li>Maintain internal record-keeping</li>
            <li>Send promotional communications about services, products, health-related information, and special offers, if you have consented or if you have an existing relationship with us</li>
            <li>Contact you for market research purposes</li>
            <li>Customize the website based on your interests</li>
          </ul>
          <p>
            You may opt out of receiving marketing communications at any time by following the unsubscribe instructions
            included in the communications or by contacting us.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Text Messaging and A2P Compliance</h3>
          <p>If you opt in to receive SMS communications from us:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Message frequency may vary.</li>
            <li>Message and data rates may apply.</li>
            <li>You can reply STOP at any time to unsubscribe.</li>
            <li>You can reply HELP for assistance.</li>
          </ul>
          <p><strong>Mobile Information Use:</strong></p>
          <p>
            No mobile information will be shared with third parties/affiliates for marketing or promotional purposes.
            Information sharing to subcontractors in support services, such as customer service, is permitted. All other
            use case categories exclude text messaging originator opt-in data and consent; this information will not be
            shared with any third parties.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Data Security</h3>
          <p>
            We are committed to ensuring that your information is secure. We have implemented appropriate physical,
            electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Cookies</h3>
          <p>Our website uses cookies to enhance user experience:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cookies are small files placed on your device to help analyze web traffic or recognize you when you visit a site.</li>
            <li>We use traffic log cookies to identify which pages are being used. This helps us improve our website.</li>
            <li>You can choose to accept or decline cookies through your browser settings. Declining cookies may limit your ability to use the full functionality of the website.</li>
          </ul>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Links to Other Websites</h3>
          <p>
            Our website may contain links to third-party websites. Once you leave our site, we are not responsible for
            the protection and privacy of any information you provide on those external sites. Please review their
            privacy policies separately.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Controlling Your Personal Information</h3>
          <p>
            You may choose to restrict the collection or use of your personal information by submitting a request through
            our secure{" "}
            <a href="#privacy-request-form" className="text-primary underline hover:opacity-80">
              Privacy Request Form
            </a>{" "}
            below.
          </p>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us through the form.</p>
          <p>
            We do not sell, distribute, or lease your personal information to third parties unless required by law or as
            otherwise described in this Privacy Policy.
          </p>

          <h3 className="font-heading text-xl md:text-2xl text-secondary pt-4">Contact Information</h3>
          <p>If you have questions about this Privacy Policy or your personal information, please contact us:</p>
          <p>
            <strong>Privacy Officer</strong><br />
            For all privacy-related questions, requests, or concerns, please use our secure{" "}
            <a href="#privacy-request-form" className="text-primary underline hover:opacity-80">
              Privacy Request Form
            </a>{" "}
            below.<br />
            <strong>Phone:</strong> (970) 427-2543
          </p>
          <p>By continuing to use our site, you agree to the terms outlined in this Privacy Policy.</p>
        </div>
      </section>

      {/* Privacy Request Form */}
      <section id="privacy-request-form" className="py-16 bg-muted">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Privacy Request Form
            </h2>
            <p className="font-body text-muted-foreground max-w-[700px] mx-auto">
              For your security, please submit any privacy-related request — such as accessing, correcting, or deleting
              your personal information — using the secure form below. All submissions are routed directly to our Privacy
              Officer.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-sm p-2 md:p-4">
            <iframe
              src="https://link.ngynai.com/widget/form/exOEUpt3bhiydNu1Xbxz"
              style={{ width: "100%", height: "650px", border: "none", borderRadius: "4px" }}
              id="inline-exOEUpt3bhiydNu1Xbxz"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              title="Privacy Request Form"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground text-center">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Ready to find out more?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/special"
              className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              New Patient Special Offer
            </Link>
            <Link
              to="/contact-us"
              className="bg-background text-secondary px-8 py-3 rounded font-body font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Locations + Map */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-sm h-[500px]">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&ll=36.705912089674364%2C-101.1439669&z=6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Well Adjusted Chiropractic Locations"
            />
          </div>
          <div className="space-y-5">
            {locations.map((loc) => (
              <div key={loc.name} className="border-b border-border pb-4">
                <h4 className="font-heading text-base font-bold text-secondary mb-1">{loc.name}</h4>
                <p className="font-body text-sm text-foreground">{loc.addr}</p>
                <a
                  href={`tel:${loc.phone}`}
                  className="inline-flex items-center gap-2 mt-1 font-body text-sm text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" /> {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
