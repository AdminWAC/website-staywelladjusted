import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

import img3 from "@/assets/history/img3.png";
import img4 from "@/assets/history/img4.png";
import img5 from "@/assets/history/img5.png";
import img6 from "@/assets/history/img6.png";
import img7 from "@/assets/history/img7.png";
import img8 from "@/assets/history/img8.png";
import img9 from "@/assets/history/img9.png";
import img10 from "@/assets/history/img10.png";
import img11 from "@/assets/history/img11.png";
import img12 from "@/assets/history/img12.png";
import img13 from "@/assets/history/img13.png";
import img14 from "@/assets/history/img14.png";
import img15 from "@/assets/history/img15.png";
import img16 from "@/assets/history/img16.png";
import img17 from "@/assets/history/img17.png";
import img18 from "@/assets/history/img18.png";
import wac117 from "@/assets/history/2023-june/wac117.jpg";
import wac118 from "@/assets/history/2023-june/wac118.jpg";
import img19 from "@/assets/history/2023-september/wac116.png";
import img20 from "@/assets/history/2023-november/wac120.jpg";
import img21 from "@/assets/history/2024-january/wac121.jpg";
import img22 from "@/assets/history/2024-june/wac129.jpg";
import wac122 from "@/assets/history/2024-november/wac122.jpg";
import wac123 from "@/assets/history/2024-november/wac123.jpg";
import wac124 from "@/assets/history/2024-november/wac124.jpg";
import wac125 from "@/assets/history/2024-november/wac125.jpg";
import wac126 from "@/assets/history/2024-november/wac126.jpg";
import wac127 from "@/assets/history/2024-november/wac127.jpg";
import wac128 from "@/assets/history/2024-november/wac128.jpg";
import wac130 from "@/assets/history/2025-march/wac130.png";

