"use client"; 
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
export default function AddToCart({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div>
    <button
      onClick={() => addToCart(product)}
      className="flex mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
    <Link href={"/cart"}>
      🛒 Add to Cart
      </Link>
    </button>

    </div>

  );
}