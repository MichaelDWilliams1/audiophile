import React, { useContext } from "react";
import { SiteDataContext } from "../context/useSiteData";

const CartItems = ({ currentUser }) => {
 if(currentUser === undefined) return
  const items =  currentUser[0]?.currentItemsInCart.map((item, index) => (
    <section key={index} className="flex mt-4 h-1/6 overflow-auto">
      <div className=" w-1/5">
        <img className="h-full w-full object-cover" src={item.image} />
      </div>
      <div className="w-2/5 flex flex-col">
        <div className="text-black h-1/2 text-sm font-bold flex items-center pl-4">
          {item.name}
        </div>
        <div className="text-black h-1/2 text-sm flex items-center pl-4">
          ${item.price}
        </div>
      </div>
      <div className="h-full w-2/5 text-black flex items-center">
        <div className="h-4/6 w-1/3 bg-gray-200 text-center items-center flex justify-evenly">
          +
        </div>
        <div className="h-4/6 w-1/3 bg-gray-200 text-center items-center flex justify-evenly">
          {item.amount}
        </div>
        <div className="h-4/6 w-1/3 bg-gray-200 text-center items-center flex justify-evenly">
          -
        </div>
        <i  className="text-red-600 text-2xl ml-2 mr-2 uil uil-trash-alt"></i>
      </div>
      
    </section>
  ));

  const totalCost = currentUser[0]?.currentItemsInCart
    .map((item) => item.price)
    .reduce(
      (prevItemValue, currentItemValue) => prevItemValue + currentItemValue,
      0
    );
    
    const inCartCount = currentUser[0]?.currentItemsInCart.length

  return (
    <section className=" h-4/5 w-4/5 m-auto overflow-y-scroll ">
      <section className="flex justify-between h-auto">
        <div className="text-black">{`CART (${inCartCount === undefined ? 0 : inCartCount})`}</div>
        <div className="text-black">Remove All</div>
      </section>

      {items}

      <section className="flex justify-between mt-4">
        <div className="text-black">Total</div>
        <div className="text-black">{totalCost}</div>
      </section>
      <button className="bg-orange-600 w-full h-16 mt-4">CHECKOUT</button>
    </section>
  );
};

export default CartItems;
