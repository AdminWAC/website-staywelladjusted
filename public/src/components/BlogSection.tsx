import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="relative py-20 bg-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_hsl(var(--primary)/0.7)_100%)]" />
      <div className="relative max-w-[1340px] mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground text-center mb-12 tracking-wide">
          LATEST BLOGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-xl text-primary hover:text-primary/80 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                </Link>
                <p className="font-body text-sm text-foreground/75 mb-5 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 self-start text-primary font-body font-semibold text-sm border border-primary rounded-full px-5 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-card text-primary font-body font-bold text-sm tracking-widest uppercase pl-8 pr-2 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            Show More
            <span className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
