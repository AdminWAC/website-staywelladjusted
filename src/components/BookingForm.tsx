import { Link } from "react-router-dom";

interface BookingFormProps {
  variant?: "hero" | "standalone";
}

const BookingForm = ({ variant = "hero" }: BookingFormProps) => {
  const isHero = variant === "hero";

  return (
    <div className={`${isHero ? "bg-background/90 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-[540px]" : "bg-muted rounded-lg p-6 md:p-8"}`}>
      <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold text-center mb-6">
        $79 New Patient Special
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-body font-medium text-foreground mb-1">Full Name *</label>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 border border-border rounded text-sm font-body" />
          </div>
          <div>
            <label className="block text-sm font-body font-medium text-foreground mb-1">Phone *</label>
            <input type="tel" placeholder="Phone" className="w-full px-4 py-2.5 border border-border rounded text-sm font-body" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-foreground mb-1">Email *</label>
          <input type="email" placeholder="Email" className="w-full px-4 py-2.5 border border-border rounded text-sm font-body" />
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-foreground mb-1">How Can We Help? *</label>
          <textarea placeholder="How Can We Help?" rows={2} className="w-full px-4 py-2.5 border border-border rounded text-sm font-body" />
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-foreground mb-2">Which location are you inquiring about? *</label>
          <div className="grid grid-cols-2 gap-2">
            {["Arlington, TX", "Loveland, CO", "Fort Collins, CO", "Greeley, CO", "Erie, CO"].map((loc) => (
              <label key={loc} className="flex items-center gap-2 text-sm font-body text-foreground">
                <input type="radio" name="location" value={loc} className="accent-primary" />
                {loc}
              </label>
            ))}
          </div>
        </div>
        <label className="flex items-start gap-2 text-xs font-body text-muted-foreground">
          <input type="checkbox" className="mt-1 accent-primary" />
          By submitting this form, I consent to receive SMS and email communications from Well-Adjusted Chiropractic (Stay Well Adjusted). Message frequency may vary. Message & data rates may apply. Reply STOP to unsubscribe or HELP for help.
        </label>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded font-body font-semibold hover:opacity-90 transition-opacity">
          Submit
        </button>
        <div className="text-center">
          <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:underline">Privacy Policy</Link>
          <span className="text-xs text-muted-foreground mx-1">|</span>
          <Link to="/terms-service" className="text-xs text-muted-foreground hover:underline">Terms of Service</Link>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
