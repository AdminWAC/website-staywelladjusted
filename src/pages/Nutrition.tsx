import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, FlaskConical, Leaf, MapPin, Pause, Phone, Play, ShieldCheck, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import photo1 from "@/assets/nutrition/nutrition-services-1.jpeg";
import photo2 from "@/assets/nutrition/nutrition-services-2.jpeg";
import photo3 from "@/assets/nutrition/nutrition-services-3.jpeg";
import photo4 from "@/assets/nutrition/nutrition-services-4.jpeg";
import photo5 from "@/assets/nutrition/nutrition-services-5.jpeg";

const photos = [
  { src: photo1, alt: "Well Adjusted Nutrition SereniZen supplement" },
  { src: photo2, alt: "Well Adjusted Nutrition Power Cell capsules" },
  { src: photo3, alt: "Well Adjusted Nutrition Vital Joint capsules at the office" },
  { src: photo4, alt: "Vital Joint and Vital Immune supplements on the office shelves" },
  { src: photo5, alt: "Well Adjusted Nutrition ImmuneAid and Vital Immune supplements" },
];

const locations = [
  { city: "ARLINGTON TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { city: "LOVELAND CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { city: "GREELEY CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { city: "FORT COLLINS CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { city: "ERIE CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(970) 670-3607" },
];

const wholeFood = [
  { title: "Farm-to-Supplement Quality", text: "Grown on their certified organic farm, Standard Process ensures that every ingredient is rich in naturally occurring vitamins and minerals." },
  { title: "Cold Processing for Maximum Potency", text: "Unlike most manufacturers that use high-heat methods, Standard Process uses low-temperature processing to preserve enzymes, cofactors, and the full nutrient profile of whole foods." },
  { title: "Designed for Long-Term Health", text: "These are not quick-fix supplements. Standard Process supports gut health, immune function, inflammation balance, and full-body healing at a foundational level." },
];
const clinical = [
  { title: "Pharmaceutical-Grade Manufacturing :", text: "Every product is manufactured under strict quality control standards, ensuring potency, purity, and consistency in every dose." },
  { title: "Backed by Clinical Research :", text: "Ortho Molecular invests heavily in scientific validation, meaning their products are formulated based on real patient outcomes, not trends." },
  { title: "Highly Absorbable Nutrients :", text: "Many supplements pass right through the body without being absorbed. Ortho Molecular's formulas use bioavailable forms of vitamins, minerals, and herbal compounds for maximum effectiveness." },
];
const reasons = [
  { title: "Soil depletion has stripped essential minerals from our food supply", text: "Even organic vegetables lack the nutrient density they once had." },
  { title: "Processed foods and environmental toxins", text: "It has increased the body's demand for vitamins and antioxidants." },
  { title: "Chronic stress and lifestyle factors", text: "Deplete critical nutrients, making supplementation essential for optimal function." },
];
const oils = [
  { title: "Unmatched Purity", icon: Leaf, text: "Unlike many essential oils that contain synthetic additives, pesticides, or diluted compounds, doTERRA's Certified Pure Therapeutic Grade (CPTG) process ensures every oil is 100% pure and free from contaminants." },
  { title: "Sourced Where Plants Thrive", icon: FlaskConical, text: "doTERRA works directly with farmers worldwide, sourcing plants from their ideal native environments to ensure the highest medicinal value in each oil." },
  { title: "Third-Party Testing & Transparency", icon: Sparkles, text: "Every batch of doTERRA oil undergoes rigorous third-party testing to guarantee potency, purity, and consistency. The results are publicly available, proving the quality behind every bottle." },
  { title: "Powerful Health Benefits", icon: ShieldCheck, text: "Essential oils can provide natural support for stress, immune function, sleep, digestion, inflammation, respiratory health, and more. Whether diffused, applied topically, or taken internally, doTERRA's oils deliver real therapeutic results." },
];
const testing = [
  "Ensures that the supplements you take are the right fit for your body",
  "Identifies nutritional deficiencies and imbalances",
  "Helps eliminate guesswork by testing your body's response to specific products",
];
const contentWidth = "max-w-[1100px] mx-auto px-4 md:px-6";
const heading = "font-body font-bold text-primary";
const tel = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, "")}`;

function ContactButton() {
  return <Button asChild className="rounded-full uppercase font-semibold h-12 px-6"><Link to="/#home-contact-us">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>;
}

export default function Nutrition() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || media.matches) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % photos.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Nutrition Services | Well Adjusted Chiropractic";
    const changes = [
      { selector: 'meta[name="description"]', tag: "meta", key: "name", value: "description", attribute: "content", content: "Explore nutrition services, Standard Process, Ortho Molecular Products, doTERRA essential oils, and personalized supplement testing at Well Adjusted Chiropractic." },
      { selector: 'link[rel="canonical"]', tag: "link", key: "rel", value: "canonical", attribute: "href", content: "https://staywelladjusted.com/nutrition" },
    ].map((setting) => {
      const existing = document.head.querySelector(setting.selector);
      const element = existing ?? document.createElement(setting.tag);
      const previous = element.getAttribute(setting.attribute);
      element.setAttribute(setting.key, setting.value);
      element.setAttribute(setting.attribute, setting.content);
      if (!existing) document.head.appendChild(element);
      return { element, existing, previous, attribute: setting.attribute };
    });
    return () => {
      document.title = previousTitle;
      changes.forEach(({ element, existing, previous, attribute }) => {
        if (!existing) element.remove();
        else if (previous === null) element.removeAttribute(attribute);
        else element.setAttribute(attribute, previous);
      });
    };
  }, []);

  return (
    <Layout>
      <section className="bg-light-gold py-10 md:py-12">
        <div className={contentWidth}>
          <h1 className={`${heading} text-3xl md:text-4xl text-center uppercase mb-8`}>Nutrition Services</h1>
          <h2 className={`${heading} text-xl md:text-2xl text-center uppercase max-w-4xl mx-auto mb-8`}>Why We Trust Standard Process &amp; Ortho Molecular for Superior Nutrition</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              <p>At Well Adjusted Chiropractic, we've worked with dozens of supplement brands over the years, but only two have consistently delivered the quality, effectiveness, and results our patients need— Standard Process and Ortho Molecular Products.</p>
              <p>These brands are not just popular—they are backed by real science, superior sourcing, and proven patient outcomes. While we have access to many brands, these are the ones we trust most for foundational health and targeted nutrition.</p>
              <Button onClick={() => setCallOpen(true)} className="rounded-full uppercase font-semibold h-12 px-6">Call to Schedule! <ArrowRight aria-hidden="true" /></Button>
            </div>
            <div role="region" aria-label="Nutrition product photos" aria-roledescription="carousel" className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {photos.map((photo, index) => <img key={photo.src} src={photo.src} alt={photo.alt} aria-hidden={index !== slide} className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 motion-reduce:transition-none ${index === slide ? "opacity-100" : "opacity-0"}`} loading={index === 0 ? "eager" : "lazy"} />)}
              <Button size="icon" onClick={() => setSlide((slide + photos.length - 1) % photos.length)} aria-label="Previous photo" title="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8"><ChevronLeft /></Button>
              <Button size="icon" onClick={() => setSlide((slide + 1) % photos.length)} aria-label="Next photo" title="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"><ChevronRight /></Button>
              <Button size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"} title={paused ? "Play slideshow" : "Pause slideshow"} className="absolute bottom-2 right-2 h-8 w-8">{paused ? <Play /> : <Pause />}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className={`${contentWidth} grid md:grid-cols-2 gap-8 md:gap-12 items-start`}>
          <div>
            <div className="flex items-center gap-3 mb-4"><Leaf className="text-primary w-8 h-8 shrink-0" /><div><h2 className={`${heading} text-2xl`}>Standard Process</h2><p className="text-sm text-muted-foreground">Whole Food Nutrition That Works</p></div></div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-5">Most supplements are synthetic—lab-created versions of vitamins and minerals that your body may struggle to recognize and absorb. Standard Process takes a different approach, using real, whole-food ingredients to provide bioavailable, nutrient-dense support.</p>
            <div className="space-y-3">{wholeFood.map((item) => <div key={item.title} className="border border-primary rounded p-4 flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /><div><h3 className={`${heading} text-sm mb-1`}>{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></div></div>)}</div>
          </div>
          <aside className="bg-primary text-primary-foreground rounded-lg p-7"><h3 className="font-body font-bold text-lg mb-3">Natural Nutrition, Nature's Way</h3><p className="text-sm leading-relaxed">If you're looking for a natural, whole-food approach to supplementation, Standard Process delivers real nutrition, the way nature intended.</p></aside>
        </div>
      </section>

      <section className="nutrition-clinical py-12 text-secondary-foreground">
        <div className={`${contentWidth} grid md:grid-cols-2 gap-8 md:gap-12`}>
          <div><h2 className="font-body font-bold text-2xl uppercase mb-4">Ortho Molecular Products</h2><p className="font-semibold text-sm mb-4">Science-Driven, Pharmaceutical-Grade Supplements</p><p className="text-sm leading-relaxed mb-5">While Standard Process focuses on whole-food nutrition, Ortho Molecular Products takes a clinical, research-backed approach to supplementation. These highly targeted formulas are designed to correct deficiencies, improve function, and deliver measurable health improvements.</p><blockquote className="bg-secondary-foreground/10 rounded-lg p-5 text-sm leading-relaxed">If you need targeted support for energy, inflammation, joint health, digestion, or immune function, Ortho Molecular provides the science-backed solutions you can trust.</blockquote></div>
          <div className="space-y-4">{clinical.map((item) => <div key={item.title} className="bg-secondary-foreground/10 rounded-lg p-5"><h3 className="font-body font-bold text-base mb-2">{item.title}</h3><p className="text-sm leading-relaxed">{item.text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className={contentWidth}>
          <h2 className={`${heading} text-xl md:text-2xl text-center uppercase mb-4`}>Why You Need Supplements Today More Than Ever</h2>
          <p className="text-sm text-muted-foreground text-center mb-7">Most people assume they can get everything they need from food, but modern nutrition has changed.</p>
          <div className="grid md:grid-cols-3 gap-4">{reasons.map((item) => <div key={item.title} className="bg-muted rounded-lg p-6"><CheckCircle2 className="text-primary mb-4" /><h3 className={`${heading} text-base mb-3`}>{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></div>)}</div>
          <div className="mt-5 bg-muted p-6 text-center"><h3 className={`${heading} text-lg mb-3`}>The Solution is Clear</h3><p className="text-sm text-muted-foreground leading-relaxed">With Standard Process and Ortho Molecular, you're not just taking supplements—you're giving your body the pure, bioavailable nutrition it needs to heal, recover, and thrive.</p></div>
        </div>
      </section>

      <section className="nutrition-oils py-12">
        <div className={contentWidth}>
          <h2 className={`${heading} text-2xl text-center uppercase mb-3`}>DOTERRA</h2><p className="text-center font-semibold text-muted-foreground text-sm mb-7">The Gold Standard in Essential Oils</p>
          <div className="grid sm:grid-cols-2 gap-6">{oils.map(({ title, text, icon: Icon }) => <div key={title} className="bg-card border border-border rounded-lg p-7 text-center"><span className="inline-flex bg-primary text-primary-foreground rounded-full w-12 h-12 items-center justify-center mb-4"><Icon aria-hidden="true" /></span><h3 className={`${heading} text-lg mb-3`}>{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></div>)}</div>
          <div className="text-center text-sm text-muted-foreground leading-relaxed mt-7 space-y-4"><p>If you're looking for the safest, purest, and most effective essential oils, doTERRA is the only brand we trust.</p><p>At Well Adjusted Chiropractic, we choose only the highest-quality products for our patients, which is why we exclusively recommend doTERRA essential oils. When it comes to purity, potency, and therapeutic effectiveness, no other essential oil company meets the same standard.</p><ContactButton /></div>
        </div>
      </section>

      <section className="bg-muted py-10">
        <div className={`${contentWidth} grid md:grid-cols-2 gap-6`}>
          <div className="md:pr-6"><h2 className={`${heading} text-xl mb-4`}>Personalized Supplement Testing with Applied Kinesiology</h2><p className="text-sm text-muted-foreground leading-relaxed">At Well Adjusted Chiropractic, we don't believe in a one-size-fits-all approach to supplementation. That's why we offer muscle testing using Applied Kinesiology (AK) and Applied Physiology to determine which Standard Process, Ortho Molecular, or doTERRA products best align with your body's needs.</p></div>
          <div><h3 className={`${heading} text-xl mb-4`}>Why Muscle Testing?</h3><ul className="space-y-3 mb-6">{testing.map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" />{item}</li>)}</ul><ContactButton /></div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className={`${contentWidth} grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center`}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&ehbc=2E312F&ll=36.705912089674364%2C-101.1439669&z=6" title="Well Adjusted Chiropractic Locations" className="w-full h-[450px] rounded-lg border-0" loading="lazy" allowFullScreen />
          <div className="space-y-5">{locations.map((location) => <div key={location.city} className="flex gap-3"><MapPin className="text-primary w-6 h-6 shrink-0 mt-1" /><div><h3 className={`${heading} text-sm mb-1`}>WELL ADJUSTED CHIROPRACTIC - {location.city}</h3><p className="text-sm text-muted-foreground mb-1">{location.address}</p><a href={tel(location.phone)} className="text-primary text-sm font-semibold hover:underline">{location.phone}</a></div></div>)}</div>
        </div>
      </section>

      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto"><DialogHeader><DialogTitle className="text-primary font-body">Call to Schedule!</DialogTitle><DialogDescription>Well Adjusted Chiropractic</DialogDescription></DialogHeader><div className="space-y-3">{locations.map((location) => <div key={location.city} className="flex justify-between items-center gap-3 border-b py-3 last:border-0"><div><h3 className="font-body font-semibold text-sm">{location.city}</h3><p className="text-sm text-muted-foreground">{location.phone}</p></div><Button asChild size="sm"><a href={tel(location.phone)} aria-label={`Call ${location.city}`}><Phone />Call</a></Button></div>)}</div></DialogContent>
      </Dialog>
    </Layout>
  );
}