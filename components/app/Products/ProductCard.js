import React, { useEffect } from "react";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard(props) {
  const products = props.products.products;
    console.log(props);

  const { addItem } = useCart();

  const handleAddItem = (e) => {
    // console.log(e);
    addItem(e);
    toast("Item Added");
  };

  return (
    <>
      <section className="flex justify-center flex-wrap gap-2 max-w-screen-2xl px-2 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="py-2">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-1/3 bg-cover">
                <Image
                  alt="Products"
                  width={200}
                  height={200}
                  src={product.image}
                />
              </div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-sm  lg:truncate">
                  {product.title}
                </h1>
                <p className="mt-2 text-gray-600 text-xs lg:truncate">
                  {product.description}
                </p>
                <div className="flex item-center mt-2">
                  <svg
                    className="w-5 h-5 fill-current text-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                  className="w-5 h-5 fill-current text-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-tertiary font-bold text-xl">
                    ${product.price}
                  </h1>
                  <button
                    // onClick={handleAddItem },
                    onClick={() => handleAddItem(product)}
                    className="px-3 py-2 bg-secondary text-white text-xs font-bold uppercase rounded"
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
           <ToastContainer />
      </section>
    </>
  );
}

export default ProductCard;
