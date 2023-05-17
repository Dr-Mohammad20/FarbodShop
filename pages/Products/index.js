import React from 'react';
import HeaderImage from '../../assets/images/Up-Page-GroundZero.jpg';

import Image from 'next/image';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { GET_All_PRODUCTS } from '@/graphql/queries';

export const getStaticProps = async () => {
  const url = process.env.SECRET_BASE_URL_GRAPHQL;
  const token = process.env.SECRET_GRAPHQL_CMS_TOKEN;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: token,
    },
  });
  const query = GET_All_PRODUCTS;
  const data = await graphQLClient.request(query);
  const productsData = data.products;
  return {
    props: {
      productsData,
    },
  };
};

function index({ productsData }) {
  return (
    <div className="w-[100dvw] min-h-[100dvh] h-fit flex flex-col justify-center items-center px-2 bg-black">
      <div className="w-[100%] h-[20dvh] flex justify-center items-center bg-white">
        <Image src={HeaderImage} className="PageImageMaxWidth" />
        <div className="hover:bg-GroundZero hover:text-white text-GroundZero hover:rounded-lg font-IranianSans">
          <Header color={'rgb(251, 246, 2)'} />
        </div>
        <div className="h-[6%] w-[99dvw] flex flex-row-reverse justify-evenly items-center gap-4 absolute top-[13%] left-0 ml-2 text-sm xl:text-xl">
          <Link
            href="/Products/GroundZero"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            گرند زیرو
          </Link>
          <Link
            href="/Products/HammerTech"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            همرتک
          </Link>
          <Link
            href="/Products/SoundDigital"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            ساند دیجیتال
          </Link>
          <Link
            href="/Products/Pioneer"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            پایونر
          </Link>
          <Link
            href="/Products/Motefareghe"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            بقیه برندها
          </Link>
        </div>
      </div>
      <div className="box-border w-full h-fit min-h-[70dvh] flex flex-wrap py-5 px-5 gap-5 justify-center backGround">
        {productsData ? (
          productsData.map((product) => (
            <ProductCard
              color={'GroundZero'}
              data={product}
              url={`/Products/${product.slug}`}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterGroundZero">
        <Footer color={'rgb(251, 246, 2)'} />
      </div>
    </div>
  );
}

export default index;
