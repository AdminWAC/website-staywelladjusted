import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

interface NavChild {
  label: string;
  path: string;
  external?: boolean;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  path: string;
  external?: boolean;
  children?: NavChild[];
}

interface ServiceItem {
  label: string;
  path: string;
}

const allServices: ServiceItem[] = [
  { label: "Chiropractic Care", path: "/chiropractic-care" },
  { label: "Spinal Decompression", path: "/spinal-decompression" },
  { label: "Massage Therapy", path: "/massage-therapy" },
  { label: "PEMF Therapy", path: "/pemf-therapy" },
  { label: "Sports Physicals", path: "/sports-physicals" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "DOT Exam", path: "#" },
  { label: "Diagnostic Ultra Sound", path: "#" },
  { label: "Custom Foot Orthotics", path: "/custom-foot-orthotics" },
  { label: "Intersegmental Traction", path: "/intersegmental-traction" },
  { label: "Spinal Orthotics", path: "/spinal-orthotics" },
  { label: "Vibe Plate", path: "/vibe-plate" },
  { label: "Wobble Discs", path: "/wobble-discs" },
  { label: "Dual Shockwave", path: "/dual-shockwave" },
  { label: "Weight Loss", path: "/weight-loss" },
  { label: "Saatva Mattress Partner", path: "/saatva-mattress-partner" },
];

// Active services per location (based on the reference images)
const locationActiveServices: Record<string, string[]> = {
  "Loveland": [
    "Chiropractic Care", "Spinal Decompression", "Massage Therapy", "PEMF Therapy",
    "Sports Physicals", "Nutrition", "Custom Foot Orthotics", "Intersegmental Traction",
    "Spinal Orthotics", "Wobble Discs", "Dual Shockwave", "Weight Loss", "Saatva Mattress Partner",
  ],
  "Greeley": [
    "Chiropractic Care", "Spinal Decompression",
    "Sports Physicals", "Nutrition", "Diagnostic Ultra Sound",
    "Custom Foot Orthotics", "Spinal Orthotics", "Wobble Discs",
    "Dual Shockwave", "Weight Loss", "Saatva Mattress Partner",
  ],
  "Fort Collins": [
    "Chiropractic Care", "Spinal Decompression", "Massage Therapy",
    "Sports Physicals", "Nutrition", "DOT Exam",
    "Custom Foot Orthotics", "Spinal Orthotics", "Wobble Discs",
    "Dual Shockwave", "Weight Loss", "Saatva Mattress Partner",
  ],
  "Arlington": [
    "Chiropractic Care", "Spinal Decompression",
    "Sports Physicals", "Nutrition",
    "Custom Foot Orthotics", "Spinal Orthotics", "Vibe Plate",
    "Wobble Discs", "Weight Loss", "Saatva Mattress Partner",
  ],
  "Erie": [
    "Chiropractic Care", "Spinal Decompression", "Massage Therapy",
    "Sports Physicals", "Nutrition",
    "Custom Foot Orthotics", "Spinal Orthotics",
    "Wobble Discs", "Dual Shockwave", "Weight Loss", "Saatva Mattress Partner",
  ],
};

const serviceLocations = [
  { label: "Loveland", path: "/chiropractor-loveland-co" },
  { label: "Greeley", path: "/chiropractor-greeley-co" },
  { label: "Fort Collins", path: "/chiropractor-fort-collins-co" },
  { label: "Arlington", path: "/chiropractor-arlington-tx" },
  { label: "Erie", path: "/chiropractor-erie-co" },
];

const navItems: NavItem[] = [
  { label: "HEALTH STARTS HERE", path: "/health-starts-here" },
  {
    label: "SERVICES",
    path: "#",
  },
  {
    label: "TESTIMONIALS",
    path: "/review-us",
    children: [
      { label: "Review Us", path: "/review-us" },
    ],
  },
  {
    label: "ABOUT",
    path: "/history",
    children: [
      { label: "History", path: "/history" },
      { label: "Meet The Team", path: "/meet-the-team" },
      { label: "Our Blog", path: "/blog" },
      { label: "Our Technique", path: "/our-technique" },
    ],
  },
  {
    label: "CONTACT US",
    path: "/contact-us",
    children: [
      { label: "Book an Event", path: "https://staywelladjusted.com/book-an-event/", external: true },
      { label: "Careers", path: "https://staywelladjusted.com/careers/", external: true },
      {
        label: "Internship",
        path: "#",
        children: [
          { label: "Parker University", path: "https://staywelladjusted.com/parker-university/", external: true },
          { label: "Life University", path: "https://staywelladjusted.com/life-university/", external: true },
          { label: "Logan University", path: "https://staywelladjusted.com/logan-university/", external: true },
          { label: "Sherman College", path: "https://staywelladjusted.com/sherman-college/", external: true },
          { label: "Local Universities", path: "https://staywelladjusted.com/local-university/", external: true },
        ],
      },
      { label: "Media Request", path: "https://staywelladjusted.com/media-request/", external: true },
      { label: "Merge Your Practice", path: "https://staywelladjusted.com/merge-your-practice/", external: true },
      {
        label: "Locations",
        path: "#",
        children: [
          { label: "Arlington, TX", path: "/chiropractor-arlington-tx" },
          { label: "Greeley, CO", path: "/chiropractor-greeley-co" },
          { label: "Loveland, CO", path: "/chiropractor-loveland-co" },
          { label: "Fort Collins, CO", path: "/chiropractor-fort-collins-co" },
          { label: "Erie, CO", path: "/chiropractor-erie-co" },
        ],
      },
    ],
  },
  {
    label: "DUAL SHOCKWAVE",
    path: "/dual-shockwave",
  },
];

