import { Link } from "react-router-dom";

const blogPosts = [
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2025/07/image-8.png",
    title: "What To Consider When Selecting A Chiropractor",
    excerpt: "The chiropractic profession has a wide variety of techniques and philosophies, which can make it difficult to find a chiropractor who is the right fit",
    slug: "what-to-consider-when-selecting-a-chiropractor",
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2024/11/%C2%A9OPS-GCC-093-scaled.jpg",
    title: "Why Children Should See a Chiropractor",
    excerpt: "Supporting Growing Bodies with Natural, Gentle Care When people think of chiropractic care, they often picture adults seeking relief from back or neck pain. But",
    slug: "why-children-should-see-a-chiropractor",
  },
  {
    image: "https://staywelladjusted.com/wp-content/uploads/2025/06/welladjusted-2025-06-27-11h10m27s032-scaled.webp",
    title: "The Benefits of Seeing a Chiropractor for Neck Pain",
    excerpt: "Backed by Research. Delivered with Care. Neck pain affects millions of people — from working professionals and busy parents to athletes and teens.",
    slug: "the-benefits-of-seeing-a-chiropractor-for-neck-pain",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1340px] mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-secondary text-center mb-10">
          LATEST BLOGS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body line-clamp-2">{post.excerpt}</p>
              <span className="text-primary font-body font-semibold text-sm mt-2 inline-block">
                Read More
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://staywelladjusted.com/our-blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-body font-semibold text-sm hover:underline uppercase"
          >
            SHOW MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
