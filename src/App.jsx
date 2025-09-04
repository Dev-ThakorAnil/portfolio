import React from "react";
import Layout from "./layout"; // <-- import your Layout component
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import PortfolioSection from "./components/home/PortfolioSection";
import ServicesSection from "./components/home/ServicesSection";
import ContactSection from "./components/home/ContactSection";

export default function App() {
  return (
    <Layout currentPageName="Home">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}
