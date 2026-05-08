import Layout from "@/components/Layout";
import { useState } from "react";

const tabs = ["Management", "Arlington, TX", "Loveland, CO", "Greeley, CO", "Fort Collins, CO", "Erie, CO"];

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

const teamByTab: Record<string, TeamMember[]> = {
  Management: [
    {
      name: "Michael Hughes, D.C.",
      title: "Co-CEO, Executive Director & Chiropractor",
      bio: "Dr. Michael Hughes, personally recruited by Dr. Jim Parker, leads thriving practices in Texas and Colorado. He specializes in neurological family care, pediatrics, and spinal decompression while mentoring interns from multiple chiropractic universities.",
    },
    {
      name: "David Hughes, D.C.",
      title: "Co-CEO, Clinical Director & Chiropractor",
      bio: "Dr. David Hughes knew at 14 that he wanted to be a chiropractor. He earned his B.S. in Anatomy from Parker College of Chiropractic and has since specialized in neurological family care, pediatrics, and pre- and post-natal chiropractic.",
    },
    {
      name: "Shari Hughes",
      title: "Chief Operating Officer",
      bio: "Shari Hughes serves as Chief Operating Officer, overseeing the day-to-day operations across all Well Adjusted Chiropractic locations.",
    },
  ],
  "Arlington, TX": [
    { name: "Dr. Michael Hughes", title: "Chiropractor", bio: "Leading the Arlington location with expertise in neurological family care." },
    { name: "Staff Member", title: "Office Manager", bio: "Managing patient care and office operations at the Arlington location." },
  ],
  "Loveland, CO": [
    { name: "Dr. David Hughes", title: "Chiropractor", bio: "Providing excellent chiropractic care at the Loveland location." },
    { name: "Staff Member", title: "Office Manager", bio: "Supporting patient care at the Loveland clinic." },
  ],
  "Greeley, CO": [
    { name: "Dr. Associate", title: "Chiropractor", bio: "Delivering quality chiropractic care in Greeley." },
  ],
  "Fort Collins, CO": [
    { name: "Dr. Associate", title: "Chiropractor", bio: "Serving the Fort Collins community with expert chiropractic care." },
  ],
  "Erie, CO": [
    { name: "Dr. Associate", title: "Chiropractor", bio: "Providing comprehensive care at the Erie location." },
  ],
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
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
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
              <div key={member.name} className="group relative rounded-lg overflow-hidden">
                <div className="h-[400px] bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading text-4xl text-primary">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm p-4 text-center">
                  <h3 className="font-heading text-lg text-primary-foreground">{member.name}</h3>
                  <p className="text-xs text-primary-foreground/80 font-body">{member.title}</p>
                </div>
                {/* Hover bio */}
                <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="font-heading text-xl text-primary-foreground mb-2">{member.name}</h3>
                    <p className="text-sm text-primary-foreground/90 font-body leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetTheTeam;
