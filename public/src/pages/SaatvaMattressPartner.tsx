import { useState } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Check, Moon, Star, RotateCcw } from "lucide-react";
import saatva1 from "@/assets/saatva-1.png";
import saatva2 from "@/assets/saatva-2.png";
import saatva3 from "@/assets/saatva-3.png";
import saatva4 from "@/assets/saatva-4.png";

const SAATVA_URL = "https://www.saatva.com/?wellajudstedchiropractic-organic-user-discount-refferal";

const showroomImages = [
  { src: saatva1, label: "Most Popular" },
  { src: saatva2, label: "Organic Comfort" },
  { src: saatva3, label: "Memory Foam Topper" },
  { src: saatva4, label: "Luxury Hybrid" },
];

const reviews = [
  { title: "Exceptional mattress", text: "This is my fourth Saatva mattress, and I can't imagine sleeping on anything else. The mattress is comfy, supportive, and cozy. I would definitely recommend Saatva to anyone looking for an excellent night's sleep.", name: "Erin T.", product: "Saatva Classic", date: "04/25/26" },
  { title: "Saatva RX Mattress-very pleased", text: "Since getting our new Saatva RX mattress, I have slept soundly for eight hours during five of the last seven nights. This is a breakthrough! I have had much difficulty getting a full night sleep with the old mattress. I suffer from lower back pain.", name: "Paul M.", product: "Saatva Rx", date: "04/25/26" },
  { title: "WOW!", text: "I was very hesitant at first, but with the return policy I was comfortable with giving it a try. I sleep effortlessly, but most of all pain free! No more tossing and turning and waking up in discomfort. HIGHLY recommended.", name: "Paul", product: "Graphite Memory Foam Topper", date: "04/19/26" },
  { title: "Otherworldly comfort", text: "I don't know how they did it but this pillow is unimaginably comfortable. I was expecting comfortable but i wasn't expecting complete and comprehensive support of my neck and head. Once your head hits it, it won't move again.", name: "Charles", product: "Saatva Latex Pillow", date: "04/16/26" },
  { title: "Beautiful luxury", text: "Modern design. High quality materials and craftsmanship. The storage is an exciting bonus. No other storage bed we looked at had this much space. Locking hydraulic struts make it extra safe when retrieving things.", name: "Athena W.", product: "Lyon Storage Bed", date: "04/16/26" },
  { title: "Good quality...I would highly recommend", text: "I received delivery of my nightstands today. They are good quality and classy looking. Made with engineered wood. When viewing, I can't tell the difference between real and engineered wood. This has been my 2nd purchase from Saatva.", name: "Mike P.", product: "Madeleine Nightstand", date: "04/02/26" },
  { title: "Love my Saatva mattress", text: "Love this mattress. Very comfy. It is my second Saatva mattress and I highly recommend it.", name: "Janet H.", product: "Saatva Classic", date: "04/21/26" },
  { title: "So far zzzzzzzzz", text: "The mattress is literally so comfortable that we don't want to get out of bed. Very little movement is felt from my spouse or vice versa. It beats our old memory foam all day!", name: "Biff S.", product: "Saatva Latex Hybrid", date: "04/02/26" },
  { title: "SO comfy", text: "We had a great experience in-store. The mattress is like sleeping on a cloud. We love it and would highly recommend it to others.", name: "Michelle", product: "Saatva Rx", date: "04/17/26" },
];

const sleepQuestions = [
  "Are you a side, back, or stomach sleeper? Or a combination of these?",
  "Does it take a long time to fall asleep?",
  "Has a spouse or partner shared with you having snoring episodes?",
  "Do you wake up with any back or neck pain? Aches in joints or previous injuries?",
  "Are there times you wake up with a headache? Frequent or Infrequent?",
  "Experience any times of nasal congestion when you first wake up? Or with a sore throat?",
  "Typically, how many hours before falling asleep is your last meal?",
  "Have you had any recent or prior weight loss or weight gain?",
  "Do you have any brain fog or forgetful moments throughout the day?",
  "How long has it been since you replaced your mattress?",
];

