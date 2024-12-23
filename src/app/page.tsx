import Card from "@/components/Card";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.01]">
      <HeroSection />
      <FeaturedCourses />
      <Card/>
    </main>
  );
};

export default Home;
