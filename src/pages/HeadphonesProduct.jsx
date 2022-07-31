import React, {useContext} from "react";
import { useNavigate, Link } from 'react-router-dom'
import { SiteDataContext } from "../context/useSiteData";
import Thumbnail from "../components/Thumbnail";
import BestGear from "../components/BestGear";

const HeadphonesProduct = () => {

const {siteData} = useContext(SiteDataContext)
const navigate = useNavigate();
// console.log(siteData[0]?.product[3]?.image.desktop)



  return (
    <>
    <header 
    className="h-1/4 bg-neutral-900 text-zinc-200 font-bold text-4xl">
        <hr className='w-10/12 m-auto border-1 border-white-500'></hr>
      <div className="flex justify-center items-center h-full w-full">HEADPHONES</div>
    </header>
    <section className=" h-fit mt-24 w-full">
        <div className=" flex h-100 w-9/12 m-auto">
            <div className=" w-1/2 h-full">
                <img className="h-full w-full" src={siteData[0]?.product[3]?.image.desktop} />
            </div>
            <div className=" flex justify-end items-center w-1/2 h-100">
                <div className="flex flex-col justify-between h-4/6 w-5/6">
                    <div className="flex">
                    <div className='w-16 text-zinc-500'>N E W</div>
                    <div className='text-zinc-500' >P R O D U C T</div>
                    </div>
                    <div className="">
                        <div className="text-5xl">XX99 MARK II</div>
                        <div className="text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                    <Link to='/xx99m2'><button className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
           </div>
        </div>
        <div  className="flex h-100 w-9/12 m-auto mt-24">
            <div className="flex items-center w-1/2 h-100">
            <div className="flex flex-col justify-evenly h-4/6 w-5/6">
                    <div>
                        <div className="text-5xl">XX99 MARK I</div>
                        <div className="text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    </div>
                   <Link to='/xx99m1'><button className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
            </div>
            <div className=" w-1/2 h-full">
            <img className="h-full w-full" src={siteData[0]?.product[2]?.image.desktop} />
            </div>
            
        </div>
        <div  className="flex h-100 w-9/12 m-auto mt-24">
            <div className="w-1/2 h-full">
            <img className="h-full w-full" src={siteData[0]?.product[1]?.image.desktop} />
            </div>
            <div className=" flex justify-end items-center w-1/2 h-100">
            <div className="flex flex-col justify-evenly h-4/6 w-5/6">
                    <div>
                        <div className="text-5xl">XX99 MARK II</div>
                        <div className="text-5xl">HEADPHONES</div>
                    </div>
                    <div>
                        <p className="text-md">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    </div>
                   <Link to='/xx59'> <button className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
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
