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
import Special from "./pages/Special.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/health-starts-here" element={<HealthStartsHere />} />
          <Route path="/chiropractic-care" element={<ChiropracticCare />} />
          <Route path="/spinal-decompression" element={<SpinalDecompression />} />
          <Route path="/dual-shockwave" element={<DualShockwave />} />
          <Route path="/saatva-mattress-partner" element={<SaatvaMattressPartner />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/special" element={<Special />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