import wac003 from "@/assets/history/2002/wac003.jpg";
import wac004 from "@/assets/history/2002/wac004.jpg";
import wac005 from "@/assets/history/2002/wac005.png";
import wac026 from "@/assets/history/2003/wac026.jpg";
import wac027 from "@/assets/history/2003/wac027.jpg";
import wac028 from "@/assets/history/2003/wac028.jpg";
import wac029 from "@/assets/history/2003/wac029.jpg";
import wac030 from "@/assets/history/2003/wac030.jpg";
import wac031 from "@/assets/history/2003/wac031.jpg";
import wac006 from "@/assets/history/2003-2012/wac006.jpg";
import wac007 from "@/assets/history/2003-2012/wac007.jpg";
import wac008 from "@/assets/history/2003-2012/wac008.jpg";
import wac009 from "@/assets/history/2003-2012/wac009.jpg";
import wac010 from "@/assets/history/2003-2012/wac010.jpg";
import wac011 from "@/assets/history/2003-2012/wac011.jpg";
import wac012 from "@/assets/history/2003-2012/wac012.jpg";
import wac013 from "@/assets/history/2003-2012/wac013.jpg";
import wac014 from "@/assets/history/2003-2012/wac014.png";
import wac036 from "@/assets/history/2007/wac036.jpg";
import wac037 from "@/assets/history/2013/wac037.jpg";
import wac038 from "@/assets/history/2013/wac038.jpg";
import wac039 from "@/assets/history/2013/wac039.jpg";
import wac040 from "@/assets/history/2013/wac040.jpg";
import wac041 from "@/assets/history/2013/wac041.jpg";
import wac042 from "@/assets/history/2013/wac042.jpg";
import wac043 from "@/assets/history/2013/wac043.jpg";
import wac044 from "@/assets/history/2013/wac044.jpg";
import wac045 from "@/assets/history/2013/wac045.jpg";
import wac046 from "@/assets/history/2013/wac046.jpg";
import wac047 from "@/assets/history/2013/wac047.jpg";
import wac048 from "@/assets/history/2013/wac048.jpg";
import wac049 from "@/assets/history/2013/wac049.jpg";
import wac050 from "@/assets/history/2015-march/wac050.jpg";
import wac051 from "@/assets/history/2015-march/wac051.jpg";
import wac052 from "@/assets/history/2015-march/wac052.jpg";
import wac053 from "@/assets/history/2015-march/wac053.png";
import wac054 from "@/assets/history/2015-march/wac054.jpg";
import wac055 from "@/assets/history/2015-march/wac055.jpg";
import wac056 from "@/assets/history/2015-march/wac056.jpg";
import wac057 from "@/assets/history/2015-march/wac057.jpg";
import wac058 from "@/assets/history/2015-march/wac058.jpg";
import wac059 from "@/assets/history/2015-october/wac059.png";
import wac060 from "@/assets/history/2015-december/wac060.jpg";
import wac061 from "@/assets/history/2015-december/wac061.png";
import wac062 from "@/assets/history/2017-february/wac062.jpg";
import wac063 from "@/assets/history/2017-february/wac063.jpg";
import wac064 from "@/assets/history/2017-february/wac064.jpg";
import wac065 from "@/assets/history/2017-february/wac065.jpg";
import wac066 from "@/assets/history/2017-february/wac066.jpg";
import wac067 from "@/assets/history/2017-february/wac067.jpg";
import wac068 from "@/assets/history/2017-february/wac068.jpg";
import wac069 from "@/assets/history/2017-february/wac069.jpg";
import wac070 from "@/assets/history/2017-february/wac070.jpg";
import wac076 from "@/assets/history/2017-foundation/wac076.jpg";
import wac077 from "@/assets/history/2017-foundation/wac077.jpg";
import wac078 from "@/assets/history/2017-foundation/wac078.jpg";
import wac079 from "@/assets/history/2017-foundation/wac079.png";
import wac080 from "@/assets/history/2017-foundation/wac080.jpg";
import wac081 from "@/assets/history/2017-foundation/wac081.jpg";
import wac082 from "@/assets/history/2017-foundation/wac082.jpg";
import wac083 from "@/assets/history/2017-foundation/wac083.jpg";
import wac088 from "@/assets/history/2017-foundation/wac088.jpg";
import wac104 from "@/assets/history/2021-june/wac104.png";
import wac112 from "@/assets/history/2022-march/wac112.png";
import wac113 from "@/assets/history/2022-march/wac113.png";
import wac114 from "@/assets/history/2022-march/wac114.png";
import wac115 from "@/assets/history/2022-march/wac115.png";
import wac105 from "@/assets/history/2022-november/wac105.jpg";
import wac106 from "@/assets/history/2022-november/wac106.jpg";
import wac107 from "@/assets/history/2022-december/wac107.png";
import wac108 from "@/assets/history/2022-december/wac108.png";
import wac109 from "@/assets/history/2022-december/wac109.png";
import wac110 from "@/assets/history/2022-december/wac110.png";
import wac111 from "@/assets/history/2022-december/wac111.jpg";
import wac112b from "@/assets/history/2022-december/wac112.png";
import wac119 from "@/assets/history/2023-june/wac119.png";

type Event = {
  year: string;
  month?: string;
  title: string;
  body: string;
  image?: string;
  images?: string[];
};

