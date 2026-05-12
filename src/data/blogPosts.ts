import imgDavid from "@/assets/team/david-hughes.png";
import correctiveChiropracticCover from "@/assets/blog/corrective-chiropractic-care.png";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
  category?: string;
  content?: BlogContent[];
  externalUrl?: string;
}

export type BlogContent =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; src: string; alt?: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "corrective-chiropractic-care-for-long-term-wellness",
    title: "Corrective Chiropractic Care for Long-Term Wellness",
    date: "May 8, 2025",
    author: "Dr. David Hughes",
    authorImage: imgDavid,
    authorBio:
      "Co-CEO, Clinical Director & Chiropractor at Well Adjusted Chiropractic. Dr. David specializes in neurologically based chiropractic, family care, and pediatrics.",
    category: "Chiropractic Care",
    excerpt:
      "If you're dealing with pain that keeps coming back, you might be ready for something better. We focus on the nervous system and spine to help your body heal from the inside out.",
    image: correctiveChiropracticCover,
    imageAlt:
      "Chiropractor at Well Adjusted performing a gentle corrective spinal adjustment on a patient",
    content: [
      {
        type: "p",
        text: "If you're dealing with pain that keeps coming back — and you've already tried things like pain meds or stretches — you might be ready for something better. At Well Adjusted Chiropractic, we don't just chase symptoms. We focus on the nervous system and spine to help your body heal from the inside out. Our goal is real, lasting change — not just short-term relief.",
      },
      {
        type: "p",
        text: "At Well Adjusted Chiropractic, we specialize in neurologically based chiropractic care—a precise, effective, and non-invasive approach to address the root causes of pain, rather than just its symptoms. Our treatments focus on long-term wellness, ensuring that you don't just feel better in the short term—you enjoy lasting results for years to come.",
      },
      { type: "h2", text: "What is Corrective Chiropractic Care?" },
      {
        type: "p",
        text: "Corrective chiropractic care helps fix the real problem behind your pain. It lines up your spine so your brain and body can talk to each other clearly. When your spine is off, everything feels off. We help you move better, feel better, and stay better — all without drugs or surgery.",
      },
      {
        type: "p",
        text: "At Well Adjusted Chiropractic, we emphasize a gentle, precise, and results-driven approach. Instead of resorting to aggressive techniques, our care focuses on non-invasive therapies that aim to restore alignment, improve mobility, and enhance your overall quality of life. Your care should match your body and your goals—not a preset routine. We take the time to understand what your body needs most and deliver gentle, effective support that works with your natural healing process.",
      },
      {
        type: "h2",
        text: "Why Choose Corrective Chiropractic Care in Arlington and the Surrounding Areas?",
      },
      {
        type: "p",
        text: "This care isn't about hiding pain — it's about fixing the problem. We use safe, gentle techniques to get your spine back into place, so your nervous system can work like it should. That's what leads to better movement, better energy, and better health that lasts.",
      },
      {
        type: "p",
        text: "Rather than masking symptoms, this approach restores spinal alignment in Loveland, Fort Collins, and Greeley, CO, and supports the nervous system—laying the foundation for long-term wellness and improved whole-body function.",
      },
      {
        type: "p",
        text: "Misalignments can result from posture issues, injuries, or everyday stress. Left unaddressed, they often contribute to chronic discomfort and nerve interference. At Well Adjusted Chiropractic, we use advanced, non-invasive techniques like spinal decompression and Pulsed Electromagnetic Field (PEMF) therapy to correct these misalignments gently and precisely—helping your body heal naturally and sustainably.",
      },
      {
        type: "h2",
        text: "Techniques and Treatments in Corrective Chiropractic Care in Erie and the Surrounding Areas",
      },
      {
        type: "p",
        text: "At Well Adjusted Chiropractic, we combine several advanced treatments to ensure comprehensive care that addresses your specific needs:",
      },
      { type: "h3", text: "1. Spinal Decompression" },
      {
        type: "p",
        text: "Spinal decompression is a gentle technique that focuses on stretching the spine, alleviating pressure from the spinal discs. This method has proven to be particularly effective for conditions like herniated discs and sciatica. By creating space between the vertebrae, spinal decompression allows the discs to return to their optimal position, reducing pain and promoting healing. This technique is a safe, non-invasive option that avoids surgery and medication, making it a preferred choice for many patients.",
      },
      { type: "h3", text: "2. PEMF Therapy" },
      {
        type: "p",
        text: "Pulsed Electromagnetic Field (PEMF) therapy uses electromagnetic fields to encourage healing at the cellular level. It helps promote blood circulation, reduce inflammation, and stimulate tissue repair. This therapy has shown remarkable results for patients dealing with chronic joint pain and soft tissue injuries. PEMF therapy uses safe energy to help your cells heal faster. It boosts blood flow, calms inflammation, and helps with tough pain — all without needing pills. We use it often to help people feel better, move better, and recover faster.",
      },
      { type: "h3", text: "3. Holistic Approaches" },
      {
        type: "p",
        text: "In addition to spinal decompression and PEMF therapy, we also offer a range of holistic treatments that complement chiropractic care. These include nutritional guidance, lifestyle advice, and stress management techniques. We look at the whole picture — not just your spine. We talk about things like food, stress, and daily habits, because they all affect how your body feels. Helping you heal means helping every part of your life work better together.",
      },
      {
        type: "h2",
        text: "Conditions Corrective Chiropractic Care in Greeley and the Surrounding Areas Can Address",
      },
      { type: "p", text: "We help with common problems like:" },
      {
        type: "ul",
        items: [
          "Neck pain from bad posture or too much screen time",
          "Headaches and migraines caused by tension and misalignment",
          "Sports injuries that need fast healing and better performance",
          "Ongoing back or joint pain",
        ],
      },
      {
        type: "p",
        text: "Instead of just treating the pain, we look at what's causing it — and help your body fix it naturally.",
      },
      {
        type: "h2",
        text: "The Holistic Benefits of Corrective Chiropractic Care in Fort Collins and the Surrounding Areas",
      },
      {
        type: "p",
        text: "When your body feels better, your mind feels better too. Our patients often say they feel calmer, clearer, and more balanced after care. That's because your spine and nervous system affect every part of your life — not just your back. Here's how:",
      },
      { type: "h3", text: "Physical Wellness" },
      {
        type: "p",
        text: "Regular chiropractic adjustments can significantly improve your physical wellness. By optimizing nervous system function, chiropractic care enhances communication within the body, helping you feel more energetic, balanced, and less stressed.",
      },
      { type: "h3", text: "Mental and Emotional Wellness" },
      {
        type: "p",
        text: "Many patients report significant improvements in their mood and mental clarity after chiropractic adjustments. As physical discomfort diminishes, stress and anxiety are often reduced. Chiropractic care provides a holistic solution to both physical and emotional wellness, ensuring you feel balanced and healthy in all aspects of life.",
      },
      { type: "h2", text: "How to Find the Right Chiropractor for You" },
      {
        type: "p",
        text: "Finding the right chiropractor matters. We use gentle, custom care that works with your body — no harsh cracking or one-size-fits-all routines. We listen, we evaluate, and we adjust based on what your body actually needs. Here's what to look for:",
      },
      { type: "h3", text: "Specialized Neurologically Based Care" },
      {
        type: "p",
        text: "Our team is trained in neurologically based chiropractic techniques that go far beyond standard care. We focus on restoring clear communication between your brain and body—because that's where real, lasting healing begins. This means we don't just treat symptoms—we restore communication between the brain and body for long-term wellness.",
      },
      { type: "h3", text: "Tailored, Gentle Treatments" },
      {
        type: "p",
        text: "We avoid aggressive popping, bending, or twisting. Instead, we use precise, non-invasive methods designed to work with your body—not against it. Every care plan is customized to your unique health history and goals.",
      },
      { type: "h3", text: "Trusted in Local Communities" },
      {
        type: "p",
        text: "From Fort Collins to Arlington, our clinics have earned the trust of patients who were frustrated with short-term fixes elsewhere. Hundreds of five-star reviews reflect our results-driven approach and compassionate care.",
      },
      {
        type: "p",
        text: "Whether you're in Loveland, Greeley, Erie, or any of our other service areas, Well Adjusted Chiropractic offers the expertise, technology, and personal attention you deserve.",
      },
      {
        type: "h2",
        text: "Is Corrective Chiropractic Care in Loveland and the Surrounding Areas Right for You?",
      },
      {
        type: "p",
        text: "Still looking for answers? You're not alone. Many of our patients come to us after trying everything else. At Well Adjusted Chiropractic, we don't give up — and we don't settle for quick fixes. We look deeper, listen better, and help your body do what it was built to do: heal.",
      },
      { type: "p", text: "Book your visit today and start feeling like yourself again." },
    ],
  },
  {
    slug: "what-to-consider-when-selecting-a-chiropractor",
    title: "What To Consider When Selecting A Chiropractor",
    date: "June 5, 2025",
    author: "Dr. David Hughes",
    authorImage: imgDavid,
    excerpt:
      "The chiropractic profession has a wide variety of techniques and philosophies, which can make it difficult to find a chiropractor who is the right fit.",
    image: "https://staywelladjusted.com/wp-content/uploads/2025/07/image-8.png",
    category: "Chiropractic Care",
    externalUrl:
      "https://staywelladjusted.com/blog/what-to-consider-when-selecting-a-chiropractor/",
  },
  {
    slug: "why-children-should-see-a-chiropractor",
    title: "Why Children Should See a Chiropractor",
    date: "November 12, 2024",
    author: "Dr. David Hughes",
    authorImage: imgDavid,
    excerpt:
      "Supporting Growing Bodies with Natural, Gentle Care. When people think of chiropractic care, they often picture adults — but kids can benefit too.",
    image:
      "https://staywelladjusted.com/wp-content/uploads/2024/11/%C2%A9OPS-GCC-093-scaled.jpg",
    category: "Family Care",
    externalUrl:
      "https://staywelladjusted.com/blog/why-children-should-see-a-chiropractor/",
  },
  {
    slug: "the-benefits-of-seeing-a-chiropractor-for-neck-pain",
    title: "The Benefits of Seeing a Chiropractor for Neck Pain",
    date: "June 27, 2025",
    author: "Dr. David Hughes",
    authorImage: imgDavid,
    excerpt:
      "Backed by Research. Delivered with Care. Neck pain affects millions — from working professionals and busy parents to athletes and teens.",
    image:
      "https://staywelladjusted.com/wp-content/uploads/2025/06/welladjusted-2025-06-27-11h10m27s032-scaled.webp",
    category: "Chiropractic Care",
    externalUrl:
      "https://staywelladjusted.com/blog/the-benefits-of-seeing-a-chiropractor-for-neck-pain/",
  },
  {
    slug: "how-chiropractic-care-helps-with-numbness-and-tingling",
    title: "How Chiropractic Care Helps with Numbness and Tingling",
    date: "October 15, 2025",
    author: "Dr. David Hughes",
    authorImage: imgDavid,
    excerpt:
      "Numbness and tingling are often signs of nerve interference. Learn how gentle chiropractic care can restore proper signaling.",
    image:
      "https://staywelladjusted.com/wp-content/uploads/2025/05/welladjusted-2025-05-08-13h36m24s149-scaled.webp",
    category: "Chiropractic Care",
    externalUrl: "https://staywelladjusted.com/our-blog/",
  },
  {
    slug: "how-to-reduce-muscle-inflammation-quickly",
    title: "How to Reduce Muscle Inflammation Quickly (Chiropractor Tips)",
    date: "March 12, 2026",
    author: "Francio Sousa",
    excerpt:
      "Practical, chiropractor-approved tips to calm muscle inflammation fast — without relying on medication.",
    image:
      "https://staywelladjusted.com/wp-content/uploads/2025/06/welladjusted-2025-06-27-11h10m27s032-scaled.webp",
    category: "Wellness",
    externalUrl: "https://staywelladjusted.com/our-blog/",
  },
];

export const getRelatedPosts = (slug: string, count = 5): BlogPost[] => {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
