import React from "react";
import courseData from "../data/music_course.json";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Card = () => {

  const musicSchoolTestimonials = courseData.musicSchoolTestimonials.map(
    (musicSchoolTestimonials) => musicSchoolTestimonials
  );
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

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
