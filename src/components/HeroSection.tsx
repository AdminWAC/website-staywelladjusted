const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/images-lp-francio/welladjustedchiropracticvideo.mp4"
      />
      <div className="absolute inset-0 bg-secondary/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg overflow-hidden max-w-[540px]">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold text-center pt-6 px-6">
              $79 New Patient Special
            </h2>
            <iframe
              src="https://link.ngynai.com/widget/form/6zrGCjjaRagxIx8eWnOs"
              style={{ width: "100%", height: "700px", border: "none", overflow: "hidden" }}
              title="New Patient Special Form"
              scrolling="no"
            />
          </div>
          <div>{/* Right side is the video showing through */}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
