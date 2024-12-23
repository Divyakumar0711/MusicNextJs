"use client";
import Link from "next/link";
import React from "react";
import courseData from "../data/music_course.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const FeaturedCourses = () => {
  interface courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }
  const featuredCourses = courseData.courses.filter(
    (courses: courses) => courses.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((courses: courses) => (
            <div
              key={courses.id}
              className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"
            >
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src={courses.image}
                    alt="person playing trumpet during night time"
                    width={200}
                    height={100}
                    className="object-contain  rounded-2xl "
                  />
                </div>
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {courses.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {courses.description}
                </p>

                <div className="my-7 "></div>
                <Link
                  href={`/courses/${courses.slug}`}
                  className="px-4 py-2 mx-10 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 "
                >
                  Learn More
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>{" "}
    </div>
  );
};

export default FeaturedCourses;
