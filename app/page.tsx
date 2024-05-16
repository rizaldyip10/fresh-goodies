import CartModal from "@/components/cart-modal";
import CategoryBar from "@/components/category-bar";
import Navbar from "@/components/navbar";
import ProductContainer from "@/components/product-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className='h-full relative'>
      {/* <CartModal /> */}
      <div className="relative min-h-screen px-4">
        <ProductContainer />
      </div>
    </main>
  );
}
