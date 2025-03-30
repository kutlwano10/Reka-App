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
                src="data:image/jpeg;base64,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"
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