"use client";
import Layout from "@/components/layout";
import CtaSection from "@/components/sections/home/cta-section";
import FeaturesSection from "@/components/sections/home/features-section";
import FooterSection from "@/components/sections/home/footer-section";
import HeroSection from "@/components/sections/home/hero-section";
import TechnologiesSection from "@/components/sections/home/technologies-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TechnologiesSection />
      <CtaSection />
      <FooterSection />
    </Layout>
  );
}
