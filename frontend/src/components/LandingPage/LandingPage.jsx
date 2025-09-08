import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectSection from "./Magazine";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Download,
  ExternalLink,
} from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import ProjectCarousel from "./Project";
import Footer from "./Footer";
import Bento from "./Bento";
import DynamicFrameLayout from "./DynamicFrameLayout";

export default function LandingPage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />
      <ProjectCarousel />
      <Work />
      {/* <ProjectSection /> */}
      <Bento />

      <DynamicFrameLayout />

      <Footer />
    </div>
  );
}
