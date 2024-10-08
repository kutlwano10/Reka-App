import ProductList from "./components/ProductList";
import Image from "next/image";
import search from "./public/search.svg";
import vegFruits from "./public/veg&fruits.jpg";
import Filter from "./components/Filter";
import Search from "./components/SearchBar";
import { Suspense } from "react";
import loading from './loading'

export default function Home() {
  
  return (
    <div >
      <div className="pt-24 md:pt-36 bg-[#f1f1f1]">
        <Filter />
        <div className=" flex justify-center">
          <Image className="h-[20rem] object-cover" src={vegFruits} alt="" />
         <Search />
        </div>
       
        <ProductList />
     
            </div>
        
      </div>
  );
}
