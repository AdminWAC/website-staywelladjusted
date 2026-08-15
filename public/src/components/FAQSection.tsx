import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can chiropractic adjustments really improve my overall health and wellness?",
    answer: "Chiropractic adjustments at Well-Adjusted Chiropractic help align your spine and improve nervous system function. Since your nervous system controls every function in your body, a properly aligned spine can naturally boost your overall health and wellness. If you're looking for a chiropractor in Loveland, Fort Collins, Greeley, or Erie, CO, or in Arlington, TX, our chiropractic care empowers your body to heal itself and perform at its best.",
  },
  {
    question: "How does chiropractic care at Well Adjusted Chiropractic help with more than just back and neck pain?",
    answer: "While many people initially seek chiropractic care for back or neck pain, the benefits of working with a skilled chiropractor extend far beyond pain relief. At Well-Adjusted Chiropractic, serving patients across Northern Colorado and Arlington, TX, we focus on optimizing your nervous system by improving spinal alignment. Our natural chiropractic approach can lead to better sleep, higher energy levels, reduced stress, and a stronger immune system.",
  },
  {
    question: "Is chiropractic care safe for families, including babies and seniors, at Well Adjusted?",
    answer: "Chiropractic care at Well-Adjusted Chiropractic is safe, gentle, and highly effective for patients of all ages. We specialize in family chiropractic services, helping everyone from newborns just a few days old to seniors in their 90s achieve optimal health. Serving families across Loveland, Fort Collins, Greeley, Erie, and Arlington, our personalized care plans are designed to meet each patient's unique needs.",
  },
  {
    question: "Can regular chiropractic adjustments help me even if I'm not experiencing pain?",
    answer: "Pain is often the last symptom of deeper health issues. At Well-Adjusted Chiropractic, we focus on preventing problems before they start by correcting spinal misalignments early. Many patients across Loveland, Fort Collins, Greeley, Erie, and Arlington choose regular chiropractic care to maintain optimal health, prevent injuries, and boost their overall wellness.",
  },
  {
    question: "What makes chiropractic care at Well Adjusted the solution for a healthier, happier life?",
    answer: "At Well-Adjusted Chiropractic, we help patients across Northern Colorado and Arlington, TX transform their lives through chiropractic care. Our holistic approach focuses on correcting the root causes of dysfunction, helping you heal naturally and achieve lasting wellness.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-secondary text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-body font-semibold text-sm md:text-base text-foreground">
                  <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="/faq"
            className="text-primary font-body font-semibold text-sm hover:underline"
          >
            SHOW MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
