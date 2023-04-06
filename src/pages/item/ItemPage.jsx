import React, { useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { SiteDataContext } from "../../context/useSiteData";
import Thumbnail from "../../components/Thumbnail";
import BestGear from "../../components/BestGear";

const ItemPage = () => {
    const [addOrSubtractAmountOfItem, setAddOrSubtractAmountOfItem] = useState(1)  
   
    const { siteData, addToCart } = useContext(SiteDataContext);

    const navigate = useNavigate();
    const { pageId } = useParams();
console.log(`page: ${pageId}`)
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
     
      const currentItem = siteData[0]?.product.filter((item) => item.slug === pageId)
  
    return (
        <> 
        {currentItem === undefined ? '' :
        <>
          <section className="mt-5 md:mt-10 md:mb-20 lg:h-full w-full">
            <div
             
              className="w-11/12 lg:w-3/4 h-1/6 mb-5 md:mb-10 lg:mb-0 flex items-center m-auto lg:ml-auto lg:mr-auto"
            ><p onClick={navigateBack} className="z-10 hover:text-orange-600 hover:cursor-pointer">Go Back</p>
            </div>
    
            <div className=" flex flex-col md:flex-row w-11/12 lg:w-9/12 m-auto">
              <div className="md:w-1/2 h-full">
                <img
                  className="h-full w-full hidden lg:block"
                  src={currentItem[0]?.image.desktop}
                />
                 <img
                  className="h-full w-full hidden md:block lg:hidden"
                  src={currentItem[0]?.image.tablet}
                />
                  <img
                  className="h-full w-full md:hidden"
                  src={currentItem[0]?.image.mobile}
                />
              </div>
              <div className="flex md:justify-end items-center md:w-1/2">
                <div className="flex flex-col justify-between h-5/6 md:w-5/6 space-y-4 md:space-y-0">
                  { currentItem[0]?.new ? 
                  <div className="flex mt-4 md:mt-0">
                    <div className="w-16 text-zinc-500">N E W</div>
                    <div className="text-zinc-500">P R O D U C T</div>
                  </div> :
                  <div></div>
}
                  <div className="">
                    <div className="text-4xl md:text-5xl">{currentItem[0]?.name}</div>
                    {/* <div className="text-5xl">SPEAKER</div> */}
                  </div>
                  <div>
                    <p className="text-md">
                   {currentItem[0]?.description}
                    </p>
                  </div>
                  <p className="font-bold">{`$ ${currentItem[0]?.price.toLocaleString()}`}</p>
                  <div className="flex">
                    <div className="bg-gray-200 h-20 w-2/6 flex items-center text-center mr-10">
                      <div onClick={(e) => addOrSubtract(e)} id='minus' className="w-1/3 hover:cursor-pointer hover:text-red-800 font-bold">-</div>
                      <div className="w-1/3 font-bold">{addOrSubtractAmountOfItem}</div>
                      <div onClick={(e) => addOrSubtract(e)} id='add' className="w-1/3 hover:cursor-pointer hover:text-green-800 font-bold">+</div>
                    </div>
                    <button
                      onClick={() => addToCart(addOrSubtractAmountOfItem, currentItem[0])}
                      id={currentItem[0]?.price}
                      className="w-3/6 h-20 bg-orange-600 hover:bg-orange-500 text-zinc-200"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex lg:h-3/4 mt-14 md:mt-0">
            <div className=" flex flex-col lg:flex-row lg:h-4/6 w-11/12 lg:w-9/12 m-auto space-y-10 lg:space-y-0">
              <div className=" flex flex-col justify-between md:w-4/6 md:w-full h-full">
                <div className="md:w-full lg:w-4/5 h-full flex flex-col justify-between">
                  <div className="text-5xl font-bold space-y-5">Features</div>
                  <div className="leading-7 mt-10">
                  {currentItem[0]?.features}
                  </div>
                  <div className="leading-7 mt-10">
                  {currentItem[0]?.featuresSecond}
                  </div>
                  <div className="leading-7">
                  
                  </div>
                </div>
              </div>
              <div className="flex justify-end lg:w-2/6 h-full">
                <div className="flex flex-col lg:flex-col md:flex-row h-3/4 w-full">
                  <div className="text-5xl md:w-1/2 lg:w-full font-bold">IN THE BOX</div>                      
                  <div className=" h-full md:w-1/2 lg:w-full mt-10 leading-10">
                    {currentItem[0]?.includes.map(item =>  <tr>                                                
                      <td className="w-1/4 text-orange-600 font-bold">{`${item.quantity}x`}</td>
                      <td className="w-3/4">{item.item}</td>
                    </tr>)}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full md:h-2/5 mt-20 lg:mt-0 mb-20 lg:mb-0 lg:h-full flex justify-center items-center ">
            <div className="w-full md:w-11/12 lg:w-9/12 h-full lg:h-2/3 flex flex-col md:flex-row">
              <div className="h-full flex flex-col justify-between md:w-1/2 lg:w-5/12 space-y-4 md:space-y-10 lg:space-y-0">
                <div className="imageContainer rounded-xl">
                  <img
                    className="h-full w-full rounded-xl hidden lg:block"
                    src={currentItem[0]?.gallery.first.desktop}
                  />
                   <img
                    className="h-full w-full rounded-xl hidden md:block lg:hidden"
                    src={currentItem[0]?.gallery.first.tablet}
                  />
                    <img
                    className="h-full w-full rounded-xl md:hidden"
                    src={currentItem[0]?.gallery.first.mobile}
                  />
                </div>
                <div className="imageContainer">
                  <img
                    className="h-full w-full rounded-xl hidden lg:block"
                    src={currentItem[0]?.gallery.second.desktop}
                  />
                   <img
                    className="h-full w-full rounded-xl hidden md:block lg:hidden"
                    src={currentItem[0]?.gallery.second.tablet}
                  />
                    <img
                    className="h-full w-full rounded-xl md:hidden"
                    src={currentItem[0]?.gallery.second.mobile}
                  />
                </div>
              </div>
              <div className="h-full space-y-4 md:space-y-0 m-auto md:m-0 w-11/12 md:w-7/12">
                <img
                  className="h-full w-full rounded-xl hidden lg:block"
                  src={currentItem[0]?.gallery.third.desktop}
                />
                  <img
                    className="h-full w-full rounded-xl hidden md:block lg:hidden"
                    src={currentItem[0]?.gallery.third.tablet}
                  />
                    <img
                    className="h-full w-full rounded-xl md:hidden"
                    src={currentItem[0]?.gallery.third.mobile}
                  />
              </div>
            </div>
          </section>
          <section className="md:h-3/5 lg:h-4/5 flex flex-col justify-evenly items-center">
            <div className="text-3xl md:text-4xl mb-4 md:m-0">YOU MAY ALSO LIKE</div>
            <div className="flex flex-col md:flex-row justify-between h-3/4 w-11/12 lg:w-9/12 space-y-10 md:space-y-0">
                {currentItem[0]?.others.map(item =>  
                <div className=" h-full w-full md:w-4/12 mr-5">
                <div className=" h-4/6 w-full">
                  <img className="h-full w-full hidden lg:block" src={item?.image.desktop} />
                  <img className="h-full w-full hidden md:block lg:hidden" src={item?.image.tablet} />
                  <img className="h-full w-full md:hidden" src={item?.image.mobile} />
                </div>
                <div className=" flex flex-col items-center md:h-1/3 w-full space-y-4 md:space-y-0 mt-4 md:mt-0">
                  <div className="h-1/2 w-full text-3xl flex items-center justify-center">{item.name}</div>
                  <Link className="flex justify-center h-12 md:h-1/3 lg:h-1/2 w-1/2 md:w-3/4 lg:w-2/4 bg-orange-400" to={`/item/${item?.slug}`}><button className="h-full w-full">SEE PRODUCT</button></Link>
                </div>
              </div>
              )}
            </div>
          </section>
          
    <Thumbnail />
    <BestGear />
    </>
                }     
        </>
      );
}

export default ItemPage
