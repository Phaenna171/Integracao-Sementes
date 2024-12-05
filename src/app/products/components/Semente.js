import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import Image from 'next/image';
import Link from 'next/link';
import Individual from './Individual'
import { useState, useContext, useRef, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import productService from '@/services/product.service';


export default function Semente() {

  const { selectedLinha, setSelectedLinha, selectedCategoria, setSelectedCategoria, selectedSemente, setSelectedSemente,
    selectedMix, setSelectedMix, linhas } = useContext(ProductContext)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAll()
      setProducts(data)
    }
    getData()
  }, [selectedSemente]);

  function getLine() {
    switch (selectedLinha) {
      case 'Linha Pro': return '/imgs/integracao/linhas-total-quali.png'
      case 'Linha Quali': return '/imgs/integracao/linhas-pro.png'
      case 'Linha Total Quali': return '/imgs/integracao/linhas-total-quali.png'
      case 'Mix': return '/imgs/integracao/linhas-mix.png'
    }
  }

  return (
    <>
      <div className='pb-6 md:pb-16'>
        <div className="relative grid grid-rows-3 bg-contain bg-center px-16 xl:px-56 h-[20vh] md:h-[35vh] lg:h-[50vh] xl:h-[75vh] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.carouselPhotos[0]})`
          }}
        >
          <div className='absolute right-5 top-3 md:right-24 md:top-6 lg:right-40 lg:-bottom-28 xl:right-40 xl:top-40 flex flex-col items-end'>
            <Image
              src="/imgs/selo-embrapa.png"
              alt="selo embrapa"
              width={50}
              height={100}
              className="w-6 h-6 md:w-16 md:h-16"
            />
            <Image
              src={getLine()}
              width={500}
              height={192}
              className='w-[180px] h-auto md:w-[300px] lg:w-[400px] xl:w-[500px]'
            />
          </div>
        </div>
        <div className='lg:px-40 xl:px-60 md:px-20 px-4 pt-12 md:pt-28'>
          <div className='pb-8 md:pb-16'>
            <p className=" md:text-start font-openSans font-semibold text-xl text-[#354D4D]">{selectedCategoria}</p>
            <h1 className="font-effra text-3xl  md:text-start md:text-4xl lg:text-5xl text-[#136736] leading-8">{products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.title}</h1>
            <p className=" md:text-start font-openSans text-sm text-[#354D4D]">{products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.subtitle}</p>
          </div>
          <p className="text-[#354D4D] font-openSans text-sm md:text-lg md:font-medium tracking-wider leading-6 md:leading-9 pb-16">{products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.description}</p>
        </div>

        <div className="px-4 md:px-40 lg:px-80 xl:px-[500px] pb-16">
          <p className="bg-[#4C9162] text-white font-effra py-1 pl-8">{products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.tableTitle}</p>
          <div className="relative max-h-64 overflow-y-auto table-scroll">
            {products.filter(el => el.line.includes(selectedLinha) && el.category == selectedCategoria)[selectedSemente]?.table.map((info, index) => (
              <div
                key={index}
                className={`flex justify-between py-1 px-8 ${index % 2 !== 0 ? 'bg-[#ACD3B8]' : 'bg-[#EAFCF0]'
                  }`}
              >
                <p className="font-effra text-[#2D2F2E] w-72">{info.key}</p>
                <p className="font-effra text-[#2D2F2E] w-32">{info.value}</p>

              </div>
            ))}
          </div>
        </div>

        <div className='flex gap-x-2 items-center justify-end px-4 md:px-20 lg:px-60 cursor-pointer hover:opacity-50' onClick={() => {setSelectedSemente("")}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="w-[12px] h-auto md:w-[16px] flex" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>

          <p className='text-[#696D69] text-sm md:text-base'>
            VOLTAR
          </p>
        </div>

      </div>

    </>
  )
}