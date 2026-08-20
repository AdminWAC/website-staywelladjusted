import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import imgMichael from "@/assets/team/michael-hughes.png";
import imgDavid from "@/assets/team/david-hughes.png";
import imgShari from "@/assets/team/shari-hughes.png";
import imgJordan from "@/assets/team/jordan-hughes.png";
import imgChloe from "@/assets/team/chloe-ragatz.png";

import imgAngel from "@/assets/team/angel-vega.png";
import imgCody from "@/assets/team/cody-eischeid.png";
import imgTatiana from "@/assets/team/tatiana-boyd.jpg";
import imgAveri from "@/assets/team/averi-hughes.png";
import imgWilliam from "@/assets/team/william-stults.png";
import imgBrittnye from "@/assets/team/brittnye-potter.png";
import imgDorothy from "@/assets/team/dorothy-richter.png";

import imgMiranda from "@/assets/team/miranda-evans.png";
import imgShane from "@/assets/team/shane-countryman.png";
import imgNathan from "@/assets/team/nathan-potter.png";
import imgJennifer from "@/assets/team/jennifer-savage.png";
import imgKody from "@/assets/team/kody-windecker.png";
import imgElliott from "@/assets/team/elliott-alexander.png";
import imgKatie from "@/assets/team/katie-lena.jpg";
import imgAmber from "@/assets/team/amber-lyons.png";
import imgElla from "@/assets/team/ella-bortolini.png";
import imgFrancio from "@/assets/team/francio-sousa.png";
import imgAntonio from "@/assets/team/antonio-sarinana.png";
import imgSteven from "@/assets/team/steven-veloso.png";

const tabs = ["Management", "Central Support Team", "Arlington, TX", "Loveland, CO", "Greeley, CO", "Fort Collins, CO", "Erie, CO"];

interface TeamMember {
  name: string;
  title: string;
  bio?: string;
  image?: string;
  overlayName?: boolean;
}

