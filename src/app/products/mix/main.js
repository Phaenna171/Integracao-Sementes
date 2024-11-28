'use client'
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import productService from '@/services/product.service';
import { ProductContext } from '../context/ProductContext';

export default function MainMix() {
  console.log('here')
  const { selectedCategoria, setSelectedCategoria, selectedSemente,selectedMix,setSelectedMix } = useContext(ProductContext)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await productService.getAllMix()
      console.log('\n\n',data,selectedMix)
      setProducts(data)
    }
    getData()
  }, [selectedSemente]);

  function getLine() {
    switch ('Mix') {
      case 'Linha Pro': return '/imgs/integracao/linhas-quali.png'
      case 'Linha Quali': return '/imgs/integracao/linhas-pro.png'
      case 'Linha Total Quali': return '/imgs/integracao/linhas-total-quali.png'
      case 'Mix': return '/imgs/integracao/linhas-mix.png'
    }
  }
  return (
    <>
      <GrupoWhatsApp />
      <Header />
      {!selectedMix ? (
        <div className='px-32 pt-16'>
          <div className='flex items-center gap-x-10'>
            <Image
              src='/imgs/integracao/linhas-mix.png'
              width={200}
              height={192}
            />
            <div className='w-full flex flex-col gap-y-4'>
              <div className='flex justify-between'>
                <h1 className="text-center font-effra text-xl md:text-4xl text-[#2C674B]">Mix</h1>
                <Link href="/products"
                  onClick={() => { setSelectedCategoria('gramineas') }}
                >
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
              <div className='flex justify-between border-b-2 border-[#CFD5D0]'>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'gramineas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('gramineas') }}
                >Gramíneas</h1>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'leguminosas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('leguminosas') }}
                >Leguminosas</h1>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'asteraceas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('asteraceas') }}
                >Asteráceas</h1>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'poligonaceas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('poligonaceas') }}
                >Poligonáceas</h1>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'brassicas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('brassicas') }}
                >Brássicas</h1>
                <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'cobertura' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                  onClick={() => { setSelectedCategoria('cobertura') }}
                >Sementes de cobertura</h1>
              </div>
            </div>
          </div>

          <div className=" px-8 md:px-20 py-16">
            <div className="grid grid-cols-4 gap-x-8 md:gap-x-0">
              {products?.map((mix, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-center pb-4 md:pb-16 cursor-pointer hover:opacity-80"
                  onClick={() => { setSelectedMix(mix) }}
                >
                  <Image
                    src={mix.productImage}
                    alt="Palha"
                    width={150}
                    height={93.02}
                    className=""
                  />
                  <p className="text-[#818181] text-center md:text-2xl font-openSans font-semibold pt-2">
                    {mix.name}
                  </p>
                </div>

              ))}

            </div>
          </div>


        </div>
      ) : (
        <div>
          <div className="relative flex bg-contain bg-center px-16 xl:px-56 h-[60vh] items-end"
            style={{
              backgroundImage: `url(${selectedMix.backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}

          >
            <h1 className="text-white pb-10 text-5xl md:text-6xl font-effra">{selectedMix.name}</h1>
          </div>
          <div className="relative px-4 md:px-52 py-20">
            <div className="relative z-10 flex justify-between gap-x-20 pb-2 md:pb-0 md:gap-x-16">
              <Image
                src={selectedMix.productImage}
                alt="Semente"
                width={300}
                height={93.02}
                className="w-40 md:w-60"
              />
              <div className='flex '>
                <div className="py-8 flex flex-col items-end md:items-start">
                  <h1 className="text-[#414141] font-openSans font-bold md:text-xl">Recomendação - 20 kg/Ha</h1>
                  <div className="bg-[#00AC64] rounded-xl py-4 px-6 mt-4 w-[80%]">
                    <p className="font-openSans text-xs text-white">Época de plantio</p>
                    <p className="font-openSans text-lg font-bold underline underline-offset-4 text-[#032A29]">{selectedMix.plantingSeason}</p>
                    <p className="font-openSans text-xs text-white">Manejo</p>
                    <p className="text-[#032A29] font-openSans text-lg font-bold">{selectedMix.management}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Image
                    src="/imgs/selo-embrapa.png"
                    alt="selo embrapa"
                    width={40}
                    height={40}
                    className="object-contain "
                  />
                </div>
              </div>
            </div>


            <div className=" relative z-10 flex justify-between">
              <ul className="space-y-2 py-8">
                {selectedMix.topics.map((item, index) => (
                  <li key={index} className="font-openSans font-medium text-[#414141] tracking-wider"><span className="pr-2">&bull;</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className='flex justify-between'>
              <div className="relative z-10 flex gap-x-4">
                {/* {
                  lista2.map((item, index) => (
                    <div key={index} className={`text-center w-10 h-10 rounded-full 
                  ${item === "K"
                        ? "bg-[#EF1D20]"
                        : item === "N"
                          ? "bg-[#00642B]"
                          : item === "Ca"
                            ? "bg-[#F3A044]"
                            : item === "B"
                              ? "bg-[#2BB4EF]"
                              : item === "P"
                                ? "bg-[#EFD82B]"
                                : ""

                      }`}>

                      <p className="pt-2 text-white">{item}</p>
                    </div>
                  ))
                } */}
              </div>
              <div
                className='flex gap-x-2 items-center cursor-pointer hover:opacity-70'
                onClick={() => { setSelectedMix(null) }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>

                <p className='text-[#696D69]'>
                  VOLTAR
                </p>
              </div>
            </div>

          </div>
        </div>
      )
      }
      <Footer />
    </>
  )
}