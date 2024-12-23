import Card from "@/components/Card";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import UpComingWebinars from "@/components/UpComingWebinars";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.01]">
      <HeroSection />
      <FeaturedCourses />
      <Card />
      <UpComingWebinars />
      <Instructors />
      <Footer/>
    </main>
  );
};

export default Home;
