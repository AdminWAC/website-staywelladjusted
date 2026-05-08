import { useState, useRef, useEffect } from "react";
import { MapPin, Instagram, Facebook } from "lucide-react";

const locations = [
  { label: "Arlington TX", href: "/chiropractor-arlington-tx" },
  { label: "Greeley CO", href: "/chiropractor-greeley-co" },
  { label: "Loveland CO", href: "/chiropractor-loveland-co" },
  { label: "Fort Collins CO", href: "/chiropractor-fort-collins-co" },
  { label: "Erie CO", href: "/chiropractor-erie-co" },
];

const igLinks = [
  { label: "Arlington TX IG", href: "https://www.instagram.com/wac_arlington/" },
  { label: "Greeley CO IG", href: "https://www.instagram.com/wac_greeley/" },
  { label: "Loveland CO IG", href: "https://www.instagram.com/wac_loveland/" },
  { label: "Fort Collins CO IG", href: "https://www.instagram.com/wac_fortcollins/" },
  { label: "Erie CO IG", href: "https://www.instagram.com/wac_erie/" },
];

const fbLinks = [
  { label: "Arlington TX FB", href: "https://www.facebook.com/welladjustedtx/" },
  { label: "Greeley CO FB", href: "https://www.facebook.com/profile.php?id=61575434560191" },
  { label: "Loveland CO FB", href: "https://www.facebook.com/profile.php?id=61575433301607" },
  { label: "Fort Collins CO FB", href: "https://www.facebook.com/profile.php?id=61575765027322" },
  { label: "Erie CO FB", href: "https://www.facebook.com/wacchiroerie/" },
];

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [igOpen, setIgOpen] = useState(false);
  const [fbOpen, setFbOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const igRef = useRef<HTMLDivElement>(null);
  const fbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
      if (igRef.current && !igRef.current.contains(e.target as Node)) setIgOpen(false);
      if (fbRef.current && !fbRef.current.contains(e.target as Node)) setFbOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-secondary text-primary-foreground py-2 px-4">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between">
        <span className="font-body text-sm font-medium tracking-wide">
          Formerly Gateway Family Chiropractic
        </span>
        <div className="flex items-center gap-4">
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View all Locations
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 min-w-[180px] z-[100]">
                {locations.map((loc) => (
                  <a
                    key={loc.href}
                    href={loc.href}
                    className={`block px-5 py-2.5 text-sm font-body text-center transition-colors ${
                      loc.label === "Arlington TX"
                        ? "bg-primary text-white font-semibold"
                        : "text-secondary hover:bg-muted"
                    }`}
                  >
                    {loc.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {/* Instagram with dropdown */}
            <div className="relative" ref={igRef}>
              <button
                onClick={() => { setIgOpen(!igOpen); setFbOpen(false); }}
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </button>
              {igOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 min-w-[180px] z-[100]">
                  {igLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-2.5 text-sm font-body text-center text-secondary hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Facebook with dropdown */}
            <div className="relative" ref={fbRef}>
              <button
                onClick={() => { setFbOpen(!fbOpen); setIgOpen(false); }}
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </button>
              {fbOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 min-w-[180px] z-[100]">
                  {fbLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-2.5 text-sm font-body text-center text-secondary hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* X/Twitter - single link */}
            <a href="https://x.com/welladjustedco" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;