const teamByTab: Record<string, TeamMember[]> = {
  Management: [
    {
      name: "Michael Hughes, DC",
      title: "Co-CEO, Director of Acquisitions & Expansion, Chiropractor",
      image: imgMichael,
      bio: "Dr. Michael Hughes, personally recruited by Dr. Jim Parker, leads thriving practices in Texas and Colorado. He specializes in neurological family care, pediatrics, and spinal decompression while mentoring interns from multiple chiropractic universities. Currently Vice President of the Colorado Chiropractic Association, he is on the path to becoming President. A dedicated educator and leader, he advocates for expanding chiropractic care. His nonprofit, Gateway to Wellness Foundation, supports those in need, furthering his mission to make high-quality chiropractic care accessible to more communities.",
    },
    {
      name: "David Hughes, DC",
      title: "Co-CEO, Director of Systems & Strategy, Chiropractor",
      image: imgDavid,
      bio: "Dr. David Hughes knew at 14 that he wanted to be a chiropractor. He earned his B.S. in Anatomy from Parker College of Chiropractic and has since specialized in neurological family care, pediatrics, and pre- and post-natal chiropractic. As Co-CEO and Clinical Director, he prioritizes patient education and advancing the profession. A CCA Champion of the Year nominee, he actively contributes to research, mentorship, and chiropractic advocacy. He co-founded the Gateway to Wellness Foundation, supporting those in need. Working alongside family, he brings a personal touch to patient care.",
    },
    {
      name: "Shari Hughes",
      title: "Chief Operating Officer",
      image: imgShari,
      bio: "As COO of Well Adjusted Chiropractic, Shari Hughes is the driving force behind operations, patient care, and team growth across multiple locations. With 30+ years in business leadership, she has managed a major retail chain, Texas's largest staffing agency, and an international shipping company. She ensures exceptional patient experiences, regulatory compliance, and operational efficiency while optimizing budgets and vendor relationships. A dedicated mother of five, she also leads the Gateway to Wellness Foundation, helping those in need. Shari is the backbone of our success.",
    },
    {
      name: "Jordan Hughes",
      title: "Operations Manager",
      image: imgJordan,
      bio: "Raised in Fort Collins, Colorado, Jordan is a proud Texan at heart and now leads Well Adjusted Chiropractic as Operations Manager. She started as a Chiropractic Assistant in high school, working through college while studying Music. As the daughter of Dr. Michael and Shari Hughes, she grew up immersed in chiropractic care and wellness advocacy. Passionate about helping others achieve optimal health, Jordan is dedicated to creating a welcoming, efficient patient experience. Outside of work, she enjoys family, friends, reading, singing, and boating.",
    },
    {
      name: "Chloe Horrocks",
      title: "Marketing Director",
      image: imgChloe,
      bio: "Chloe Horrocks is the powerhouse behind both the strategy and heart of Well Adjusted Chiropractic. As Marketing Director, she ensures that everything from patient outreach to day-to-day office flow runs seamlessly. With hands-on experience in nearly every chiropractic assistant role, Chloe understands the patient journey inside and out—making her uniquely equipped to connect people with the life-changing care they deserve. A former athlete who experienced the benefits of chiropractic firsthand, Chloe is deeply passionate about helping others rediscover their health through natural, holistic care. Whether she's overseeing operations, refining patient education, or leading marketing initiatives, Chloe is committed to creating meaningful, positive experiences at every touchpoint. When she's not in the office, you'll find her soaking up the sunshine, out on the water, or adventuring with her husband, Ethan, and their beloved pets—Penny, Pretzel, and Jax.",
    },
  ],
  "Central Support Team": [
    {
      name: "Angel Vega",
      title: "Patient Relations & Customer Service Specialist",
      image: imgAngel,
      bio: "Angel is the backbone of patient communication, ensuring seamless scheduling, fast responses, and exceptional service. With 15 years of experience in customer support, she expertly manages calls, texts, emails, and scheduling to keep our practice running smoothly. A nursing graduate, Angel combines compassion and efficiency to enhance every patient's experience. Dedicated, adaptable, and highly skilled, Angel plays a vital role in delivering the exceptional service our patients deserve.",
    },
    {
      name: "Ella Bortolini",
      title: "Systems & Automation Lead",
      image: imgElla,
      bio: "Ella built her career in sales, but what stuck with her was the system behind it—the workflows, the follow-up, the process that turned good conversations into consistent results. That hands-on instinct became her full-time focus, and it's what she now brings to Well Adjusted Chiropractic. As Systems & Automation Lead, Ella builds and maintains the systems, automations, and marketing projects that shape a smoother, more personal experience for patients at every WAC location. A twin mom working for twin CEOs, she brings the same organization and energy home as she does to the office. Outside of work, she's spending time with her kids, singing along to a musical, playing guitar, watching a movie, or hanging out with her dog, Jade Maria.",
    },
    {
      name: "Francio Sousa",
      title: "Digital Dominance Lead",
      image: imgFrancio,
      bio: "Francio serves as Digital Dominance Lead for Well Adjusted Chiropractic, overseeing the digital strategy and online growth of its locations. His work spans SEO, paid advertising, website strategy, local search, analytics, content, and digital campaigns designed to strengthen visibility and connect more people with the care they are looking for. With a hands-on, data-driven approach, Francio focuses on turning digital opportunities into measurable growth while keeping each location aligned under a consistent brand and marketing strategy.",
    },
    {
      name: "Antonio Sariñana",
      title: "Patient Relations & Customer Service Specialist",
      image: imgAntonio,
      bio: "Antonio brings more than 16 years of combined experience across media, nonprofit organizations, government, education, and real estate. Known for his strong public speaking and networking skills, he enjoys connecting with people and building meaningful relationships. During his bachelor's degree, Antonio lived in Buenos Aires, Argentina, where he studied marketing and history. Outside of work, he enjoys playing tennis, traveling, and writing. He has also published a short novel on Wattpad.",
    },
    {
      name: "Steven Veloso",
      title: "Patient Relations & Customer Service Specialist",
      image: imgSteven,
      bio: "With more than 15 years of experience in healthcare administration, customer service, and bilingual communication, Steven is dedicated to making every patient feel heard and supported. At Well Adjusted Chiropractic, he assists patients with scheduling and communication while coordinating personal injury cases with attorneys, insurance representatives, and the clinical team. Fluent in English and Spanish, Steven brings compassion, attention to detail, and a calm, helpful approach to every interaction. He also volunteers with the 988 Suicide & Crisis Lifeline. Outside of work, Steven enjoys spending time in nature with his children.",
    },
  ],
  "Arlington, TX": [
    {
      name: "Cody Eischeid, DC",
      title: "Clinic Director, Chiropractor",
      image: imgCody,
      bio: "Dr. Cody Eischeid holds a Doctorate of Chiropractic and MBA from Parker University. Raised on a Midwest farm, he developed a strong work ethic and passion for serving others. Inspired by his own childhood chiropractic care, he dedicated his career to helping patients move better, feel better, and live healthier lives. Dr. Cody treats patients of all ages—from infants to competitive athletes and professional UFC fighters—with personalized, evidence-informed care. A believer in continuous learning, he stays current on best practices to deliver exceptional results. Outside the office, he’s passionate about wake surfing and fitness."
    },
    {
      name: "Tatiana Gottlieb",
      title: "Lead Front Desk & Chiropractic Assistant",
      image: imgTatiana,
      overlayName: true,
      bio: "A DFW native, Tatiana Gottlieb is passionate about holistic healthcare after chiropractic care helped her overcome chronic migraines from a car accident. Formerly working with special education students, she brings empathy, dedication, and firsthand experience to Well Adjusted Chiropractic. Tatiana is committed to helping patients reclaim their health and feel supported on their wellness journeys. Outside of work, she enjoys hiking, spending quality time with her family, and staying active through workouts and running with her dog. She also loves getting lost in a good book and making the most of time with her husband.",
    },
    {
      name: "Averi Hughes",
      title: "New Patient Concierge & Chiropractic Assistant",
      image: imgAveri,
      bio: "Averi is the New Patient Concierge at Well Adjusted Chiropractic, bringing a deep-rooted understanding of chiropractic care from growing up in the family business. Her esthiology studies further enriched her passion for holistic health. Outgoing and sociable, she loves meeting new people, addressing their health concerns, and sharing the miracles of chiropractic care. Originally part of the Loveland, CO, office, Averi now brings her expertise to Texas. Outside of work, she enjoys pilates, boating, church activities, and making lasting memories with family and friends.",
    },
  ],
  "Loveland, CO": [
    {
      name: "William Stoltz, DC",
      title: "Clinic Director, Chiropractor",
      image: imgWilliam,
      bio: "With 20+ years of experience, Dr. Billy is a renowned expert in advanced chiropractic care, specializing in Thompson Drop, Diversified Pediatric, Pettibon Techniques, and Animal Chiropractic. A former Life University rugby player, he understands peak performance and whole-body health. He has led multiple top-performing clinics in Colorado, treating athletes, infants, and complex cases like infertility. Known for his exceptional results and deep patient trust, Dr. Billy is a pillar of expertise at Well Adjusted Chiropractic.",
    },
    {
      name: "Brittnye Potter, DC",
      title: "Chiropractor",
      image: imgBrittnye,
      bio: "Originally from North Georgia, she began her academic journey in Alabama and later earned her Doctor of Chiropractic degree from Life University, where she also met her husband Dr. Nate (who now practices in our Greeley office). Together, they operated a successful private practice in the suburbs of Chicago for nearly nine years. They eventually relocated to Colorado to embrace its natural beauty and active lifestyle. She has a deep passion for serving individuals of all ages, with a special focus on prenatal and pediatric care. In addition, she is dedicated to supporting and educating women on hormone health and the vital role it plays in overall wellness. She is committed to helping patients understand how their health practices are designed to heal naturally and guiding them through their unique healing process. When she's not in the office, she enjoys spending time outdoors, hiking, and continuing to learn, both professionally and personally.",
    },
    {
      name: "Dorothy Richter",
      title: "Massage Therapist",
      image: imgDorothy,
      bio: "With over 34 years of experience, Dorothy brings a deep well of knowledge, skill, and compassion to every session. In addition to her work at Well Adjusted Chiropractic, she runs a thriving private practice and spent 20 years teaching at the Healing Arts School of Massage, where she continues to mentor new therapists in their practices. Dorothy is extensively trained in a wide range of therapeutic modalities, including Swedish relaxation, deep tissue, neuromuscular, and myofascial release techniques, as well as trigger point therapy, CranioSacral therapy, somato-emotional release, lymphatic massage, aromatherapy, reflexology, and prenatal and infant massage. Her true passion lies in energy work, and she has studied numerous energy-based modalities to help her clients find both physical and emotional healing. When she's not working, Dorothy enjoys spending quality time with her family and friends.",
    },
    {
      name: "Miranda Evans",
      title: "Lead Front Desk & Chiropractic Assistant",
      image: imgMiranda,
      bio: "Originally from Minnesota, Miranda has proudly called Colorado home for the past nine years. As one of our Chiropractic Assistants, she's the first friendly face you'll see when you walk through our doors. Her warm energy and genuine care help create the welcoming environment our patients love. Life got even sweeter with the arrival of her daughter, Charlotte, who brings endless joy to her family. Outside the office, Miranda is an outdoor enthusiast who loves being on the water, hiking, and spending time with friends and family. Her home is a lively one—shared with three cats, a dog, and two guinea pigs—making every day a little more fun (and furry!). Whether she's supporting our patients or soaking in life's little moments, Miranda brings kindness, balance, and heart to everything she does.",
    },
  ],
  "Greeley, CO": [
    {
      name: "Shane Countryman, DC",
      title: "Clinic Director, Chiropractor",
      image: imgShane,
      bio: "Dr. Shane Countryman holds a Doctorate in Chiropractic from Parker University along with a Master's in Neuroscience and multiple degrees in Anatomy, Health & Wellness, and Economics. He has treated U.S. veterans, first responders, and elite athletes, training alongside a former U.S. Olympic Team doctor and the New England Patriots' chiropractor. Before joining Well Adjusted Chiropractic, he ran a highly successful practice in Loveland, Colorado. Known for his expertise and personalized care, he is dedicated to helping patients reclaim active, pain-free lives.",
    },
    {
      name: "Dr. Nathan Potter, DC",
      title: "Chiropractor",
      image: imgNathan,
      bio: "Dr. Nate Potter discovered chiropractic after a failed leg surgery left him with nerve damage and chronic pain. Through chiropractic care, he experienced profound healing—regaining pain-free movement and improvements in sleep, digestion, and anxiety. Inspired by this transformation, he committed his life to helping others unlock their body's natural healing potential. Dr. Nate earned his Doctor of Chiropractic from Life University in 2012 after completing his undergraduate studies at Oklahoma State. He has advanced training in neurologically focused techniques, including Mastery Love & Service (MLS) and Bio-Geometric Integration (BGI). He and his wife, Dr. Brittnye Potter, also a chiropractor, practiced in Chicago before relocating to Northern Colorado to embrace a wellness-centered lifestyle. Dr. Nate now serves the Greeley community with passion, helping individuals and families live healthier, more vibrant lives.",
    },
    {
      name: "Jennifer Savage",
      title: "Lead Front Desk & Chiropractic Assistant",
      image: imgJennifer,
      bio: "Jennifer Savage is a dedicated chiropractic assistant committed to supporting patients on their wellness journey. Jennifer began her first job as a Chiropractic Assistant in 2006 before taking a break to raise her daughter. 16 years later, in 2022 she started working at Keeney Chiropractic (now Well Adjusted Chiropractic – Greeley). With a warm and welcoming spirit, Jennifer brings enthusiasm to her role, helping patients feel comfortable and informed throughout their care experience. Outside the office, Jennifer enjoys spending quality time with her family, hiking, engaging in church activities, and expressing her passion for music by playing the piano. She is proud to be part of a team focused on promoting health, wellness, and a strong foundation for lifelong vitality.",
    },
  ],
  "Fort Collins, CO": [
    {
      name: "Kody Windecker, DC",
      title: "Clinic Director, Chiropractor",
      image: imgKody,
      bio: "Dr. Kody Windecker's journey into chiropractic began with his own battle against congenital back issues. A Texas Lutheran University graduate (Cum Laude), he discovered the power of chiropractic care firsthand, leading him to earn his Doctorate from Parker University. Dedicated to restoring health through holistic, patient-centered care, he is known for his compassionate approach and expertise. Passionate about helping others overcome pain, Dr. Kody continues to impact his community with unwavering commitment. Outside the clinic, he enjoys hiking, fishing, and playing music with his wife, Madison.",
    },
    {
      name: "Katie Lena",
      title: "Lead Front Desk & Chiropractic Assistant",
      image: imgKatie,
      overlayName: true,
      bio: "Katherine \"Katie\" Lena is driven by a simple but powerful mission: to help our community experience true health and vitality. As a Chiropractic Assistant, Katie serves as the bridge between our patients and their wellness goals, ensuring that every person who walks through our doors feels seen, supported, and empowered on their healing journey. With a Bachelor's degree in Human Development and Family Studies from Colorado State University and over 15 years of experience in team management and customer relations, Katie understands that true healthcare is built on connection. She loves being part of a team that doesn't just treat symptoms, but actively helps families live their lives to the absolute fullest. A Colorado native through and through, Katie practices what she preaches when it comes to an active, vibrant lifestyle. When she's not at the clinic helping our practice run seamlessly, you'll find her out in the mountains—hiking, camping, and exploring the outdoors with her family.",
    },
  ],
  "Erie, CO": [
    {
      name: "Elliot Alexander, DC",
      title: "Clinic Director, Chiropractor",
      image: imgElliott,
      bio: "Dr. Elliott Alexander is a third-generation chiropractor passionate about helping people achieve better health through natural, patient-centered care. Growing up in a chiropractic family, he witnessed the impact of holistic care and committed to helping others live healthier, more active lives. He earned his Doctor of Chiropractic degree and a Master's in Clinical Neuroscience, with advanced training in complex neurological conditions. He combines evidence-based chiropractic care with a personalized approach. Outside the office, he enjoys guitar, golf, and time outdoors with his wife, Elizabeth. They are proud to call the Denver area home."
    },
    {
      name: "Amber Lyons",
      title: "Chiropractic Assistant",
      image: imgAmber,
      bio: "Amber is a dedicated Chiropractic Assistant who enjoys being part of each patient’s health journey. She values the welcoming, family-like atmosphere at Well Adjusted Chiropractic and loves building genuine relationships with the people the team serves. Her warmth and enthusiasm help patients feel comfortable and supported throughout their experience in the office. Outside of work, Amber enjoys spending quality time with her family, whether they are paddleboarding, visiting arcades, or relaxing together with a movie. She is also an avid reader who is rarely without a good book nearby. Amber is grateful to be part of a passionate team committed to helping the community live healthier, happier lives."
    },
  ],
};

