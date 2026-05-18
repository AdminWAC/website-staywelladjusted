import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SpinalDecompression from "./pages/SpinalDecompression.tsx";
import DualShockwave from "./pages/DualShockwave.tsx";
import SaatvaMattressPartner from "./pages/SaatvaMattressPartner.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

import HealthStartsHere from "./pages/HealthStartsHere.tsx";
import ChiropracticCare from "./pages/ChiropracticCare.tsx";

import MeetTheTeam from "./pages/MeetTheTeam.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Blog from "./pages/Blog.tsx";
import Special from "./pages/Special.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import ReviewUs from "./pages/ReviewUs.tsx";
import ThankYouCareersErieCO from "./pages/ThankYouCareersErieCO.tsx";
import ChiropractorArlingtonTX from "./pages/ChiropractorArlingtonTX.tsx";
import ChiropractorLovelandCO from "./pages/ChiropractorLovelandCO.tsx";
import ChiropractorGreeleyCO from "./pages/ChiropractorGreeleyCO.tsx";
import ChiropractorFortCollinsCO from "./pages/ChiropractorFortCollinsCO.tsx";
import ChiropractorErieCO from "./pages/ChiropractorErieCO.tsx";
import ScheduleAppointment from "./pages/ScheduleAppointment.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/health-starts-here" element={<HealthStartsHere />} />
          <Route path="/chiropractic-care" element={<ChiropracticCare />} />
          <Route path="/spinal-decompression" element={<SpinalDecompression />} />
          <Route path="/dual-shockwave" element={<DualShockwave />} />
          <Route path="/saatva-mattress-partner" element={<SaatvaMattressPartner />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/special" element={<Special />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<ContactUs />} />
          <Route path="/review-us" element={<ReviewUs />} />
          <Route path="/thank-you-careers-erie-co" element={<ThankYouCareersErieCO />} />
          <Route path="/chiropractor-arlington-tx" element={<ChiropractorArlingtonTX />} />
          <Route path="/chiropractor-loveland-co" element={<ChiropractorLovelandCO />} />
          <Route path="/chiropractor-greeley-co" element={<ChiropractorGreeleyCO />} />
          <Route path="/chiropractor-fort-collins-co" element={<ChiropractorFortCollinsCO />} />
          <Route path="/chiropractor-erie-co" element={<ChiropractorErieCO />} />
          <Route path="/schedule-an-appointment-new-patient-special-offer" element={<ScheduleAppointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