const events: Event[] = [
  {
    year: "2002",
    month: "July",
    title: "Graduated from Parker Chiropractic University (Dallas, TX)",
    body:
      "Twin brothers Dr. Michael and Dr. David Hughes graduated from Parker Chiropractic University in Dallas, Texas. Their journey into chiropractic began at age 14, driven by a shared passion for helping people heal naturally. Dr. Michael set a record for public patient recruitment during his internship, and Dr. David earned academic honors — laying the foundation for a lifelong mission to transform lives through neurologically based, results-driven chiropractic care.",
    images: [wac003, wac004, wac005],
  },
  {
    year: "2003",
    title: "Co-founded Wellness Practice in Keller, Texas",
    body:
      "Shortly after graduating, Dr. Michael Hughes partnered with Dr. David Kinnison to co-found a wellness-based chiropractic clinic in Keller, Texas. Together, they built a practice centered around holistic care and patient results. Dr. Hughes later stepped away from the practice to help grow the family business — an opportunity that exposed him to high-level mentors and business leaders who would forever shape his thinking. Those experiences formed the foundation of what would become Well Adjusted Chiropractic.",
    images: [wac026, wac027, wac028, wac029, wac030, wac031],
  },
  {
    year: "2003 – 2012",
    title: "Built One of North America's Largest Insurance Agencies",
    body:
      "Dr. Michael and Dr. David Hughes shifted focus from chiropractic to entrepreneurship, co-leading one of the largest insurance agencies in North America. They reached the top of the company, generating millions in revenue and earning every accolade available. Yet despite the financial wins, they felt unfulfilled — clarifying their calling to return to chiropractic with a renewed purpose and create the biggest possible footprint in the profession.",
    images: [wac006, wac007, wac008, wac009, wac010, wac011, wac012, wac013, wac014],
  },
  {
    year: "2007",
    title: "Director of Physical Medicine in Northern Colorado",
    body:
      "Dr. Michael Hughes served as Director of Physical Medicine for a multi-location integrated medical practice in Northern Colorado, overseeing treatment protocols and team operations across several clinics. The experience clarified what he didn't want to replicate: a deep reliance on third-party insurance, poor reimbursement rates, and a cold, corporate environment. It was here he committed to building something different — an uplifting, patient-focused model where care is never compromised.",
    image: wac036,
  },
  {
    year: "2013",
    month: "November 1",
    title: "Mentored by Dr. Ron Dahl — Building a Foundation for Future Success",
    body:
      "Acquired Dr. Ron Dahl's successful practice and spent nearly a year under his mentorship, gaining invaluable experience and laying the foundation for future success.",
    images: [wac037, wac038, wac039, wac040, wac041, wac042, wac043, wac044, wac045, wac046, wac047, wac048, wac049],
  },
  {
    year: "2015",
    month: "March",
    title: "Gateway Expands into Renovated New Headquarters",
    body:
      "Relocated to a larger building to expand the hub and headquarters of Gateway Family Chiropractic. The building had been vacant for 10 years and underwent its first remodel, with much of the work completed by Dr. Dave and Dr. Mike themselves.",
    images: [wac050, wac051, wac052, wac053, wac054, wac055, wac056, wac057, wac058],
  },
  {
    year: "2015",
    month: "October",
    title: "Dr. Shannon Bundy Joins and Thrives at Gateway",
    body:
      "Welcomed our first associate doctor, Dr. Shannon Bundy, to the Gateway team. Starting as an intern, she treated patients with her remarkable touch for 3 to 4 years. She has since gone on to run her own successful clinics and even serve as president of the Colorado Chiropractic Association.",
    image: wac059,
  },
  {
    year: "2015",
    month: "December",
    title: "Gateway's Growth Welcomes a Visit from Santa",
    body:
      "That same year, the success and growth of Gateway reached all the way to the North Pole, with Santa Claus himself visiting our office to bring cheer to our patients.",
    images: [wac060, wac061],
  },
  {
    year: "2017",
    month: "February",
    title: "Expanded and Remodeled in Just 28 Days",
    body:
      "We expanded into a larger building (our current location) to meet the needs of our thriving practice — completing a full interior remodel in an astonishing 28 days while continuing to provide uninterrupted, top-tier chiropractic care to the community.",
    images: [wac062, wac063, wac064, wac065, wac066, wac067, wac068, wac069, wac070],
  },
  {
    year: "2017",
    title: "Launch of Gateway to Wellness Foundation",
    body:
      "Dr. Michael and Dr. David Hughes founded the Gateway to Wellness Foundation, a nonprofit dedicated to expanding access to high-quality chiropractic care. The foundation serves individuals facing financial hardship, nurses, first responders, veterans, and active-duty military — reflecting the Hughes brothers' deep commitment to service and community.",
    images: [wac076, wac077, wac078, wac079, wac080, wac081, wac082, wac083, wac088],
  },
  {
    year: "2021",
    month: "June",
    title: "Dr. Billy Joins, Elevating Care to New Heights",
    body:
      "Dr. William Stults (Dr. Billy) joined the Gateway Family Chiropractic team, bringing exceptional skills and dedication to the highest level of chiropractic care. His expertise and passion have elevated our standard of care, reinforcing Gateway Family Chiropractic as a leader in the field — with patients describing their experience as life-changing.",
    image: wac104,
  },
  {
    year: "2022",
    month: "March",
    title: "Rebranding to Well Adjusted Chiropractic Begins in Arlington",
    body:
      "Launched the rebranding of Gateway Family Chiropractic to Well Adjusted Chiropractic, with Arlington, Texas leading the way. The fresh new look and feel have been embraced by patients — symbolizing our continued growth and dedication to delivering the most exceptional chiropractic care.",
    images: [wac115, wac114, wac112, wac113],
  },
  {
    year: "2022",
    month: "November",
    title: "Gateway Expands to Texas with Well Adjusted Chiropractic",
    body:
      "Gateway Family Chiropractic expanded into Texas under the Well Adjusted Chiropractic brand with the acquisition of Colopy Chiropractic Wellness Center in Arlington — the first clinic officially branded as Well Adjusted Chiropractic. We're honored to carry on Dr. Colopy's legacy of exceptional care as he retires.",
    images: [wac105, wac106],
  },
  {
    year: "2022",
    month: "December",
    title: "Exciting Remodel Underway at Arlington Location",
    body:
      "Began an exciting remodel of the Arlington, Texas location to enhance the patient experience and reflect the Well Adjusted Chiropractic standard of excellence — representing our ongoing commitment to growth, innovation, and providing the highest-quality care in a welcoming, state-of-the-art environment.",
    images: [wac107, wac108, wac109, wac110, wac111, wac112b],
  },
  {
    year: "2023",
    month: "June",
    title: "Merged with Inside Health to Serve More Families",
    body:
      "Well Adjusted Chiropractic merged with Inside Health in Loveland, acquiring all chiropractic patients from Drs. David and Lauren Koloski. As the Koloskis shifted their focus entirely to functional medicine, they personally referred their chiropractic patients to our team — allowing us to expand our footprint in Northern Colorado.",
    image: wac119,
  },
  {
    year: "2023",
    month: "June",
    title: "Acquired Keeney Chiropractic, Continuing a Legacy",
    body:
      "Expanded again with the acquisition of Keeney Chiropractic in Greeley, Colorado. After 38 years of building an outstanding reputation, Dr. Keeney entrusted Well Adjusted Chiropractic to continue his legacy of exceptional care — ensuring the high standards he established live on.",
    images: [wac117, wac118],
  },
  {
    year: "2023",
    month: "September",
    title: "Xelah Rain Baca Begins Journey to Become a Chiropractor",
    body:
      "We celebrated a proud moment as our first chiropractic assistant, Xelah Rain Baca, embarked on her journey to become a chiropractor at Life University in Macon, Georgia. Her dedication and passion for chiropractic care reflect the values and success of the team.",
    image: img19,
  },
  {
    year: "2023",
    month: "November",
    title: "Dr. Shane Countryman Leads Greeley Expansion",
    body:
      "Dr. Shane Countryman joined the Well Adjusted Chiropractic team, bringing his expertise and passion for chiropractic care after years in private practice. He now serves as the Clinic Director, leading the expansion of our Greeley location and delivering outstanding care to the community.",
    image: img20,
  },
  {
    year: "2024",
    month: "January",
    title: "Dr. Kody Windecker Joins, Expands into Fort Collins",
    body:
      "Welcomed Dr. Kody Windecker to the Well Adjusted Chiropractic team. With several years of experience, Dr. Windecker brings exceptional expertise and a dedication to excellence. Starting at our Loveland location, he has now expanded into Fort Collins, leading the way in our new practice.",
    image: img21,
  },
  {
    year: "2024",
    month: "June",
    title: "Dr. Cody Eischeid Strengthens Arlington Team",
    body:
      "Dr. Cody Eischeid joined the Well Adjusted Chiropractic team in Arlington, Texas. His dedication to clinical excellence and commitment to delivering high-level care have made a tremendous impact on our patients in Arlington and the surrounding communities.",
    image: img22,
  },
  {
    year: "2024",
    month: "November",
    title: "Acquired Fort Collins Chiropractic",
    body:
      "Well Adjusted Chiropractic proudly expanded into the Fort Collins market through the acquisition of Fort Collins Chiropractic. After more than three decades in practice, Dr. Kenna Venekamp selected our team to carry on his legacy of patient care — confident that no one else could serve his patients better.",
    images: [wac122, wac123, wac124, wac125, wac126, wac127, wac128],
  },
  {
    year: "2025",
    month: "March",
    title: "Dr. Lee Whittemore Retires — Care Continues with Us",
    body:
      "Dr. Lee Whittemore officially retired from practice after many years serving the Loveland community. As part of his transition, he entrusted Well Adjusted Chiropractic with the responsibility of storing patient records and ensuring continuity of care. Many of his patients have since reconnected through our office, experiencing our signature soft-touch technique and personalized, results-driven chiropractic.",
    image: wac130,
  },
];

