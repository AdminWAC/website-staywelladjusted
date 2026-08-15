import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Wrench, Mail, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center bg-background py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Wrench className="w-10 h-10 text-primary" />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            This Page Is Being Updated
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Sorry for the inconvenience — our team is working to get this page live as soon as possible.
          </p>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold text-secondary mb-1">
                  Need this page live urgently?
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-2">
                  Please contact the webmaster to prioritize this:
                </p>
                <a
                  href="mailto:francio@staywelladjusted.com"
                  className="font-body text-base font-semibold text-primary hover:underline break-all"
                >
                  francio@staywelladjusted.com
                </a>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Click here to continue navigating across our website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
