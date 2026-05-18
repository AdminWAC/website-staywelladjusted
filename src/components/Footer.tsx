import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

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

const Footer = () => {
  const [igOpen, setIgOpen] = useState(false);
  const [fbOpen, setFbOpen] = useState(false);
  const igRef = useRef<HTMLDivElement>(null);
  const fbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (igRef.current && !igRef.current.contains(e.target as Node)) setIgOpen(false);
      if (fbRef.current && !fbRef.current.contains(e.target as Node)) setFbOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <footer className="bg-background border-t border-border">
      {/* Bottom footer - brand gold background */}
      <div className="bg-primary py-10">
        <div className="max-w-[1340px] mx-auto px-4">
          {/* Logo and social icons row */}
          <div className="flex items-center justify-between mb-6">
            <img
              src="/images-wp/header-logo.svg"
              alt="Well Adjusted Chiropractic"
              className="h-14 brightness-0 invert"
            />
            <div className="flex items-center gap-4">
              {/* Instagram with dropdown */}
              <div className="relative" ref={igRef}>
                <button
                  onClick={() => { setIgOpen(!igOpen); setFbOpen(false); }}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                {igOpen && (
                  <div className="absolute right-0 bottom-full mb-2 bg-white rounded-md shadow-lg py-2 min-w-[180px] z-[100]">
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
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                {fbOpen && (
                  <div className="absolute right-0 bottom-full mb-2 bg-white rounded-md shadow-lg py-2 min-w-[180px] z-[100]">
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
              {/* X/Twitter */}
              <a
                href="https://x.com/welladjustedco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/30 my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
            {/* Useful Links */}
            <div>
              <h4 className="font-heading text-base font-bold mb-4 uppercase">Useful Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2 font-body text-sm">
                  <li><Link to="/" className="hover:underline transition-colors font-semibold">Home</Link></li>
                  <li><Link to="/special" className="hover:underline transition-colors">Refer a Friend!</Link></li>
                  <li><Link to="/faq" className="hover:underline transition-colors">FAQ</Link></li>
                  <li><Link to="/health-starts-here" className="hover:underline transition-colors">Health Starts Here</Link></li>
                </ul>
                <ul className="space-y-2 font-body text-sm">
                  <li><Link to="/testimonials" className="hover:underline transition-colors">Testimonials</Link></li>
                  <li><Link to="/contact-us" className="hover:underline transition-colors">Locations</Link></li>
                  <li><Link to="/contact-us" className="hover:underline transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-2">
              <h4 className="font-heading text-base font-bold mb-4 uppercase">Contact Us</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">Arlington TX</p>
                    <a href="tel:(682) 277-1966" className="font-body text-sm font-bold hover:underline">(682) 277-1966</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">Fort Collins CO</p>
                    <a href="tel:(970) 714-2207" className="font-body text-sm font-bold hover:underline">(970) 714-2207</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">Greeley CO</p>
                    <a href="tel:(970) 888-7097" className="font-body text-sm font-bold hover:underline">(970) 888-7097</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">Erie CO</p>
                    <a href="tel:970-670-3607" className="font-body text-sm font-bold hover:underline">970-670-3607</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">Loveland CO</p>
                    <a href="tel:(970) 427-2543" className="font-body text-sm font-bold hover:underline">(970) 427-2543</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-8 h-8 p-1.5 rounded-full bg-white/20 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-body">General Contact</p>
                    <a href="https://staywelladjusted.com/#home-contact-us" className="font-body text-sm font-bold hover:underline">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground text-xs font-body space-x-3">
            <span>Copyright © 2025 <strong>WELL ADJUSTED CHIROPRACTIC</strong> All rights reserved.</span>
            <br className="md:hidden" />
            <Link to="/anti-discrimination" className="hover:underline">Anti-Discrimination</Link>
            <span>|</span>
            <Link to="/healthcare-disclaimer" className="hover:underline">Healthcare Disclaimer</Link>
            <span>|</span>
            <Link to="/hipaa-privacy-policy" className="hover:underline">HIPAA Policy</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-service" className="hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link to="/good-faith-estimate" className="hover:underline">Good Faith Estimate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
