import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl   mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          <div className=" lg:mt-0 lg:col-span-5 lg:flex mr-5">
            <img
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/v1748517471/Untitled_design_mfutt4.png"
              alt="mockup"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Grow Crops. Feed Communities. Change the World.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-lg text-gray-500 lg:mb-8 md:text-xl lg:text-xl dark:text-gray-400">
              Green World Initiative plants trees and crops to fight
              deforestation, restore ecosystems, and support local livelihoods.
              Be part of the solution.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          {/* <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
