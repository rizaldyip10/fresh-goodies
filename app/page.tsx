import CategoryBar from "@/components/category-bar";
import Navbar from "@/components/navbar";
import ProductContainer from "@/components/product-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className='min-h-screen px-4'>
      <div className='pt-14'>
        <Navbar />
        <CategoryBar />
      </div>
      <ProductContainer />
    </main>
  );
}
