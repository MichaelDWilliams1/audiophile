import React, {useContext} from "react";
import { useNavigate, Link } from 'react-router-dom'
import { SiteDataContext } from "../context/useSiteData";
import Thumbnail from "../components/Thumbnail";
import BestGear from "../components/BestGear";

const HeadphonesProduct = () => {

const {siteData} = useContext(SiteDataContext)
const navigate = useNavigate();

  return (
    <>
    <header 
    className="h-1/4 bg-neutral-900 text-zinc-200 font-bold text-4xl">
        <hr className='w-10/12 m-auto border-1 border-white-500'></hr>
      <div className="flex justify-center items-center h-full w-full">HEADPHONES</div>
    </header>
    <section className="h-fit mt-24 w-full mb-16 md:mb-0">
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-9/12 m-auto">
            <div className="lg:w-1/2 h-1/2 lg:h-full">
                <img className="h-full w-full hidden lg:block" src={siteData[0]?.product[3]?.image.desktop} />
                <img className="h-full w-full hidden md:block lg:hidden" src={siteData[0]?.product[3]?.categoryImage.tablet} />
                <img className="h-full w-full md:hidden" src={siteData[0]?.product[3]?.categoryImage.mobile} />
            </div>
            <div className="flex justify-end items-center w-full lg:w-1/2">
                <div className="flex flex-col justify-between h-4/6 lg:w-5/6 space-y-6">
                    <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
                    <div className='w-16 text-zinc-500'>N E W</div>
                    <div className='text-zinc-500' >P R O D U C T</div>
                    </div>
                    <div className="text-center lg:text-left">
                        <div className="text-4xl md:text-5xl">XX99 MARK II</div>
                        <div className="text-4xl md:text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md text-center lg:text-left">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                    <Link className="flex justify-center lg:justify-start" to={`/item/${siteData[0]?.product[3].slug}`}><button className="md:w-2/6 w-5/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
           </div>
        </div>
        <div  className="flex flex-col lg:flex-row  w-11/12 lg:w-9/12 m-auto mt-24">
            <div className="flex order-1 lg:-order-none items-center w-full lg:w-1/2">
            <div className="flex flex-col justify-evenly h-4/6 lg:w-5/6 space-y-6 lg:ml-auto lg:mr-auto">
                    <div className="text-center lg:text-left mt-6 lg:mt-0">
                        <div className="text-4xl md:text-5xl">XX99 MARK I</div>
                        <div className="text-4xl md:text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md text-center lg:text-left">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    </div>
                   <Link className="flex justify-center lg:justify-start" to={`/item/${siteData[0]?.product[2].slug}`}><button className="md:w-2/6 w-5/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
            </div>
            <div className="lg:w-1/2 h-1/2 lg:h-full">
            <img className="h-full w-full hidden lg:block" src={siteData[0]?.product[2]?.image.desktop} />
            <img className="h-full w-full hidden md:block lg:hidden" src={siteData[0]?.product[2]?.categoryImage.tablet} />
            <img className="h-full w-full md:hidden" src={siteData[0]?.product[2]?.categoryImage.mobile} />
            </div>
        </div>
        <div  className="flex flex-col lg:flex-row  w-11/12 lg:w-9/12 m-auto mt-24">
            <div className="lg:w-1/2 h-1/2 lg:h-full">
            <img className="h-full w-full hidden lg:block" src={siteData[0]?.product[1]?.image.desktop} />
            <img className="h-full w-full hidden md:block lg:hidden" src={siteData[0]?.product[1]?.categoryImage.tablet} />
            <img className="h-full w-full  md:hidden" src={siteData[0]?.product[1]?.categoryImage.mobile} />
            </div>
            <div className=" flex justify-end items-center lg:w-1/2">
            <div className="flex flex-col justify-evenly h-4/6 lg:w-5/6 space-y-6">
                    <div className="text-center lg:text-left mt-6 lg:mt-0">
                        <div className="text-4xl md:text-5xl">XX99 MARK II</div>
                        <div className="text-4xl md:text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md text-center lg:text-left">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                   <Link className="flex justify-center lg:justify-start" to={`/item/${siteData[0]?.product[1].slug}`}> <button className="md:w-2/6 w-5/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
            </div>
        </div>
    </section>
<Thumbnail />
<BestGear />
    </>
  );
};

export default HeadphonesProduct;
