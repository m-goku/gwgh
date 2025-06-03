import React from "react";
import Gap from "../components/Gap";

const page = () => {
  return (
    <div>
      <Gap />
      <section className="bg-white py-8 lg:py-28 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="my-8 xl:mb-16 xl:mt-12">
              <img
                className="w-full dark:hidden"
                src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989945/2148761770_x3mwf6.jpg"
                alt=""
              />
              {/* <img
                className="hidden w-full dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg"
                alt=""
              /> */}
              <Gap />
            </div>
            <div className="mx-auto max-w-2xl space-y-6">
              <ul className=" space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Brilliant 4.5K Retina display:{" "}
                  </span> */}
                  Green World Initiative is a grassroots nonprofit organization
                  dedicated to healing the Earth through reforestation and
                  sustainable agriculture. Founded on the belief that restoring
                  nature is both a global responsibility and a local
                  opportunity, we work with communities to plant trees, grow
                  food, and bring life back to degraded lands. We exist to
                  inspire a greener world — one where people and the planet
                  thrive together.
                </li>
                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    1080p FaceTime HD camera:{" "}
                  </span> */}
                  We operate in areas most affected by deforestation, soil
                  degradation, and food insecurity — especially rural
                  communities where reforestation can make the greatest
                  difference. From farmland to watersheds, from schools to
                  hillsides, our projects reach where healing is needed most
                </li>
              </ul>
            </div>

            <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12"></div>
            <div className="text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
