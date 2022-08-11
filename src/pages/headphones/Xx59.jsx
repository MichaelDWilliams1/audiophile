import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteDataContext } from "../../context/useSiteData";
import Thumbnail from "../../components/Thumbnail";
import BestGear from "../../components/BestGear";

const Xx59 = () => {
  const { siteData, addToCart } = useContext(SiteDataContext);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  console.log(siteData);
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
              src={siteData[0]?.product[1]?.image.desktop}
            />
          </div>
          <div className=" flex justify-end items-center w-1/2 h-100">
            <div className="flex flex-col justify-between h-4/6 w-5/6">
              <div className="flex">
                <div className="w-16 text-zinc-500">N E W</div>
                <div className="text-zinc-500">P R O D U C T</div>
              </div>
              <div className="">
                <div className="text-5xl">XX59</div>
                <div className="text-5xl">HEADPHONES</div>
              </div>
              <div>
                <p className="text-md">
                Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                </p>
              </div>
              <p className="font-bold">{`$ ${siteData[0]?.product[1]?.price.toLocaleString()}`}</p>
              <div className="flex">
                <div className="bg-gray-200 h-20 w-2/6 flex items-center text-center mr-10">
                  {/* Need to add some state here */}
                  <div className="w-1/3">-</div>
                  <div className="w-1/3">1</div>
                  <div className="w-1/3">+</div>
                </div>
                <button
                onClick={() => addToCart(siteData[0]?.product[1])}
                  id={siteData[0]?.product[1]?.price}
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
              These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
              </div>
              <div className="leading-7">
              More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
              </div>
            </div>
          </div>
          <div className=" flex justify-end w-2/6 h-full">
            <div className=" h-3/4 w-full">
              <div className="text-5xl font-bold">IN THE BOX</div>
              <div className=" h-full w-full mt-10 leading-10">
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">Headphone Unit</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">2x</td>
                  <td className="w-3/4">Replacement Earcups</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">User Manual</td>
                </tr>
                <tr>
                  <td className="w-1/4 text-orange-600 font-bold">1x</td>
                  <td className="w-3/4">3.5mm 5m Audio Cable</td>
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
                src={siteData[0]?.product[1]?.gallery.first.desktop}
              />
            </div>
            <div className="imageContainer">
              <img
                className="h-full w-full rounded-xl"
                src={siteData[0]?.product[1]?.gallery.second.desktop}
              />
            </div>
          </div>
          <div className="h-full w-7/12">
            <img
              className="h-full w-full rounded-xl"
              src={siteData[0]?.product[1]?.gallery.third.desktop}
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

export default Xx59;
