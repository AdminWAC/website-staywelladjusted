const WellAdjustedExperience = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-8">
          THE WELL ADJUSTED EXPERIENCE
        </h2>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            poster="/images-wp/mask-group-11.png"
            className="w-full h-full object-cover"
          >
            <source
              src="/images-lp-francio/welladjustedchiropracticvideo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default WellAdjustedExperience;