const satedQuestions = [
  { name: "Satisfaction", q: "Are you satisfied with your sleep?" },
  { name: "Alertness", q: "Do you stay awake all day without dozing?" },
  { name: "Timing", q: "Are you asleep (or trying to sleep) between 2am – 4am?" },
  { name: "Efficiency", q: "Do you spend less than 30 minutes awake at night?" },
  { name: "Duration", q: "Do you sleep between 6 and 8 hours per day?" },
];

const hygieneTips = [
  { t: "Establish a regular sleep schedule", d: "Go to bed and wake up at the same time every day, even on weekends." },
  { t: "Create a comfortable sleep environment", d: "Keep your bedroom cool, dark, and quiet. Invest in a quality mattress and pillows — we spend a third of our lives sleeping." },
  { t: "Limit substances", d: "Caffeine, alcohol, and nicotine can disrupt sleep and reduce its quality." },
  { t: "Manage stress", d: "Meditation, deep breathing, or progressive muscle relaxation help reduce stress and promote better sleep." },
  { t: "Engage in regular exercise", d: "Regular workouts improve sleep hygiene. Late-night exercise does not necessarily interfere with sleep." },
  { t: "Avoid bright lights & excess liquids at night", d: "Reduce screen exposure and liquid intake in the evening for deeper, uninterrupted rest." },
];

const checklist = [
  "Get up at the same time each day, 7 days a week.",
  "Allow yourself enough time to sleep at least 7 to 9 consecutive hours.",
  "Only use the bed for sleep and sexual activity.",
  "Get out of bed soon after waking up.",
  "Get exposure to bright light — sunshine is best.",
  "Exercise regularly to improve sleep and mood.",
  "Avoid caffeine & stimulants late in the day (after noon).",
  "Unplug an hour before bed — keep screen use to a minimum.",
  "Keep your bedroom at a comfortable temperature during the night.",
  "Avoid excessive liquids in the evening.",
  "Get up & try again if you can't sleep after 20 minutes — do something calming until sleepy.",
];

const SAATVA_QUIZ_URL = SAATVA_URL;

const getResult = (score: number) => {
  if (score <= 3) {
    return {
      label: "Poor Sleep Health",
      color: "text-destructive",
      message:
        "Your sleep quality needs serious attention. A premium, supportive mattress is one of the highest-impact upgrades you can make. Saatva's chiropractor-recommended designs help restore proper spinal alignment and deeper rest.",
      cta: "Find Your Saatva Mattress",
    };
  }
  if (score <= 7) {
    return {
      label: "Average Sleep Health",
      color: "text-primary",
      message:
        "There is real room to upgrade your sleep. The right mattress paired with consistent sleep hygiene can transform your recovery, energy, and posture. Explore Saatva with our exclusive patient discount.",
      cta: "Explore Saatva With Our Discount",
    };
  }
  return {
    label: "Good Sleep Health",
    color: "text-secondary",
    message:
      "Excellent — your sleep foundation is strong. Keep it that way with a mattress engineered for long-term spinal support. Saatva's hybrid and organic builds are designed to protect the sleep you've worked hard for.",
    cta: "Protect Your Sleep With Saatva",
  };
};

