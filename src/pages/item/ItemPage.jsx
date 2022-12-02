import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      console.log(`pageId: ${pageId}`)
     console.log(`current: ${currentItem}`)
     console.log(siteData[0])
  
    return (
        <> 
        {currentItem === undefined ? '' :
        <>
          <section className="md:mt-10 md:mb-20 lg:h-full w-full">
            <div
              onClick={navigateBack}
              className="k w-11/12 lg:w-9/12 h-1/6 md:mb-10 flex items-center md:m-auto lg:m-auto cursor-pointer"
            >
              Go back
            </div>
    
            <div className=" flex flex-col md:flex-row w-11/12 lg:w-9/12 m-auto">
              <div className=" w-1/2 h-full">
                <img
                  className="h-full w-full hidden lg:block"
                  src={currentItem[0]?.image.desktop}
                />
                 <img
                  className="h-full w-full hiddden md:block lg:hidden"
                  src={currentItem[0]?.image.tablet}
                />
                  <img
                  className="h-full w-full md:hidden"
                  src={currentItem[0]?.image.mobile}
                />
              </div>
              <div className="flex justify-end items-center w-1/2">
                <div className="flex flex-col justify-between h-5/6 w-5/6">
                  <div className="flex">
                    <div className="w-16 text-zinc-500">N E W</div>
                    <div className="text-zinc-500">P R O D U C T</div>
                  </div>
                  <div className="">
                    <div className="text-5xl">{currentItem[0]?.name}</div>
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
                      {/* Need to add some state here */}
                      <div onClick={(e) => addOrSubtract(e)} id='minus' className="w-1/3">-</div>
                      <div className="w-1/3">{addOrSubtractAmountOfItem}</div>
                      <div onClick={(e) => addOrSubtract(e)} id='add' className="w-1/3">+</div>
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
          <section className="flex lg:h-3/4">
            <div className=" flex flex-col lg:flex-row lg:h-4/6 w-11/12 lg:w-9/12 m-auto space-y-10 lg:space-y-0">
              <div className=" flex flex-col justify-between w-4/6 md:w-full h-full">
                <div className="md:w-full lg:w-4/5 h-full flex flex-col justify-between">
                  <div className="text-5xl font-bold">Features</div>
                  <div className="leading-7 mt-10">
                  {currentItem[0]?.features}
                  </div>
                  <div className="leading-7">
                  
                  </div>
                </div>
              </div>
              <div className="flex justify-end lg:w-2/6 h-full">
                <div className="flex lg:flex-col flex-row h-3/4 w-full">
                  <div className="text-5xl md:w-1/2 lg:w-full font-bold">IN THE BOX</div>                      
                  <div className=" h-full w-1/2 lg:w-full mt-10 leading-10">
                    {currentItem[0]?.includes.map(item =>  <tr>                                                
                      <td className="w-1/4 text-orange-600 font-bold">{`${item.quantity}x`}</td>
                      <td className="w-3/4">{item.item}</td>
                    </tr>)}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-3/5 mt-20 lg:mt-0 mb-20 lg:mb-0 lg:h-full flex justify-center items-center ">
            <div className="w-11/12 lg:w-9/12 h-full lg:h-2/3 flex">
              <div className="h-full flex flex-col justify-between w-1/2 lg:w-5/12 space-y-10 lg:space-y-0">
                <div className="imageContainer rounded-xl">
                  <img
                    className="h-full w-full rounded-xl hidden lg:block"
                    src={currentItem[0]?.gallery.first.desktop}
                  />
                   <img
                    className="h-full w-full rounded-xl hidden md:block lg:hidden"
                    src={currentItem[0]?.gallery.first.tablet}
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
                </div>
              </div>
              <div className="h-full w-7/12">
                <img
                  className="h-full w-full rounded-xl hidden lg:block"
                  src={currentItem[0]?.gallery.third.desktop}
                />
                  <img
                    className="h-full w-full rounded-xl hidden md:block lg:hidden"
                    src={currentItem[0]?.gallery.third.tablet}
                  />
              </div>
            </div>
          </section>
          <section className="h-3/5 lg:h-4/5 flex flex-col justify-evenly items-center">
            <div className="text-4xl">YOU MAY ALSO LIKE</div>
            <div className=" flex justify-between h-3/4 w-11/12 lg:w-9/12">
                {currentItem[0]?.others.map(item =>  
                <div className=" h-full w-4/12 mr-5">
                <div className=" h-4/6 w-full">
                  <img className="h-full w-full hidden lg:block" src={item?.image.desktop} />
                  <img className="h-full w-full hidden md:block lg:hidden" src={item?.image.tablet} />
                  <img className="h-full w-full md:hidden" src={item?.image.mobile} />
                </div>
                <div className=" flex flex-col items-center h-2/6 w-full">
                  <div className="h-1/2 w-full text-3xl flex items-center justify-center">{item.name}</div>
                  <button className="h-1/3 lg:h-1/2 w-3/4 lg:w-2/4 bg-orange-400">SEE PRODUCT</button>
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