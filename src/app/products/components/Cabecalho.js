import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/products/context/ProductContext";
import Slider from "react-slick";
import Image from "next/image";
import productService from "@/services/product.service";

export default function Cabecalho() {

  const { datas, goToNext, goToPrev, sliderRef, selectedSeed, selectedCategory, setSelectedSeed } = useContext(ProductContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAll()
      setProducts(data)
    }
    getData()
  }, [selectedSeed]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false
  };

  const handleBackArrow = () => {
    setSelectedSeed(null)
  }

  return (
    <>
      {/* CABEÇALHO E SLIDE */}
      <div className="relative py-12 px-6 md:px-16 lg:px-28 xl:px-60">
        {/* BG CINZA */}
        <div className="absolute inset-0 h-[75%] md:h-[75%] bg-[#F2F2F2] z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
          <Image
            src="/imgs/arrow-left.svg"
            width={40}
            height={50}
            className="absolute cursor-pointer hover:opacity-50"
            onClick={() => {handleBackArrow()}}
          />

          {/* TÍTULO, EMBALAGEM E SELOS */}
          <div className="lg:pt-12">
            {/* TITULOS */}
            <div>
              <h1 className="font-effra text-3xl text-center md:text-start md:text-4xl lg:text-5xl text-[#136736] leading-8">{products.filter(el => el.category == selectedCategory)[selectedSeed]?.title}</h1>
              {/* <h2 className="font-openSans text-center md:text-start text-xl md:text-2xl text-[#639D77] font-bold pb-1">{products.filter(el => el.category == selectedCategory)[selectedSeed]?.subtitle}</h2> */}
              <p className="text-center md:text-start font-openSans text-sm text-[#354D4D]">{products.filter(el => el.category == selectedCategory)[selectedSeed]?.subtitle}</p>
            </div>

            {/* EMBALAGEM E SELOS */}
            <div className="relative flex items-start md:items-end justify-center md:justify-end pt-4 gap-4">
              <div>
                <Image
                  src="/imgs/embalagem.png"
                  alt="embalagem"
                  width={80}
                  height={80}
                  className="object-contain pr-4 md:absolute -left-6 top-5 md:w-[100px] md:h-[100px]"
                />
              </div>
              <div className="items-start justify-end flex gap-2 md:gap-4 md:pr-20">
                <Image
                  src="/imgs/selo-embrapa.png"
                  alt="selo embrapa"
                  width={20}
                  height={40}
                  className="object-contain md:w-[28px] md:h-[50px]"
                />
                <Image
                  src="/imgs/selo-xtra.png"
                  alt="selo xtra"
                  width={35}
                  height={35}
                  className="object-contain md:w-[50px] md:h-[50px]"
                />
              </div>
            </div>

          </div>

          {/* SLIDE */}
          <div className="flex gap-2 justify-center md:justify-center items-center">
            <img src="/icons/chevron-left-green.svg" onClick={goToPrev} className="cursor-pointer" />
            <Slider ref={sliderRef} {...settings} className='w-[200px] h-auto lg:w-[300px] custom-slider'>
              {datas[selectedCategory].slides[selectedSeed].map((slide, index) => (
                <div key={index} className="relative flex justify-center items-center">
                  <Image
                    src={slide}
                    alt="slide"
                    width={300}
                    height={0}
                    objectFit="contain"
                    unoptimized={true}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </Slider>
            <img src="/icons/chevron-right-green.svg" onClick={goToNext} className="cursor-pointer" />
          </div>

        </div>
      </div>

    </>
  )
}