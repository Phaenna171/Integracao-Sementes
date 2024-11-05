import bannerService from "@/services/banner.service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function Apresentation() {
  const sliderRef = useRef(null);

  const [banners, setBanners] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  useEffect(() => {
    async function getData() {
      const { data } = await bannerService.getAll()
      setBanners(data)
    }
    getData()
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {banners?.map(el => <Link key={el?.id} href={el?.link || ''} className="pb-10 relative h-[83vh]">
            <Image width={300} height={300} unoptimized alt="" src={el.image} className="absolute -z-10 w-full h-full object-cover" />
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 pt-0 px-10">
              <div className="flex flex-col items-start justify-start md:col-start-1 md:row-start-2 md:col-span-2">
                <p className="text-white font-openSans text-lg md:text-xl lg:text-2xl tracking-widest font-light">
                  {el.description}
                </p>
                <h1 className="text-white font-openSans font-bold max-w-[700px] text-xl md:text-3xl lg:text-5xl py-2 md:py-3 pr-0 md:pr-24 lg:pr-56">
                  {el.title}
                </h1>
                <button className="text-white mt-4 bg-[#F07A10] py-2 px-4 md:py-3 md:px-6 rounded-full">
                  FAÇA SUA COTAÇÃO
                </button>
              </div>


              <div className="flex flex-col items-center justify-end md:col-start-2 md:row-start-3 pb-7 md:pb-6">
                <img
                  src={"./icons/scrow-down.svg"}
                  className="w-auto h-6 md:h-8 lg:h-10"
                  alt="Scroll Down"
                />
              </div>
            </div>
          </Link>
          )}
        </Slider>

        <img
          src="./icons/chevron-left.svg"
          className="absolute left-0 md:left-0 lg:left-2 xl:left-24 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
          alt="Previous Slide"
        />

        <img
          src="./icons/chevron-right.svg"
          className="absolute right-0 md:right-0 lg:right-2 xl:right-24 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
          alt="Next Slide"
        />
      </div>
    </>
  );
}
