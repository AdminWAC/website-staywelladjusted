import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blogs | Well Adjusted Chiropractic";
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.author || "").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Layout>
      <section className="bg-background py-16">
        <div className="max-w-[1340px] mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-primary text-center mb-10 tracking-wide">
            BLOGS
          </h1>

          {/* Search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-3xl mx-auto flex items-stretch gap-3 mb-12"
          >
            <div className="flex-1 flex items-center bg-card border border-border rounded-md px-4">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to start searching..."
                className="w-full bg-transparent py-3 outline-none font-body text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body font-semibold uppercase text-sm tracking-wider px-6 rounded-md hover:bg-primary/90 transition-colors"
            >
              Search
            </button>
          </form>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body">
              No posts found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
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
                      <h2 className="font-heading text-xl text-primary hover:text-primary/80 transition-colors mb-3 leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="font-body text-sm text-foreground/75 mb-6 line-clamp-4 flex-1">
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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
