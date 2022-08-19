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
     console.log(`current: ${currentItem}`)
     console.log(siteData[0])
  
    return (
        <> 
        {currentItem === undefined ? '' :
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
                  src={currentItem[0]?.image.desktop}
                />
              </div>
              <div className=" flex justify-end items-center w-1/2 h-100">
                <div className="flex flex-col justify-between h-4/6 w-5/6">
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
                  {currentItem[0]?.features}
                  </div>
                  <div className="leading-7">
                  
                  </div>
                </div>
              </div>
              <div className=" flex justify-end w-2/6 h-full">
                <div className=" h-3/4 w-full">
                  <div className="text-5xl font-bold">IN THE BOX</div>                      
                  <div className=" h-full w-full mt-10 leading-10">
                    {currentItem[0]?.includes.map(item =>  <tr>                                                
                      <td className="w-1/4 text-orange-600 font-bold">{`${item.quantity}x`}</td>
                      <td className="w-3/4">{item.item}</td>
                    </tr>)}
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
                    src={currentItem[0]?.gallery.first.desktop}
                  />
                </div>
                <div className="imageContainer">
                  <img
                    className="h-full w-full rounded-xl"
                    src={currentItem[0]?.gallery.second.desktop}
                  />
                </div>
              </div>
              <div className="h-full w-7/12">
                <img
                  className="h-full w-full rounded-xl"
                  src={currentItem[0]?.gallery.third.desktop}
                />
              </div>
            </div>
          </section>
          <section className=" h-4/5 flex flex-col justify-evenly items-center">
            <div className="text-4xl">YOU MAY ALSO LIKE</div>
            <div className=" flex justify-between h-3/4 w-9/12">
                {currentItem[0]?.others.map(item =>  
                <div className=" h-full w-4/12 mr-5">
                <div className=" h-4/6 w-full">
                  <img className="h-full w-full" src={item?.image.desktop} />
                </div>
                <div className=" flex flex-col items-center h-2/6 w-full">
                  <div className="h-1/2 w-full  flex items-center justify-center">{item.name}</div>
                  <button className="h-1/2 w-2/4 bg-orange-400">SEE PRODUCT</button>
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