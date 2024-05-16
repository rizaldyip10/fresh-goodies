import CategoryBar from "@/components/category-bar";
import Navbar from "@/components/navbar";
import ProductContainer from "@/components/product-container";
import ToCartBtn from "@/components/to-cart-btn";

export default function Home() {
  return (
    <main className='min-h-screen px-4'>
      <ToCartBtn />
      <div className='pt-14'>
        <Navbar />
        <CategoryBar />
      </div>
      <ProductContainer />
    </main>
  );
}
