import React, { useContext } from "react";
import { SiteDataContext } from "../context/useSiteData";

const BestGear = () => {
  const { siteData } = useContext(SiteDataContext);

  return (
    <section className="w-full h-auto lg:h-4/5 flex mb-10">
      <div className=" flex flex-col lg:flex-row lg:w-9/12 w-5/6 lg:h-4/6 m-auto mt-24">
        <div className=" flex order-2 lg:order-1 flex-col justify-center lg:w-2/4">
          <div className="flex flex-col justify-evenly h-auto space-y-5 lg:w-5/6">
            <div className="flex flex-col mt-10 mb-3">
              <p className="text-4xl m-auto">Bringing you the <span className="text-orange-500 tezt-4xl visible lg:hidden">best</span></p>
              <p className="text-4xl m-auto">
                <span className="text-orange-500 tezt-4xl hidden lg:visible">best</span> audio
                gear
              </p>
            </div>
            <div >
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
        <div className="lg:w-2/4 rounded-xl">
          <img
            className="hidden lg:visible lg:h-full w-full object-cover rounded-xl"
            src={`${siteData[0]?.home[0].bestGear}`}
          />
           <img
            className="visible lg:hidden lg:h-full w-full object-cover rounded-xl"
            src={`${siteData[0]?.home[0].bestGearTab}`}
          />
        </div>
      </div>
    </section>
  );
};

export default BestGear;
