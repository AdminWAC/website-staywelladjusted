import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkshopHero from "@/components/workshops/WorkshopHero";
import FeaturedWorkshop from "@/components/workshops/FeaturedWorkshop";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import PastWorkshopCard from "@/components/workshops/PastWorkshopCard";
import WorkshopVideoModal from "@/components/workshops/WorkshopVideoModal";
import WorkshopRegistrationModal, {
  type RegistrationTarget,
} from "@/components/workshops/WorkshopRegistrationModal";
import { useWorkshopStatus } from "@/components/workshops/useWorkshopStatus";
import {
  currentWorkshop,
  pastWorkshops,
  upcomingWorkshops,
  workshopCategories,
  type PastWorkshop,
  type UpcomingWorkshop,
} from "@/config/workshops";
import { trackEvent } from "@/lib/analytics";

const Workshops = () => {
  const { status } = useWorkshopStatus(currentWorkshop);
  const [registration, setRegistration] = useState<RegistrationTarget | null>(null);
  const [video, setVideo] = useState<PastWorkshop | null>(null);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Workshops | Well Adjusted Chiropractic";
  }, []);

  const openRegistration = (target: RegistrationTarget) => {
    trackEvent("workshop_reserve_click", {
      workshop_id: target.id,
      workshop_title: target.title,
      event_type: target.eventType,
    });
    setRegistration(target);
    trackEvent("workshop_registration_modal_open", {
      workshop_id: target.id,
      workshop_title: target.title,
      event_type: target.eventType,
    });
  };

  const handleFeaturedReserve = () =>
    openRegistration({
      id: currentWorkshop.id,
      title: currentWorkshop.title,
      dateLabel: currentWorkshop.dateLabel,
      eventType: currentWorkshop.eventType,
      location: currentWorkshop.location,
      formEmbed: currentWorkshop.registrationFormEmbed,
    });

  const handleCardReserve = (workshop: UpcomingWorkshop) =>
    openRegistration({
      id: workshop.id,
      title: workshop.title,
      dateLabel: workshop.dateLabel,
      eventType: workshop.eventType,
      location: workshop.location,
      formEmbed: workshop.registrationFormEmbed || currentWorkshop.registrationFormEmbed,
    });

  const openVideo = (workshop: PastWorkshop) => {
    trackEvent("past_workshop_open", {
      workshop_id: workshop.id,
      workshop_title: workshop.title,
      video_id: workshop.youtubeVideoId,
    });
    setVideo(workshop);
  };

  const filteredPast = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pastWorkshops.filter((w) => {
      const matchesCategory = category === "All" || w.category === category;
      const matchesQuery =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.presenter.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const hasCurrent = status !== "ended";
  const showFilters = workshopCategories.length > 1;

  return (
    <Layout>
      <WorkshopHero />

      {hasCurrent ? (
        <FeaturedWorkshop
          workshop={currentWorkshop}
          status={status}
          onReserve={handleFeaturedReserve}
        />
      ) : upcomingWorkshops.length === 0 ? (
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl md:text-4xl uppercase tracking-wide text-secondary">
              New workshops coming soon
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground">
              Explore previous sessions while we prepare our next live workshop.
            </p>
            {pastWorkshops.length > 0 ? (
              <Button asChild className="mt-6 font-body uppercase tracking-wide">
                <a href="#past-workshops">Browse past workshops</a>
              </Button>
            ) : (
              <Button asChild className="mt-6 font-body uppercase tracking-wide">
                <Link to="/contact-us">Contact us</Link>
              </Button>
            )}
          </div>
        </section>
      ) : null}

      {upcomingWorkshops.length > 0 ? (
        <section className="py-12 md:py-16 bg-[#fdf6ee]">
          <div className="max-w-[1340px] mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-4xl uppercase tracking-wide text-secondary text-center">
              Upcoming Workshops
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop) => (
                <WorkshopCard
                  key={workshop.id}
                  workshop={workshop}
                  onReserve={handleCardReserve}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {pastWorkshops.length > 0 ? (
        <section id="past-workshops" className="py-12 md:py-16 bg-background">
          <div className="max-w-[1340px] mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-4xl uppercase tracking-wide text-secondary text-center">
              Watch Past Workshops
            </h2>
            <p className="mt-3 text-center font-body text-muted-foreground">
              A growing library of recorded sessions from our doctors.
            </p>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {showFilters ? (
                <div className="flex flex-wrap gap-2">
                  {["All", ...workshopCategories].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      aria-pressed={category === cat}
                      className={`rounded-full border px-4 py-2 font-body text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        category === cat
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-primary/30 text-secondary hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              ) : (
                <span />
              )}
              <div className="md:w-72">
                <label htmlFor="workshop-search" className="sr-only">
                  Search past workshops
                </label>
                <Input
                  id="workshop-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search workshops"
                  className="font-body"
                />
              </div>
            </div>

            {filteredPast.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.map((workshop) => (
                  <PastWorkshopCard
                    key={workshop.id}
                    workshop={workshop}
                    onOpen={openVideo}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-10 text-center font-body text-muted-foreground">
                No workshops match your search yet.
              </p>
            )}
          </div>
        </section>
      ) : null}

      <WorkshopRegistrationModal
        open={registration !== null}
        onOpenChange={(open) => !open && setRegistration(null)}
        workshop={registration}
      />
      <WorkshopVideoModal
        open={video !== null}
        onOpenChange={(open) => !open && setVideo(null)}
        workshop={video}
      />
    </Layout>
  );
};

export default Workshops;
