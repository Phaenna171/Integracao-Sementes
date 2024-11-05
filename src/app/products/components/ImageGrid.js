import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from "@/app/products/context/ProductContext";
import productService from "@/services/product.service";

export default function ImageGrid() {
  const { selectedCategory, setSelectedSeed } = useContext(ProductContext);

  const [products, setProducts] = useState([]);

  const handleImageClick = (index) => {
    setSelectedSeed(index);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAll()
      setProducts(data)
    }
    getData()
  }, []);

  return (
    <>
      {/* LAYER PRODUTOS */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 bg-[#F2F2F2] overflow-hidden max-h-[500px] overflow-y-auto table-scroll">
        {products.filter(el => el.category == selectedCategory).map((product, index) => (
          <div
            key={index}
            className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={product.carouselPhotos[0]}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
              unoptimized='true'
            />
            <h1 className="text-white absolute font-openSans font-bold text-base sm:text-2xl lg:text-3xl top-4 sm:top-8 left-2 sm:left-4 uppercase">
              {product.title}
            </h1>
            <p className="text-white absolute font-openSans font-light text-sm sm:text-base sm:font-medium top-10 sm:top-16 left-2 sm:left-4">
              {product.subtitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
