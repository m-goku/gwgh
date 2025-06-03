import React from "react";

const AboutUS = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989945/2148761770_x3mwf6.jpg"
            alt="dashboard image"
          />
          {/* <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        /> */}
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Who We Are
            </h2>
            <p className="mb-6 font-light text-lg text-gray-500 md:text-lg dark:text-gray-400">
              Green World Initiative is a nonprofit organization dedicated to
              restoring the planet through reforestation and sustainable
              agriculture. We work hand-in-hand with local communities to plant
              trees, grow crops, and revive ecosystems affected by deforestation
              and land degradation. Rooted in environmental stewardship and
              community empowerment, our mission is to create lasting change not
              just greener landscapes, but healthier, more resilient futures for
              generations to come.
            </p>
            <a
              href="/who-we-are"
              className="inline-flex items-center text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Read More
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
