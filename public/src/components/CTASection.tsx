import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <p className="text-primary-foreground font-body text-lg mb-2">Ready to find out more?</p>
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground uppercase tracking-wider mb-8">
          new patient special offer
        </h2>
        <Link
          to="/special"
          className="inline-flex items-center gap-3 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-secondary transition-colors"
        >
          REQUEST AN APPOINTMENT
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
