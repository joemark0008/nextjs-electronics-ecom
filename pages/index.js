import Hero from "../components/app/Hero/Hero";
import ProductTab from "../components/app/Products/ProductTab";
import axios from "axios";
import Drawer from "../components/app/Drawer";
import { products } from "../data/Products";

export default function Home() {
  // console.log(data);
  return (
    <>
      <Drawer />
      <Hero />
      <ProductTab products={products} />
    </>
  );
}

// export async function getStaticProps(context) {
//   try {
//     const result = await axios.get(
//       "https://fakestoreapi.com/products/category/electronics"
//     );
//     const data = result.data;
//     return {
//       props: {
//         data: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
