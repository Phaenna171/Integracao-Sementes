import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";
import Image from "next/image"
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

  function getUseAndIndication(label) {
    switch (label) {
      case "Áreas Verdes": return "/imgs/admin-products/icone_areas_verdes.png"
      case "Ensilagem": return "/imgs/admin-products/icone_ensilagem.png"
      case "Fenação": return "/icons/icone_fenacao.svg"
      case "Margens de Rodovias": return "/imgs/admin-products/icone_margens_de_rodovias.png"
      case "Palhada": return "/icons/icone_palhada.svg"
      case "Pastoreio": return "/icons/icone_pastoreio.svg"
      case "Piquetes": return "/imgs/admin-products/icone_piquetes.png"
      case "Pista de Pouso": return "/imgs/admin-products/icone_pista_de_pouso.png"
      case "Taludes": return "/imgs/admin-products/icone_talaudes.png"
      case "Gado de Corte": return "/icons/icone_gado_de_corte.svg"
      case "Gado de Leite": return "/icons/icone_gado_de_leite.svg"
      case "Ovinos e Caprinos": return "/imgs/admin-products/icone_ovino_e_caprinos.png"
      case "Equinos": return "/imgs/admin-products/icone_equinos.png"
    }
  }

  return (
    <>
      {/* UTILIZAÇÃO E INDICAÇÃO */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-16 md:px-16 lg:px-28 xl:px-60 pt-16 xl:pt-0 pb-8 md:pb-16">

        {/* UTILIZAÇÃO */}
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="font-openSans text-lg md:text-xl font-bold text-[#136736] pl-4 pb-4">Utilização</h1>
          <div className="relative bg-[#E7F1E9] flex px-4 py-4 gap-4 rounded-xl items-end justify-center">
            {products.filter(el => el.category == selectedCategory)[selectedSeed]?.use.map((utilizacao, index) => (
              <Image
                unoptimized
                key={index}
                src={getUseAndIndication(utilizacao)}
                alt={utilizacao}
                height={80}
                width={80}
                className="object-contain h-[60px] md:h-[80px] w-auto"
              />
            ))}
          </div>
        </div>

        {/* INDICAÇÃO */}
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="font-openSans text-lg md:text-xl font-bold text-[#136736] pl-4 pb-4">Indicação</h1>
          <div className="relative bg-[#E7F1E9] flex px-4 py-4 gap-4 rounded-xl items-end justify-center">
            {products.filter(el => el.category == selectedCategory)[selectedSeed]?.indication.map((indicacao, index) => (
              <Image
                unoptimized
                key={index}
                src={getUseAndIndication(indicacao)}
                alt={indicacao}
                height={80}
                width={80}
                className="object-contain h-[60px] md:h-[80px] w-auto"
              />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}
