import React from "react";

const SocialProof = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              150,000+
            </dt>
            <dd className="font-light text-xl text-gray-500 dark:text-gray-400">
              Trees Planted
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              200+ Acres
            </dt>
            <dd className="font-light text-xl text-gray-500 dark:text-gray-400">
              Crops Cultivated
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50+</dt>
            <dd className="font-light text-xl text-gray-500 dark:text-gray-400">
              Communities Impacted
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
