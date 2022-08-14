import Hero from "../components/app/Hero";
import ProductTab from "../components/app/ProductTab";
import axios from "axios";
import Drawer from "../components/app/Drawer";

export default function Home(data) {
  // console.log(data);
  return (
    <>
    <Drawer/>
      <Hero />
      <ProductTab products={data} />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const result = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = result.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
