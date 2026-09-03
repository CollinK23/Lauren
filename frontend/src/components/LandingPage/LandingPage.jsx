import { useEffect } from "react";
import { useTheme } from "../theme-provider";
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
import About from "./About";
import Spacer from "./Spacer";

export default function LandingPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");

    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "instant", block: "start" });
      });
    }
  }, []);

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
      <Spacer />
      {/* <ProjectCarousel /> */}
      {/* <ProjectSection /> */}
      <Bento />
      <Spacer />
      <Work />
      <Spacer />

      <About />
      <Spacer />
      {/* <DynamicFrameLayout /> */}

      <Footer />
    </div>
  );
}
