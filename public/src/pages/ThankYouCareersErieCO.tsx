import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, Phone, MapPin, Clock } from "lucide-react";

const ThankYouCareersErieCO = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-light-gold/40 to-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Thank You for Applying!
          </h1>
          <p className="font-heading text-xl md:text-2xl text-primary mb-6">
            Chiropractic Assistant — Erie, CO
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-8">
            We've received your application for the Front Desk / Chiropractic Assistant position at our
            Erie, CO clinic. Thank you for your interest in joining the Well Adjusted Chiropractic family —
            a team that's changing lives every day.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-light-gold/50 border border-primary/20 rounded-lg p-8 mb-10">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-6 text-center">
              What Happens Next
            </h2>
            <ol className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">1</span>
                <div>
                  <h3 className="font-heading font-bold text-secondary mb-1">Application Review</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Our hiring team will carefully review your application within the next 5–7 business days.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">2</span>
                <div>
                  <h3 className="font-heading font-bold text-secondary mb-1">Initial Interview</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    If your background is a strong match, we'll reach out by phone or email to schedule a brief introductory conversation.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">3</span>
                <div>
                  <h3 className="font-heading font-bold text-secondary mb-1">In-Person Meeting</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Selected candidates will be invited to visit our Erie clinic to meet the team and experience our culture firsthand.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 mb-10">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-6 text-center">
              Questions? Get in Touch
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-secondary text-sm">Erie, CO Clinic</h3>
                  <p className="text-sm text-muted-foreground font-body">680 Mitchell Way Unit 160, Erie, CO 80516</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-secondary text-sm">Phone</h3>
                  <a href="tel:9706703607" className="text-sm text-muted-foreground font-body hover:text-primary">970-670-3607</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-secondary text-sm">Email</h3>
                  <a href="mailto:admin@staywelladjusted.com" className="text-sm text-muted-foreground font-body hover:text-primary break-all">admin@staywelladjusted.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-secondary text-sm">Response Time</h3>
                  <p className="text-sm text-muted-foreground font-body">Within 5–7 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground font-body mb-6">
              In the meantime, feel free to learn more about our team and the work we do.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-body font-semibold hover:bg-primary/90 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                to="/meet-the-team"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYouCareersErieCO;
