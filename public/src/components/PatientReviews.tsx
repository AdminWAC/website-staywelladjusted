import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Info } from "lucide-react";

import wayneOchsner from "@/assets/reviews/wayne-ochsner.jpg";
import meganMcdonald from "@/assets/reviews/megan-mcdonald.jpg";
import christopherBradway from "@/assets/reviews/christopher-bradway.jpg";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  photo?: string;
  initial?: string;
  color?: string;
}

const reviews: Review[] = [
  { name: "Mark S. Morris", date: "2025-04-05", rating: 5, initial: "M", color: "bg-orange-500", text: "Wonderful team at Gateway! I have a long way to go but am so much better after only a few visits. Chronic lower back pain i..." },
  { name: "Wayne Ochsner", date: "2025-04-04", rating: 5, photo: wayneOchsner, text: "Gateway Family Chiropractic of Loveland, I highly recommend them. They are very friendly,..." },
  { name: "Barbara Ashley", date: "2025-04-02", rating: 5, initial: "B", color: "bg-red-500", text: "On time. Great care. Professional." },
  { name: "Mike Leonard", date: "2025-04-02", rating: 5, initial: "M", color: "bg-teal-700", text: "The staff is always friendly, helpful and professional. I have been to several chiropractors across Colorado and this is the..." },
  { name: "Mike Lambrecht", date: "2025-04-02", rating: 5, initial: "M", color: "bg-orange-500", text: "The staff at Gateway are amazing! They make you feel like family and have been a great help in keeping myself..." },
  { name: "Megan McDonald", date: "2025-03-21", rating: 5, photo: meganMcdonald, text: "Dorothy is a masterful massage therapist and a great human. I'm grateful to always have a consistent experience-relaxed..." },
  { name: "Theresa Chunko", date: "2025-03-18", rating: 5, initial: "T", color: "bg-teal-600", text: "Excellent service for the past 5 years. Making a positive impact on my health with regular adjustments. Experiencing a..." },
  { name: "Patrick Thompson", date: "2025-03-13", rating: 5, initial: "P", color: "bg-teal-700", text: "Great knowledge of how the body works and focused treatment on correction of problem not only alignment." },
  { name: "Christopher Bradway", date: "2025-03-13", rating: 5, photo: christopherBradway, text: "Brittany at your location has made monumental changes for me and my family and we are extremely grateful to be treate..." },
];

const VISIBLE = 5;

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" className="absolute -bottom-1 -right-1">
    <circle cx="24" cy="24" r="24" fill="white" />
    <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
    <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
    <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
    <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.001-.001 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline ml-1">
    <circle cx="12" cy="12" r="12" fill="#4285F4"/>
    <path d="M10 15.172l-3.586-3.586L5 13l5 5 9-9-1.414-1.414z" fill="white"/>
  </svg>
);

const PatientReviews = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [showTrustInfo, setShowTrustInfo] = useState(false);
  const maxStart = reviews.length - VISIBLE;

  const scrollLeft = () => setStartIdx((p) => Math.max(0, p - 1));
  const scrollRight = () => setStartIdx((p) => Math.min(maxStart, p + 1));

  const visible = reviews.slice(startIdx, startIdx + VISIBLE);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1340px] mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-10 tracking-wide uppercase">
          Patient Reviews
        </h2>

        <div className="relative bg-muted rounded-xl p-8 pb-14">
          {startIdx > 0 && (
            <button onClick={scrollLeft} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {visible.map((review) => (
              <div key={review.name + review.date} className="bg-background rounded-lg p-5 shadow-sm text-center flex flex-col items-center">
                <div className="relative mb-3">
                  {review.photo ? (
                    <img src={review.photo} alt={review.name} loading="lazy" width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
                  ) : (
                    <div className={`w-14 h-14 rounded-full ${review.color} flex items-center justify-center text-white font-heading text-xl`}>
                      {review.initial}
                    </div>
                  )}
                  <GoogleIcon />
                </div>

                <h4 className="font-body font-bold text-foreground text-sm">{review.name}</h4>
                <p className="text-xs text-muted-foreground font-body mb-2">{review.date}</p>

                <div className="flex items-center justify-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <VerifiedIcon />
                </div>

                <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">{review.text}</p>
                <button className="text-muted-foreground font-body text-xs mt-2 hover:underline">Read more</button>
              </div>
            ))}
          </div>

          {startIdx < maxStart && (
            <button onClick={scrollRight} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground">
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="absolute bottom-4 right-6 relative inline-block float-right">
            <button onClick={() => setShowTrustInfo(!showTrustInfo)} className="bg-green-700 hover:bg-green-800 text-white text-xs font-body font-semibold px-4 py-1.5 rounded flex items-center gap-1.5">
              Verified by Trustindex
              <Info className="w-3.5 h-3.5" />
            </button>
            {showTrustInfo && (
              <div className="absolute bottom-full right-0 mb-2 w-72 bg-foreground text-background text-xs font-body p-4 rounded-lg shadow-lg z-50">
                <p>
                  <strong>Trustindex verified badge</strong> is the Universal Symbol of Trust. Only the greatest companies can get the verified badge who has a review score above 4.5, based on customer reviews over the past 12 months.{" "}
                  <a href="https://www.trustindex.io/" target="_blank" rel="noopener noreferrer" className="underline">Read more</a>
                </p>
                <div className="absolute bottom-0 right-8 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;