const SatedQuiz = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(satedQuestions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const result = getResult(score);

  const setAnswer = (qIdx: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = value;
      return next;
    });
  };

  const reset = () => {
    setAnswers(Array(satedQuestions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div>
      <div className="bg-background rounded-lg overflow-hidden border border-primary/20">
        <div className="grid grid-cols-12 bg-secondary text-primary-foreground font-heading text-xs uppercase tracking-wider">
          <div className="col-span-6 p-4">Question</div>
          <div className="col-span-2 p-4 text-center">Rarely / Never (0)</div>
          <div className="col-span-2 p-4 text-center">Sometimes (1)</div>
          <div className="col-span-2 p-4 text-center">Always (2)</div>
        </div>
        {satedQuestions.map((s, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 ${i % 2 === 0 ? "bg-background" : "bg-[#fdf6ee]"}`}
          >
            <div className="col-span-6 p-4">
              <p className="font-heading text-primary font-bold text-sm">{s.name}</p>
              <p className="font-body text-sm text-muted-foreground">{s.q}</p>
            </div>
            {[0, 1, 2].map((val) => {
              const selected = answers[i] === val;
              return (
                <div key={val} className="col-span-2 p-4 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setAnswer(i, val)}
                    aria-label={`${s.name}: score ${val}`}
                    aria-pressed={selected}
                    className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center transition-all ${
                      selected
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-primary hover:bg-primary/15"
                    }`}
                  >
                    {selected && <Check className="w-4 h-4" strokeWidth={3} />}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
        <div className="bg-primary text-primary-foreground p-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-heading uppercase tracking-wider text-sm">
            Your Score:&nbsp;
            <span className="text-lg">{score}</span>
            <span className="opacity-80">/10</span>
          </span>
          <div className="flex items-center gap-3">
            {submitted && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-body font-semibold border border-primary-foreground/60 px-4 py-2 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="inline-flex items-center gap-2 bg-background text-primary px-5 py-2 rounded-full font-body font-semibold text-xs uppercase tracking-wider hover:bg-background/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See My Result
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="mt-6 bg-background border border-primary/30 rounded-lg p-8 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Your Result
          </p>
          <p className={`font-heading text-3xl md:text-4xl font-bold mb-3 ${result.color}`}>
            {score}/10 — {result.label}
          </p>
          <p className="font-body text-muted-foreground max-w-[640px] mx-auto mb-6 leading-relaxed">
            {result.message}
          </p>
          <a
            href={SAATVA_QUIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            {result.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  );
};

const SaatvaMattressPartner = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-[#fdf6ee] py-20">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Exclusive Partnership</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary uppercase tracking-wider mb-6">
            Well Adjusted Chiropractic <span className="block text-primary">× Saatva Mattress</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-[760px] mx-auto mb-8">
            Better spinal health begins with better sleep. Through our exclusive partnership with Saatva, our patients gain access to a special discount on premium, chiropractor-recommended mattresses designed to support spinal alignment and restorative rest.
          </p>
          <a
            href={SAATVA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Claim Your Saatva Discount
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* WHY SLEEP MATTERS */}
      <section className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-12">
            <Moon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider mb-4">
              Why Is Sleep Health Important?
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-[820px] mx-auto">
              Humans spend one-third of their life sleeping. Sleep is the daily maintenance job that keeps us healthy, wealthy, and full of life. Here are a few questions that can help us provide you better sleep health:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
            {sleepQuestions.map((q, i) => (
              <div key={i} className="flex gap-3 items-start bg-[#fdf6ee] p-4 rounded-lg">
                <span className="font-heading text-primary font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-sm text-secondary">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM AUTOSCROLL */}
      <section className="py-20 bg-[#fdf6ee] overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-4 mb-10 text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Saatva Showroom</p>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider mb-4">
            Premium Comfort, Crafted For Spinal Health
          </h2>
          <p className="font-body text-muted-foreground max-w-[760px] mx-auto">
            Explore some of Saatva's most loved mattresses, toppers and bedroom pieces — all eligible under our exclusive partnership discount.
          </p>
        </div>
        <div className="marquee-pause relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fdf6ee] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fdf6ee] to-transparent z-10" />
          <div className="flex w-max animate-marquee-medium gap-6">
            {[...showroomImages, ...showroomImages, ...showroomImages].map((img, i) => (
              <div
                key={i}
                className="relative w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-lg border border-primary/20 flex-shrink-0"
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur px-4 py-1.5 rounded-full">
                  <span className="font-heading text-xs uppercase tracking-wider text-secondary font-bold">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={SAATVA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Shop The Full Saatva Showroom
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* SATED QUESTIONNAIRE */}
      <section className="py-20 bg-[#fdf6ee]">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider text-center mb-4">
            SATED — Measure Your Sleep Health
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-[760px] mx-auto mb-10">
            A simple questionnaire developed by sleep researchers. Score each: <strong>Rarely/Never (0)</strong>, <strong>Sometimes (1)</strong>, <strong>Always (2)</strong>. A score of 0 indicates poor sleep health, while 10 indicates good sleep health.
          </p>
          <SatedQuiz />

          <p className="text-xs text-muted-foreground text-center mt-4 italic">
            Source: Buysse DJ. Sleep health: can we define it? Does it matter? Sleep. 2014.
          </p>
        </div>
      </section>

      {/* GOOD SLEEP HYGIENE */}
      <section className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider mb-4">
              What Is Good Sleep Hygiene?
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-[820px] mx-auto">
              Sleep hygiene is a set of practices, habits, and strategies that promote good quality sleep and prevent sleep problems. Here are the most effective:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hygieneTips.map((tip, i) => (
              <div key={i} className="bg-[#fdf6ee] p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading text-primary font-bold uppercase text-base mb-2">{tip.t}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS QUOTE */}
      <section className="py-20 bg-secondary">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground uppercase tracking-wider mb-6">
            Why Does Sleep Hygiene Matter?
          </h2>
          <p className="font-body text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-4">
            Sleep hygiene isn't really just about sleep. Getting good sleep is one of the most important things we can do to promote our mental and physical health. If you are getting insufficient sleep, even the best therapies and strategies struggle to take effect.
          </p>
          <p className="font-heading italic text-primary text-lg">
            "Good sleep and exercise are fundamental to your health and mental well-being."
          </p>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-20 bg-[#fdf6ee]">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider text-center mb-10">
            Sleep Hygiene Checklist
          </h2>
          <div className="bg-background rounded-lg p-8 border border-primary/20">
            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-body text-sm text-secondary leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SAATVA PARTNERSHIP CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">The Right Mattress Matters</p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider mb-6">
                Why We Recommend Saatva
              </h2>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                Saatva mattresses are crafted with premium, eco-friendly materials and engineered to deliver the proper lumbar support your spine needs every night. Their luxury hybrid construction promotes healthy alignment, reduces pressure points, and enhances the results of your chiropractic care.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Doctor-recommended for spinal alignment",
                  "Premium organic and eco-friendly materials",
                  "Free white-glove delivery & setup",
                  "Exclusive discount for Well Adjusted patients",
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-secondary">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SAATVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Shop Saatva With Our Discount
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-[#fdf6ee] rounded-2xl p-10 border border-primary/20">
              <div className="text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Patient-Only Offer</p>
                <p className="font-heading text-5xl md:text-6xl text-primary font-bold mb-2">Exclusive</p>
                <p className="font-heading text-xl text-secondary uppercase tracking-wider mb-6">Saatva Discount</p>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Use our partnership link at checkout — your discount is automatically applied as a Well Adjusted Chiropractic referral.
                </p>
                <a
                  href={SAATVA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-body font-semibold text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Visit Saatva.com
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS AUTOSCROLL */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-4 mb-10 text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Verified Reviews</p>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary uppercase tracking-wider mb-4">
            What Saatva Sleepers Are Saying
          </h2>
        </div>
        <div className="marquee-pause relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee-slow gap-6">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className="w-[380px] flex-shrink-0 bg-[#fdf6ee] border border-primary/20 rounded-xl p-6 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-heading text-lg text-secondary font-bold mb-3">{r.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{r.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/15">
                  <div className="w-10 h-10 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-semibold text-secondary truncate">{r.name}</p>
                    <p className="font-body text-[11px] text-primary uppercase tracking-wider">Verified Reviewer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-secondary truncate max-w-[120px]">{r.product}</p>
                    <p className="font-body text-[11px] text-muted-foreground">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <p className="text-primary-foreground font-body text-lg mb-2">Ready for restorative sleep?</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground uppercase tracking-wider mb-8">
            Start Sleeping Well Adjusted
          </h2>
          <a
            href={SAATVA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-secondary transition-colors"
          >
            Claim Your Saatva Discount
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default SaatvaMattressPartner;
