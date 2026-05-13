const awards = [
  { src: "/images-wp/award-unnamed.png", alt: "Award" },
  { src: "/images-wp/award-slider-1.svg", alt: "Award logo" },
  { src: "/images-wp/award-bos-2022.png", alt: "Best of 2022" },
  { src: "/images-wp/award-slider.svg", alt: "Award logo" },
  { src: "/images-wp/award-bos-2024.png", alt: "Best of 2024" },
  { src: "/images-wp/header-logo.svg", alt: "Well Adjusted Logo" },
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