const SCHEDULE_URL = "/schedule-an-appointment-new-patient-special-offer";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Get locations that offer a given service
  const getLocationsForService = (serviceName: string): string[] => {
    return Object.entries(locationActiveServices)
      .filter(([, services]) => services.includes(serviceName))
      .map(([loc]) => loc);
  };
  const location = useLocation();

  const renderLink = (child: NavChild, className: string, onClick?: () => void) => {
    if (child.external) {
      return (
        <a
          key={child.label}
          href={child.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
        >
          {child.label}
        </a>
      );
    }
    return (
      <Link
        key={child.label}
        to={child.path}
        className={className}
        onClick={onClick}
      >
        {child.label}
      </Link>
    );
  };

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images-lp-francio/no-bg-banner-well-adjusted-image-1640x662-removebg.png"
            alt="Well Adjusted Chiropractic"
            className="h-14"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => {
            // Special handling for SERVICES
            if (item.label === "SERVICES") {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => {
                    setOpenDropdown("SERVICES");
                    setHoveredLocation("Loveland");
                  }}
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setHoveredLocation(null);
                    setHoveredService(null);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-body font-semibold tracking-wider transition-colors hover:text-primary ${
                      location.pathname === item.path ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  {openDropdown === "SERVICES" && (
                    <div className="absolute top-full left-0 flex bg-background shadow-lg rounded-md z-50 min-w-[480px]">
                      {/* Left: locations */}
                      <div className="min-w-[180px] py-2 border-r border-border">
                        {serviceLocations.map((loc) => {
                          const isLocationActive = hoveredLocation === loc.label;
                          const isHighlightedByService = hoveredService
                            ? getLocationsForService(hoveredService).includes(loc.label)
                            : false;
                          return (
                            <div
                              key={loc.label}
                              className={`flex items-center justify-between px-4 py-2 text-sm font-body cursor-pointer transition-colors ${
                                isLocationActive
                                  ? "bg-primary text-primary-foreground font-semibold"
                                  : isHighlightedByService
                                    ? "bg-primary/20 text-primary font-semibold"
                                    : "text-foreground hover:bg-muted"
                              }`}
                              onMouseEnter={() => {
                                setHoveredLocation(loc.label);
                                setHoveredService(null);
                              }}
                            >
                              <span>{loc.label}</span>
                              <ChevronDown className={`w-3 h-3 -rotate-90 ${isLocationActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                            </div>
                          );
                        })}
                      </div>
                      {/* Right: services */}
                      <div className="min-w-[220px] py-2">
                        {allServices.map((svc) => {
                          const isActive = hoveredLocation
                            ? locationActiveServices[hoveredLocation]?.includes(svc.label)
                            : false;
                          const serviceClassName = `block px-4 py-1.5 text-sm font-body transition-colors ${
                            isActive
                              ? "text-[#4a7fb5] font-bold hover:underline"
                              : "text-foreground/70"
                          } ${svc.path !== "#" ? "cursor-pointer" : "cursor-default"}`;

                          if (svc.path === "#") {
                            return (
                              <span
                                key={svc.label}
                                className={serviceClassName}
                                onMouseEnter={() => setHoveredService(svc.label)}
                                onMouseLeave={() => setHoveredService(null)}
                              >
                                {svc.label}
                              </span>
                            );
                          }

                          return (
                            <Link
                              key={svc.label}
                              to={svc.path}
                              className={serviceClassName}
                              onMouseEnter={() => setHoveredService(svc.label)}
                              onMouseLeave={() => setHoveredService(null)}
                              onClick={() => {
                                setOpenDropdown(null);
                                setHoveredLocation(null);
                                setHoveredService(null);
                              }}
                            >
                              {svc.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (item.children) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-body font-semibold tracking-wider transition-colors hover:text-primary text-secondary`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-body font-semibold tracking-wider transition-colors hover:text-primary ${
                      location.pathname === item.path ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3" />}
                  </Link>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[220px] z-50">
                    {item.children.map((child) => {
                      if (child.children) {
                        return (
                          <div
                            key={child.label}
                            className="relative"
                            onMouseEnter={() => setOpenSubDropdown(child.label)}
                            onMouseLeave={() => setOpenSubDropdown(null)}
                          >
                            <button
                              className="flex items-center justify-between w-full px-4 py-2 text-sm font-body text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {child.label}
                              {openSubDropdown === child.label ? (
                                <ChevronUp className="w-3 h-3 ml-2" />
                              ) : (
                                <ChevronDown className="w-3 h-3 ml-2" />
                              )}
                            </button>
                            {openSubDropdown === child.label && (
                              <div className="absolute top-0 left-full bg-background shadow-lg rounded-md py-2 min-w-[200px] z-50">
                                {child.children.map((sub) =>
                                  renderLink(
                                    sub,
                                    "block px-4 py-2 text-sm font-body text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return renderLink(
                        child,
                        "block px-4 py-2 text-sm font-body text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          to={SCHEDULE_URL}
          className="hidden lg:block bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-body font-bold tracking-wider hover:bg-primary/90 transition-colors"
        >
          SCHEDULE NOW
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className="block py-3 text-sm font-body font-semibold text-foreground border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <Link
            to={SCHEDULE_URL}
            className="block mt-4 bg-primary text-primary-foreground text-center px-6 py-3 rounded-full text-sm font-body font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            SCHEDULE NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
