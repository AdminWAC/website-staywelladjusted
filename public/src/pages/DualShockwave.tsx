import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/dual-shockwave-1.webp";
import img2 from "@/assets/dual-shockwave-2.webp";

const carouselImages = [img1, img2];

const DualShockwave = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () => setCurrentSlide((p) => (p + 1) % carouselImages.length);
  const prev = () => setCurrentSlide((p) => (p - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    const i = setInterval(next, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <Layout>
      <section className="py-16 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary text-center uppercase tracking-wider mb-12">
            Dual Shockwave Across All Our Locations
          </h1>

          <div className="relative mb-10">
            <div className="aspect-[4/3] relative bg-background rounded overflow-hidden">
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                  <img src={img} alt={`Dual Shockwave equipment ${i + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <p className="text-muted-foreground font-body text-sm leading-relaxed text-center max-w-[760px] mx-auto">
            Dual Shockwave is an advanced, non-invasive treatment designed to accelerate healing, reduce pain, and restore mobility — without drugs, needles, or surgery. Using powerful acoustic waves, Dual Shockwave stimulates your body's natural regenerative processes at the cellular level. Ideal for conditions like chronic joint pain, inflammation, or recovering from injury, Dual Shockwave offers fast, lasting relief. It's a perfect complement to chiropractic care and enhances the results of spinal adjustments by supporting tissue repair and improved function. This breakthrough therapy is coming soon to Well Adjusted Chiropractic — bringing a whole new level of healing to our Colorado and Texas communities.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default DualShockwave;
