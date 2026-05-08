import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
              A Chiropractic Team You Can Trust
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/meet-the-team"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Meet the Team
              </Link>
              <Link
                to="/special"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                New Patient Special
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://staywelladjusted.com/wp-content/uploads/2024/11/Mask-group-11.png"
              alt="Well Adjusted Chiropractic Team"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
