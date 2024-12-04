import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext, useRef, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import productService from '@/services/product.service';


export default function Individual() {

  const { selectedLinha, setSelectedLinha, selectedCategoria, setSelectedCategoria, setSelectedSemente, linhas, selectedSemente } = useContext(ProductContext)

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

  function getLine() {
    switch (selectedLinha) {
      case 'Linha Pro': return '/imgs/integracao/linhas-pro.png'
      case 'Linha Quali': return '/imgs/integracao/linhas-total-quali.png'
      case 'Linha Total Quali': return '/imgs/integracao/linhas-total-quali.png'
      case 'Mix': return '/imgs/integracao/linhas-mix.png'
    }
  }

  return (
    <>
      <div className='px-8 xl:px-32 pt-8 md:pt-16'>
        <Link href="/products" onClick={() => { setSelectedLinha("") }} className=' lg:hidden'>
          <div className='flex gap-x-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>

            <p className='text-[#696D69]'>
              VOLTAR
            </p>
          </div>
        </Link>
        <div className=' md:px-0 flex flex-col lg:flex-row items-center gap-x-10'>

          <Image
            src={getLine()}
            alt='Pacote'
            width={200}
            height={192}
            className='mr-6 lg:mr-0 pt-8 md:pt-0 w-72 lg:w-56 h-auto '
          />
          <div className='w-full flex flex-col gap-y-4'>
            <div className='relative flex justify-center pb-6 lg:pb-0 lg:justify-between'>
              <h1 className="text-center font-effra text-3xl md:text-4xl text-[#2C674B] pb-8 md:pb-0">
                {/* {products.filter(el => el.line == selectedLinha && el.category == selectedCategoria)[selectedSemente]?.title} */}
                {selectedLinha}
              </h1>
              <Link href="/products" onClick={() => { setSelectedLinha("") }} className='hidden lg:block'>
                <div className='flex gap-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                  </svg>

                  <p className='text-[#696D69]'>
                    VOLTAR
                  </p>
                </div>
              </Link>
            </div>
            <div className='lg:flex justify-between lg:border-b-2 border-[#CFD5D0]'>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 ${selectedCategoria === 'Brachiaria' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Brachiaria') }}
              >Brachiaria</h1>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 ${selectedCategoria === 'Panicum' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Panicum') }}
              >Panicum</h1>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 ${selectedCategoria === 'Leguminosas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Leguminosas') }}
              >Leguminosas</h1>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 ${selectedCategoria === 'Gramíneas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Gramíneas') }}
              >Gramíneas</h1>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 ${selectedCategoria === 'Brássicas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Brássicas') }}
              >Brássicas</h1>
              <h1 className={`text-center font-openSans  text-base md:text-lg cursor-pointer px-2 w-full py-1 lg:py-0 whitespace-nowrap ${selectedCategoria === 'Sementes de cobertura' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('Sementes de cobertura') }}
              >Sementes de cobertura</h1>
            </div>
          </div>
        </div>

        <div className="my-8 md:my-16  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden max-h-[40vh] md:max-h-[100vh] overflow-y-auto table-scroll">
          {products.filter(el => el.line == selectedLinha && el.category == selectedCategoria).map((product, index) => (
            <div
              key={index}
              className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] cursor-pointer"
              onClick={() => (setSelectedSemente(index))}
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
      </div>

    </>
  )
}