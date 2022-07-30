import React, { useContext } from "react";
import { SiteDataContext } from "../context/useSiteData";

const BestGear = () => {
  const { siteData } = useContext(SiteDataContext);

  return (
    <section className="w-full h-4/5">
      <div className=" flex w-9/12 h-4/6 m-auto mt-24">
        <div className=" flex flex-col justify-center w-2/4">
          <div className=" flex flex-col justify-evenly h-4/6 w-5/6">
            <div>
              <p className="text-4xl">Bringing you the</p>
              <p className="text-4xl">
                <span className="text-orange-500 tezt-4xl">best</span> audio
                gear
              </p>
            </div>
            <div>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-2/4 rounded-xl">
          <img
            className="h-full w-full rounded-xl"
            src={`${siteData[0]?.home[2].bestGear}`}
          />
        </div>
      </div>
    </section>
  );
};

export default BestGear;
