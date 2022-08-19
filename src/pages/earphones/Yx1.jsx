import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteDataContext } from "../../context/useSiteData";
import Thumbnail from "../../components/Thumbnail";
import BestGear from "../../components/BestGear";

const Yx1 = () => {
  const [addOrSubtractAmountOfItem, setAddOrSubtractAmountOfItem] = useState(1)

  const { siteData, addToCart } = useContext(SiteDataContext);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const addOrSubtract = (e) => {
if(addOrSubtractAmountOfItem === 1 && e.target.id === 'minus') return

switch(e.target.id){
  case 'add':
    return setAddOrSubtractAmountOfItem(addOrSubtractAmountOfItem + 1)
  case 'minus':
    return setAddOrSubtractAmountOfItem(addOrSubtractAmountOfItem - 1)
}
  }
  

  return (
    <>
      <section className="h-full w-full">
        <div
          onClick={navigateBack}
          className="k w-9/12 h-1/6 flex items-center m-auto cursor-pointer"
        >
          Go back
        </div>

        <div className=" flex h-100 w-9/12 m-auto">
          <div className=" w-1/2 h-full">
            <img
              className="h-full w-full"
              src={siteData[0]?.product[0]?.image.desktop}
            />
          </div>
          <div className=" flex justify-end items-center w-1/2 h-100">
            <div className="flex flex-col justify-between h-4/6 w-5/6">
              <div className="flex">
                <div className="w-16 text-zinc-500">N E W</div>
                <div className="text-zinc-500">P R O D U C T</div>
              </div>
              <div className="">
                <div className="text-5xl">YX1 WIRELESS</div>
                <div className="text-5xl">EARPHONES</div>
              </div>
              <div>
                <p className="text-md">
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.                </p>
              </div>
              <p className="font-bold">{`$ ${siteData[0]?.product[0]?.price.toLocaleString()}`}</p>
              <div className="flex">
                <div className="bg-gray-200 h-20 w-2/6 flex items-center text-center mr-10">
                  {/* Need to add some state here */}
                  <div onClick={(e) => addOrSubtract(e)} id='minus' className="w-1/3">-</div>
                  <div className="w-1/3">{addOrSubtractAmountOfItem}</div>
                  <div onClick={(e) => addOrSubtract(e)} id='add' className="w-1/3">+</div>
                </div>
                <button
                onClick={() => addToCart( addOrSubtractAmountOfItem, siteData[0]?.product[0])}
                // just a reminder that id is a place holder. find something more usefull
                  id={siteData[0]?.product[0]?.price}
                  className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-3/4">
        <div className=" flex h-4/6 w-9/12 m-auto">
          <div className=" flex flex-col justify-between w-4/6 h-full">
            <div className="w-5/6 h-full flex flex-col justify-between">
              <div className="text-5xl font-bold">Features</div>
              <div className="leading-7">
              Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.              </div>
              <div className="leading-7">
              The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.              </div>
            </div>
          </div>
          <div className=" flex justify-end w-2/6 h-full">
            <div className=" h-3/4 w-full">
              <div className="text-5xl font-bold">IN THE BOX</div>
              <div className=" h-full w-full mt-10 leading-10">
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">2x</td>
                  <td className="w-3/4">Earphone Unit</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">6x</td>
                  <td className="w-3/4">Multi-size Earplugs</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">User Manual</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">USB-C Charging Cable</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">Travel Pouch</td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex justify-center items-center ">
        <div className="w-9/12 h-4/6 flex">
          <div className="h-full flex flex-col justify-between w-5/12">
            <div className="imageContainer rounded-xl">
              <img
                className="h-full w-full rounded-xl"
                src={siteData[0]?.product[0]?.gallery.first.desktop}
              />
            </div>
            <div className="imageContainer">
              <img
                className="h-full w-full rounded-xl"
                src={siteData[0]?.product[0]?.gallery.second.desktop}
              />
            </div>
          </div>
          <div className="h-full w-7/12">
            <img
              className="h-full w-full rounded-xl"
              src={siteData[0]?.product[0]?.gallery.third.desktop}
            />
          </div>
        </div>
      </section>
      <section className=" h-4/5 flex flex-col justify-evenly items-center">
        <div className="text-4xl">YOU MAY ALSO LIKE</div>
        <div className=" flex justify-between h-3/4 w-9/12">
          <div className=" h-full w-4/12 mr-5">
            <div className=" h-4/6 w-full">
              <img className="h-full w-full" src={siteData[0]?.product[3]?.others[0].image.desktop} />
            </div>
            <div className=" flex flex-col items-center h-2/6 w-full">
              <div className="h-1/2 w-full  flex items-center justify-center">XX99 MARK I</div>
              <button className="h-1/2 w-2/4 bg-orange-400">SEE PRODUCT</button>
            </div>
          </div>
          <div className=" h-full w-4/12 mr-5">
            <div className=" h-4/6 w-full">
            <img className="h-full w-full" src={siteData[0]?.product[3]?.others[1].image.desktop} />
            </div>
            <div className=" flex flex-col items-center h-2/6 w-full">
              <div className="h-1/2 w-full  flex items-center justify-center">XX59</div>
              <button className="h-1/2 w-2/4 bg-orange-400">SEE PRODUCT</button>
            </div>
          </div>
          <div className=" h-full w-4/12 ">
            <div className=" h-4/6 w-full">
            <img className="h-full w-full" src={siteData[0]?.product[3]?.others[2].image.desktop} />
            </div>
            <div className=" h-2/6 w-full flex flex-col items-center justify-between">
              <div className="h-1/2 w-full  flex items-center justify-center">
                ZX9 SPEAKER
              </div>
              <button className="h-1/2 w-2/4 bg-orange-400">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </section>
<Thumbnail />
<BestGear />
    </>
  );
};

export default Yx1;