const locations = [
  { name: "Arlington TX", address: "5717 SW Green Oaks Blvd Arlington, TX 76017", phone: "(682) 277-1966" },
  { name: "Loveland CO", address: "3850 N Grant Ave STE 100 Loveland, CO 80538", phone: "(970) 427-2543" },
  { name: "Greeley CO", address: "6200 W 9th St #2A Greeley, CO 80634", phone: "(970) 888-7097" },
  { name: "Fort Collins CO", address: "1075 W Horsetooth Rd Fort Collins, CO 80526", phone: "(970) 714-2207" },
  { name: "Erie CO", address: "680 Mitchell Way Unit 160, Erie, CO 80516", phone: "970-670-3607" },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [open, setOpen] = useState(false);
  const hasBio = !!member.bio;

  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer shadow-md"
      onClick={() => hasBio && setOpen((o) => !o)}
    >
      <div className="h-[400px] bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-heading text-4xl text-primary">{member.name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Name plate */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-4 pt-12 text-center pointer-events-none">
        <h3 className="font-heading text-lg text-white drop-shadow leading-tight">{member.name}</h3>
        <p className="text-[11px] md:text-xs text-white/95 font-body leading-tight max-w-[92%] mx-auto text-balance">{member.title}</p>
      </div>

      {/* Bio overlay (hover on desktop, tap on mobile) */}
      {hasBio && (
        <div
          className={`absolute inset-0 bg-primary/90 transition-opacity duration-300 flex items-center justify-center p-6
            ${open ? "opacity-100" : "opacity-0"}
            md:opacity-0 md:group-hover:opacity-100`}
        >
          <div className="text-center overflow-y-auto max-h-full">
            <h3 className="font-heading text-xl text-primary-foreground mb-3">{member.name}</h3>
            <p className="text-sm text-primary-foreground/95 font-body leading-relaxed">{member.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const MeetTheTeam = () => {
  const [activeTab, setActiveTab] = useState("Management");

  return (
    <Layout>
      <section className="py-12 bg-background">
        <h1 className="font-heading text-4xl md:text-5xl text-primary text-center mb-8">
          Our Remarkable Team
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-heading text-lg px-2 py-1 border-b-2 transition-colors ${
                activeTab === tab
                  ? "text-primary border-primary"
                  : "text-secondary border-transparent hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <div className="max-w-[1340px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamByTab[activeTab]?.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted text-center">
        <p className="font-body text-secondary mb-4">Ready to find out more?</p>
        <Link
          to="/special"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          NEW PATIENT SPECIAL OFFER →
        </Link>
      </section>

      {/* Locations */}
      <section className="py-16 bg-background">
        <div className="max-w-[1340px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <iframe
            title="Well Adjusted Chiropractic Locations"
            src="https://www.google.com/maps/d/u/0/embed?mid=1Vt5ZIB_N1gZRDWw3G1yc4AdlSksbq2k&ll=36.705912089674364%2C-101.1439669&z=6"
            className="w-full h-[450px] rounded-lg border-0"
          />
          <div className="space-y-5">
            {locations.map((loc) => (
              <div key={loc.name} className="border-l-4 border-primary pl-4">
                <h3 className="font-heading text-secondary text-lg uppercase">
                  Well Adjusted Chiropractic – {loc.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">{loc.address}</p>
                <a
                  href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:underline mt-1"
                >
                  <Phone className="w-4 h-4" /> {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetTheTeam;
