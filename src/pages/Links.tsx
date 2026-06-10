import { useEffect } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
const logo = "http://staywelladjusted.com/favicon.ico";

const links = [
  {
    label: "Well Adjusted Chiropractic | $79 New Patient Special",
    url: "https://staywelladjusted.com/chiropractic-colorado",
  },
  {
    label: "Dual-Wave Regenerative Therapy | Well Adjusted Chiropractic (Colorado Only)",
    url: "https://staywelladjusted.com/shockwave-colorado",
  },
  {
    label: "Best of NoCo 2026",
    url: "https://staywelladjusted.com/vote-noco-best-chiro",
  },
  { label: "Website", url: "https://staywelladjusted.com/" },
  { label: "Facebook", url: "https://www.facebook.com/welladjustedloveland" },
  { label: "YouTube", url: "https://www.youtube.com/@welladjustedchiro" },
];

// TikTok icon (lucide doesn't have one)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21z" />
  </svg>
);

const Links = () => {
  useEffect(() => {
    document.title = "Well Adjusted Chiropractic | Links";
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white font-body py-10 px-4 flex flex-col items-center">


      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
          <img src={logo} alt="Well Adjusted Chiropractic" className="w-full h-full object-cover scale-110" />
        </div>

        {/* Name */}
        <h1 className="font-heading text-gold text-2xl md:text-3xl mt-5 text-center">
          Well Adjusted Chiropractic
        </h1>
        <p className="text-gold/80 text-sm mt-1 text-center">
          Soft Touch. Remarkable Results.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5 mt-5 text-gold">
          <a
            href="https://www.instagram.com/wac_loveland"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@gatewayfamilychiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@welladjustedchiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/welladjustedloveland"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Link buttons */}
        <div className="w-full mt-8 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#f5f0e8] hover:bg-white transition-colors rounded-full py-4 px-14 flex items-center justify-center text-navy text-sm md:text-base font-medium text-center shadow-md"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="absolute left-2 w-11 h-11 rounded-full object-cover"
              />
              <span className="px-2">{link.label}</span>
              <span className="absolute right-4 text-navy/60 text-xl leading-none">⋮</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
