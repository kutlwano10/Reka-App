'use client'; 
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import SkeletonLoader from "./ProductSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const filter = useSelector((state) => state.filter.filter); 
  const search = useSelector((state) => state.filter.search1);

  

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
       
        const response = await fetch(`https://reka-app-three.vercel.app/api/products/?category=${filter}&search=${search}`, { cache: "no-store" }, );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
          
        }
        console.log(response)
        const data = await response.json();
        console.log('fetched')
        setProducts(data.products); // Set the fetched products to the state
      } catch (error) {
        console.log("Error loading products:", error);
      }
    };
    fetchProductsData(); // Re-fetch the products whenever the filter changes
  }, [filter,search]); // Trigger fetch when `filter` changes

  return (
    <>
    <div className="px-[2%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
      {/* Show skeleton loaders when products are still loading */}
      {console.log(products)}
      {products.length == 0 ? (
        // Render 10 skeleton loaders to match the grid layout
        Array(10).fill(0).map((_, idx) => <SkeletonLoader key={idx} />)
      ) : (
        // Render actual products once they're loaded
        products.map((product) => <ProductCard key={product._id} {...product} />)
      )}
    </div>
    </>
  );
};

export default ProductList;






