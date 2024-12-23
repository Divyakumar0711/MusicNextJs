import React from "react";
import courseData from "../data/music_course.json";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Card = () => {
  interface musicSchoolTestimonials {
    quote: string;
    name: string;
    title: string;
  }
  const musicSchoolTestimonials = courseData.musicSchoolTestimonials.map(
    (musicSchoolTestimonials) => musicSchoolTestimonials
  );
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl md:max-w-7xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
