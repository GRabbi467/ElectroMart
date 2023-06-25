import { useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  const productInfo = useLoaderData();
  const { productName, image, price, details, deatils, quantity } =
    productInfo[0];
  const Overviews = (deatils || details).slice(0, 200).match(/.{1,30}/g);
  const [selectedItems, setSelectedItems] = useState(1);
  
  return (
    <>
      <div className="image-zoom">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: { image },
            },
            largeImage: {
              src: { image },
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
      <div className="card lg:card-side bg-base-100 shadow-none w-full">
        <figure className="w-1/2">
          <img src={image} alt="Album" className="w-96" />
        </figure>
        <div className="card-body p-16 ">
          <h2 className="card-title text-3xl">{productName}</h2>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <span className="ml-4 mt-1 text-sm text-amber-600">54 Reviews</span>
          </div>
          <h1 className="text-lg font-semibold">
            Regular Price: {price + (price * 5) / 100} Taka
          </h1>
          <h1 className="text-lg font-bold">Special Price: {price} Taka</h1>
          <h1 className="font-bold text-xl">Quick Overview</h1>
          {Overviews.map((overview) => (
            <li>{overview}</li>
          ))}
          <div className="mt-8">
            <h1 className="font-bold antialiased text-lg">Brand: Apple</h1>
            <p className="font-bold text-xl">
              Availability :{" "}
              {quantity > 0 ? (
                `${quantity} items left`
              ) : (
                <span className="text-red-600">"Not Available</span>
              )}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex gap-x-4 ">
              <button
                disabled={selectedItems >= quantity ? true : false}
                onClick={() => setSelectedItems(selectedItems + 1)}
                className="btn glass"
              >
                <FaPlus />
              </button>
              <span className="text-3xl mt-1">{selectedItems}</span>
              <button
                disabled={selectedItems < 2 ? true : false}
                onClick={() => setSelectedItems(selectedItems - 1)}
                className="btn glass"
              >
                <FaMinus />
              </button>
            </div>
          </div>

          <div className="card-actions justify-start">
            <button className="w-36 bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-300 text-white rounded-full px-4 py-1.5 font-medium uppercase ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
