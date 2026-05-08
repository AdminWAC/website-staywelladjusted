import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/Mask-group-7.png",
    text: "I am so grateful I have found Well Adjusted Chiropractic, they are professional, knowledgeable and honest. Not like a typical chiropractor. We have used them to relieve headaches, for normal maintenance, for holistic approaches and for ADHD. Very happy!",
    rating: 5,
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/Mask-group-6.png",
    text: "We truly feel that part of any road to health and wellness starts with trust and relationships. The comfort and welcoming environment Well Adjusted Family Chiropractic creates is the halfway mark on that road. We feel better just being there because we know we're going to be well looked after.",
    rating: 5,
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/Mask-group-5.png",
    text: "While other professions are concerned with changing the environment to suit the weakened body, chiropractic is concerned with strengthening the body to suit the environment.",
    rating: 5,
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/image-64.png",
    text: "We have used them to relieve headaches, for normal maintenance, for holistic approaches and for ADHD. Very happy!",
    rating: 5,
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/Mask-group-6.png",
    text: "You may not control all the events that happen to you, but you can decide not to be reduced by them. If you cannot make a change, change the way you have been thinking. You might find a new solution.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-[1340px] mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-secondary text-center mb-2 uppercase">
          Testimonials
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-sm">
          Hear from our patients about their experience at Well Adjusted Chiropractic
        </p>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
            {getVisibleIndices().map((idx, i) => (
              <div
                key={idx}
                className={`transition-all duration-500 flex-shrink-0 w-[280px] md:w-[340px] bg-background rounded-lg p-6 shadow-sm ${
                  i === 1 ? "opacity-100 scale-100" : "opacity-50 scale-90 hidden md:block"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[idx].image}
                    alt="Testimonial"
                    className="w-32 h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  {Array.from({ length: testimonials[idx].rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-body text-center leading-relaxed">
                  {testimonials[idx].text}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
