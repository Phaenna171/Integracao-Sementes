import { useContext, useEffect, useState } from "react"
import { ProductContext } from "@/app/products/context/ProductContext"
import productService from "@/services/product.service";

export default function Intro() {

  const { selectedCategory, selectedSeed } = useContext(ProductContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAll()
      setProducts(data)
    }
    getData()
  }, [selectedSeed]);

  return (
    <>
      <div className="grid grid-rows-3 bg-cover bg-center px-16 xl:px-56 py-10"
        style={{
          backgroundImage: `url(${products.filter(el => el.category == selectedCategory)[selectedSeed]?.carouselPhotos[0]})`
        }}
      >
        <div className="row-start-3 row-span-1 w-[250px]">
          <h1 className="font-effra text-3xl  md:text-start md:text-4xl lg:text-5xl text-white leading-8">{products.filter(el => el.category == selectedCategory)[selectedSeed]?.title}</h1>
          <p className="font-openSans text-xl  font-light leading-5 text-white break-words whitespace-normal">
            Produtividade e resultado que seu campo precisa!
          </p>
          <button className="text-white mt-4 bg-[#F07A10] text-xs py-1 px-4 md:py-1 md:px-6 rounded-full">
            FAÇA SUA COTAÇÃO
          </button>
        </div>
      </div>
    </>
  )
}