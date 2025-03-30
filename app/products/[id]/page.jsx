import Header from "@/app/components/Header";
import AddToCart from "@/app/components/AddToCart";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Back from "../../public/turn-back2.png"
import Link from "next/link";

export async function getProductDetails(productId) {
  const response = await fetch(
    `https://reka-app-three.vercel.app/api/products/${productId}`
  );

  if (!response.ok) {
    throw Error("Failed to fetch Data");
  }
  let data = await response.json();
  return data;
}

/**
 *
 * @param {*} param0
 * @returns
 */

export default async function productDetails({ params }) {
  /**
   * The params will get the id of the routed Product Detail using the [id] folder
   */

  const { product } = await getProductDetails(params.id);
  
  

  return (
    <main>
      <Header />
      <div className="mt-20 ml-10 w-14">
          <Link href="/">
            <Image src={Back} alt="turn-back" priority width={30} height={30} />
          </Link>
          </div>
        
      <div className="max-w-6xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src={product.images}
                alt={product.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-500 mb-4">{product.category}</p>
                <p className="text-3xl font-bold text-[#87e64b] mb-6">R {product.price}</p>
                <p className="text-gray-700 mb-6">{product.description}</p>
               
            
              {product.tags && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#87e64b] text-gray-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              </div>
              <div className="flex gap-4">
                {/* <button  className="flex-1 bg-[#87e64b] hover:bg-[#2a4b15] text-white py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button> */}
                <AddToCart product={product}/>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg transition duration-300">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}