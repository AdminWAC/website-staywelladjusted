import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, User, Tag, ChevronRight, Home } from "lucide-react";
import Layout from "@/components/Layout";
import { getPostBySlug, getRelatedPosts, type BlogContent } from "@/data/blogPosts";
import { toast } from "@/hooks/use-toast";

const renderBlock = (block: BlogContent, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="font-heading text-2xl md:text-3xl text-secondary mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-heading text-xl md:text-2xl text-primary mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="font-body text-base leading-relaxed text-foreground/85 mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc list-outside pl-6 mb-6 space-y-2 font-body text-foreground/85">
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "image":
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | Well Adjusted Chiropractic`;
      const desc = post.excerpt;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", desc);
    }
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  const related = getRelatedPosts(post.slug, 5);
  const articleContent = post.content?.filter((block) => block.type !== "image") ?? [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/admin@staywelladjusted.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          comment: formData.get("comment"),
          _subject: `New blog comment on: ${post.title}`,
          _template: "table",
          _captcha: "true",
          post_url: window.location.href,
        }),
      });
      if (res.ok) {
        toast({ title: "Comment submitted", description: "Thanks for your comment! We'll review it soon." });
        form.reset();
      } else {
        toast({ title: "Submission failed", description: "Please try again in a moment.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Submission failed", description: "Please check your connection and try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero header */}
      <section className="bg-gradient-to-b from-muted to-background py-12 md:py-16 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/our-blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>
          {post.category && (
            <span className="inline-flex items-center gap-1 text-xs font-body uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
          )}
          <h1 className="font-heading text-3xl md:text-5xl text-secondary mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-2">
              {post.authorImage ? (
                <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <User className="w-4 h-4" />
              )}
              <span className="text-foreground font-semibold">{post.author}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        {/* Main content */}
        <article>
          <img src={post.image} alt={post.imageAlt || post.title} className="rounded-xl w-full mb-8 object-cover max-h-[460px]" />

          <div className="prose-content">
            {articleContent.map(renderBlock)}
          </div>

          {/* Author bio card */}
          {post.authorBio && (
            <div className="mt-12 p-6 bg-muted rounded-xl flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              {post.authorImage && (
                <img src={post.authorImage} alt={post.author} className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-md" />
              )}
              <div>
                <p className="text-xs uppercase tracking-wider text-primary font-body font-semibold mb-1">About the Author</p>
                <h4 className="font-heading text-xl text-secondary mb-2">{post.author}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          )}

          {/* Reply form */}
          <div className="mt-12">
            <h3 className="font-heading text-2xl md:text-3xl text-secondary mb-2">Leave a Reply</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="comment" className="block font-body text-sm font-semibold text-foreground mb-2">
                  Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  maxLength={2000}
                  rows={6}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "Posting..." : "Post Comment"}
              </button>
            </form>
          </div>
        </article>

        {/* Sidebar - Related posts */}
        <aside>
          <div className="sticky top-24">
            <h3 className="font-heading text-xl text-secondary mb-4 pb-2 border-b-2 border-primary">
              Related Posts
            </h3>
            <ul className="space-y-5">
              {related.map((rp) => {
                const isExternal = !!rp.externalUrl;
                const inner = (
                  <>
                    <img src={rp.image} alt={rp.title} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-sm text-foreground group-hover:text-primary leading-snug line-clamp-3 transition-colors">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-body mt-1">
                        {rp.author} · {rp.date}
                      </p>
                    </div>
                  </>
                );
                return (
                  <li key={rp.slug}>
                    {isExternal ? (
                      <a href={rp.externalUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-3">
                        {inner}
                      </a>
                    ) : (
                      <Link to={`/blog/${rp.slug}`} className="group flex gap-3">
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default BlogPost;
