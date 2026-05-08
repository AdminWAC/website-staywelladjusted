const awards = [
  { src: "https://staywelladjusted.com/wp-content/uploads/2025/03/unnamed__2_-removebg-preview-150x150.png", alt: "Award" },
  { src: "https://staywelladjusted.com/wp-content/uploads/2025/06/Header-Logo-for-slider-1.svg", alt: "Award logo" },
  { src: "https://staywelladjusted.com/wp-content/uploads/2025/03/00-BOS-WINNER-2022-6-150x150.png", alt: "Best of 2022" },
  { src: "https://staywelladjusted.com/wp-content/uploads/2025/06/Header-Logo-for-slider.svg", alt: "Award logo" },
  { src: "https://staywelladjusted.com/wp-content/uploads/2025/03/00-BOS-WINNER-2024-2-150x150.png", alt: "Best of 2024" },
  { src: "https://staywelladjusted.com/wp-content/uploads/2024/11/Header-Logo-1.svg", alt: "Well Adjusted Logo" },
];

const AwardsSection = () => {
  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl text-secondary text-center mb-8">
          Voted #1 Chiropractor in All of Northern Colorado
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-12">
            {[...awards, ...awards, ...awards].map((award, i) => (
              <img
                key={i}
                src={award.src}
                alt={award.alt}
                className="h-16 md:h-20 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
