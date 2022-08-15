import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import Image from "next/image";

function Cart() {
  const { emptyCart, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else
    return (
      <>
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qty
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <Image
                            width={100}
                            height={100}
                            src={item.image}
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <p className="mb-2 md:ml-4">{item.title}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          type="submit"
                          className="text-gray-700 md:ml-4"
                        >
                          <small>(Remove item)</small>
                        </button>
                      </td>
                      <td className="justify-center md:justify-end md:flex md:mt-8">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <input
                              type="number"
                              defaultValue={item.quantity}
                              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          ${item.price}
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          ${item.price * item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr className="pb-6 mt-6" />
              <button className="bg-primary px-2 py-1 rounded-md" onClick={emptyCart}>Clear</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Cart;
