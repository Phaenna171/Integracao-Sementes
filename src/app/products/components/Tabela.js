import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";
import productService from "@/services/product.service";

export default function UtilizacaoEIndicacao() {

  const { datas, selectedCategory, selectedSeed } = useContext(ProductContext)

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
      {/* TABELA */}
      <div className="px-4 md:px-40 lg:px-80 pb-16">
        <p className="bg-[#4C9162] text-white font-effra py-1 pl-8 uppercase">{products.filter(el => el.category == selectedCategory)[selectedSeed]?.tableTitle}</p>

        {/* Definindo um limite de altura e overflow-y para a rolagem */}
        <div className="relative max-h-64 overflow-y-auto table-scroll">
          {products.filter(el => el.category == selectedCategory)[selectedSeed]?.table.map((table, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 py-1 px-8 ${index % 2 !== 0 ? 'bg-[#ACD3B8]' : 'bg-[#EAFCF0]'
                }`}
            >
              <p className="col-span-3 col-start-1 font-openSans font-medium">{table.key}</p>
              <p className="col-span-1 col-start-4 font-openSans font-medium">{table.value}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}