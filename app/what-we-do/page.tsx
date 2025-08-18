import React from "react";
import Gap from "../components/Gap";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div>
      <NavBar />
      <Gap />
      <section className="bg-white py-8 lg:py-28 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="my-8 xl:mb-16 xl:mt-12">
              <img
                className="w-full dark:hidden"
                src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989972/2148761816_bkkbbh.jpg"
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
                  At Green World Initiative, we restore life to the land — and
                  hope to the people who depend on it. Our work sits at the
                  intersection of ecological restoration, sustainable
                  agriculture, and community development. We believe that by
                  planting the right trees in the right places, and by equipping
                  local communities with climate-smart farming skills, we can
                  combat deforestation, protect water sources, revive
                  biodiversity, and build lasting resilience.
                </li>
                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    1080p FaceTime HD camera:{" "}
                  </span> */}
                  We plant trees to restore degraded land, cool the climate, and
                  revive biodiversity. From rural farmlands to schoolyards and
                  watersheds, our tree-planting projects are designed to serve
                  both the environment and local communities. We prioritize
                  native and fruit-bearing trees. We involve local youth,
                  farmers, and schools. We monitor survival rates and long-term
                  growth.
                </li>

                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Studio-quality mics for high-quality conversations:{" "}
                  </span> */}
                  We teach and support climate-smart farming methods that
                  integrate trees with crops, improving food security while
                  restoring the soil. Training on composting, water
                  conservation, and organic practices. Introduction of
                  shade-giving and nitrogen-fixing trees on farms. Support for
                  community gardens and income-generating crops.
                </li>

                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Six-speaker sound system: audio that really fills a room:{" "}
                  </span> */}
                  We work with schools, youth groups, and community leaders to
                  raise awareness about environmental protection and responsible
                  farming. Workshops and eco-clubs in schools. Tree-planting
                  days with students. Hands-on training for farmers and local
                  volunteers.
                </li>

                <li>
                  {/* <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    M1 chip: with great power comes great capability:{" "}
                  </span> */}
                  Every project is designed to uplift the people it serves. We
                  don’t just plant trees — we build capacity. Provide tools,
                  seeds, and training to smallholder farmers. Create green jobs
                  for local youth and women. Foster ownership, leadership, and
                  sustainability in every region we serve.
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
