import React from "react";

const OurWork = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Projects
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Crafted with skill and care to help our clients grow their
              business!
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Ghana
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Trees for Tomorrow
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This project focuses on reforesting previously deforested areas
                in rural communities by planting native tree species. Local
                youth and farmers are trained to care for seedlings, while
                regular monitoring ensures long-term survival and impact.
              </p>
              <a
                href="#"
                title=""
                className="text-white bg-lime-700 justify-center hover:bg-lime-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button"
              >
                View Project Details
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Ghana
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Green Farms Initiative
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                A community-driven agroforestry program that integrates crop
                farming with tree planting. This project promotes sustainable
                agriculture by helping smallholder farmers increase yields while
                restoring soil health and creating natural shade and windbreaks.
              </p>
              <a
                href="#"
                title=""
                className="text-white bg-lime-700 justify-center hover:bg-lime-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button"
              >
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Ghana
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Agro-Watershed Revival
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This project combines tree planting with sustainable farming
                practices around critical watershed areas. By integrating fruit
                trees, native plants, and contour farming on sloped lands near
                rivers and streams, we reduce soil erosion, retain water, and
                improve crop yields.
              </p>
              <a
                href="#"
                title=""
                className="text-white bg-lime-700 justify-center hover:bg-lime-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                role="button"
              >
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
