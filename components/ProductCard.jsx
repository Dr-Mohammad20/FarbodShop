import Link from 'next/link';
import React from 'react';

const ProductCard = ({ color, data, url }) => {
  return (
    <div
      className={`box-border w-[95%] md:w-[45%] lg:w-[23%] xl-w[23%] 2xl:w-[18%] h-[30dvh] BackMorphism py-5`}>
      {url && (
        <Link
          href={url}
          className="shadow-3xl h-full transform duration-300 hover:scale-110 overflow-hidden cursor-pointer flex flex-col justify-evenly items-center text-center">
          {/* use (shadow-3xl) a theme for box shadow (theme create in tailwind.config.js) */}
          <img
            className="w-3/5 h-[65%]"
            src={data.images[0].url}
            alt="Product Image"
          />
          <div
            className="p-4 text-black/[0.9] h-[35%] w-full"
            style={{ direction: 'rtl' }}>
            <h2 className={`text-lg font-medium text-${color}`}>
              {data.type} {data.model}
            </h2>
          </div>
        </Link>
      )}

      {!url && (
        <Link
          href="/Products/1"
          className="shadow-3xl h-full transform duration-300 hover:scale-110 overflow-hidden cursor-pointer flex flex-col justify-evenly items-center text-center">
          {/* use (shadow-3xl) a theme for box shadow (theme create in tailwind.config.js) */}
          <img className="w-3/5 h-[65%]" src="/GZCF1.png" alt="Product Image" />
          <div className="p-4 text-black/[0.9] h-[35%] w-full">
            <h2 className={`text-lg font-medium text-${color}`}>
              Product Name
            </h2>
            <div
              className={`flex items-center justify-center text-${color} text-center`}>
              <p className="mr-2 text-lg font-mono text-center">$20.00</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
