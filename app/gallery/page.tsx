import React from "react";
import Gap from "../components/Gap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <NavBar />
      <Gap />
      <Gap />
      <div className="grid grid-cols-2 lg:py-28 md:grid-cols-4 gap-4">
        <div className="grid gap-4 ">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748518278/2148761780_ptz5sp.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989694/m-abnodey-W48i6oMFSCM-unsplash_aunr5q.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748518285/37106_qsrt1s.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989871/pexels-fatima-yusuf-323522203-30541313_uvpgy9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989871/annie-spratt-QYcSeY7vuZM-unsplash_b5pm4x.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989811/64585_cbuxap.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