const locations = [
  { name: "Arlington, TX", address: "5717 SW Green Oaks Blvd, Arlington, TX 76017", phone: "(682) 238-0625" },
  { name: "Loveland, CO", address: "3850 N Grant Ave STE 100, Loveland, CO 80538", phone: "(970) 669-7320" },
  { name: "Greeley, CO", address: "6200 W 9th St #2A, Greeley, CO 80634", phone: "(970) 353-0337" },
  { name: "Fort Collins, CO", address: "1075 W Horsetooth Rd, Fort Collins, CO 80526", phone: "(970) 493-0611" },
  { name: "Erie, CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "(303) 323-9931" },
];

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 group">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} — ${i + 1}`}
            loading="lazy"
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === idx ? "bg-[#d4af37] w-5" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};



const History = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#0f1c2e] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Our Journey Starts Here
          </h1>
          <div className="w-24 h-px bg-[#d4af37] mx-auto mt-8" />
          <p className="text-white/70 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            From two brothers with a shared calling to a multi-location chiropractic family
            transforming lives across Colorado and Texas — this is the timeline of Well Adjusted
            Chiropractic.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#fafaf7] py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#d4af37]/40 md:-translate-x-px"
            aria-hidden
          />

          <ul className="space-y-12 md:space-y-20">
            {events.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#d4af37] ring-4 ring-[#fafaf7]" />
                  </div>

                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 items-start ${
                      isLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Year marker (mobile + desktop opposite side) */}
                    <div
                      className={`hidden md:block ${
                        isLeft ? "text-right pr-12" : "text-left pl-12"
                      }`}
                    >
                      <p className="font-serif text-5xl text-[#0f1c2e] leading-none">{e.year}</p>
                      {e.month && (
                        <p className="text-[#d4af37] uppercase tracking-widest text-sm mt-2">
                          {e.month}
                        </p>
                      )}
                    </div>

                    {/* Card */}
                    <div className={`pl-16 md:pl-0 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="md:hidden mb-3">
                        <span className="font-serif text-3xl text-[#0f1c2e]">{e.year}</span>
                        {e.month && (
                          <span className="text-[#d4af37] uppercase tracking-widest text-xs ml-3">
                            {e.month}
                          </span>
                        )}
                      </div>
                      <article className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden">
                        {e.images && e.images.length > 1 ? (
                          <ImageCarousel images={e.images} alt={e.title} />
                        ) : (
                          (e.image || e.images?.[0]) && (
                            <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                              <img
                                src={e.image || e.images?.[0]}
                                alt={e.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )
                        )}
                        <div className="p-6 md:p-8">
                          <h2 className="font-serif text-xl md:text-2xl text-[#0f1c2e] leading-snug">
                            {e.title}
                          </h2>
                          <div className="w-12 h-px bg-[#d4af37] my-4" />
                          <p className="text-stone-600 leading-relaxed text-[15px]">{e.body}</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1c2e] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">
            Ready to find out more?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
            New Patient Special Offer
          </h2>
          <Link
            to="/schedule-appointment"
            className="inline-block bg-[#d4af37] hover:bg-[#b8932e] text-[#0f1c2e] font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-colors"
          >
            Request an Appointment
          </Link>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0f1c2e] text-center mb-12">
            Our Locations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="border border-stone-200 p-6 rounded-sm hover:border-[#d4af37] transition-colors"
              >
                <h3 className="font-serif text-lg text-[#0f1c2e] mb-3">
                  Well Adjusted Chiropractic — {loc.name}
                </h3>
                <p className="flex items-start gap-2 text-sm text-stone-600 mb-2">
                  <MapPin className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                  {loc.address}
                </p>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[#0f1c2e] font-medium hover:text-[#d4af37]"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
