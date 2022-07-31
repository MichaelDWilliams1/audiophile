import React, {useContext} from "react";
import { SiteDataContext } from "../context/useSiteData";
import Thumbnail from "../components/Thumbnail";
import BestGear from "../components/BestGear";
import { Link } from  'react-router-dom'
const EarphoneProduct = () => {
    const {siteData} = useContext(SiteDataContext)
  return (
    <>
    <header 
    className="h-1/4 bg-neutral-900 text-zinc-200 font-bold text-4xl">
        <hr className='w-10/12 m-auto border-1 border-white-500'></hr>
      <div className="flex justify-center items-center h-full w-full">EARPHONES</div>
    </header>
    <section className=" h-fit mt-24 w-full">
        <div className=" flex h-100 w-9/12 m-auto">
            <div className=" w-1/2 h-full">
                <img className="h-full w-full" src={siteData[0]?.product[0]?.image.desktop} />
            </div>
            <div className=" flex justify-end items-center w-1/2 h-100">
                <div className="flex flex-col justify-between h-4/6 w-5/6">
                    <div className="flex">
                    <div className='w-16 text-zinc-500'>N E W</div>
                    <div className='text-zinc-500' >P R O D U C T</div>
                    </div>
                    <div className="">
                        <div className="text-5xl">YX1 WIRELESS</div>
                        <div className="text-5xl">EARPHONES</div>
                    </div>
                    <div>
                        <p className="text-md">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    </div>
                   <Link to='/yx1'><button className="w-2/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200">SEE PRODUCT</button></Link>
                </div>
           </div>
        </div>
       
    </section>
<Thumbnail />
<BestGear />
    </>
  )
}

export default EarphoneProduct