'use client'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Linha() {

  const grid = [
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
    {
      url: '/imgs/integracao/brachiaria_humidicola_2_grid.jpg',
      nome: 'Produto',
      nomeCientifico: 'Nome Científico'
    },
  ]
  const tabela = [
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",
    "B. brizantha cv. Marandu - PRÓ 60",

  ]
  const [selectedProduct, setSelectedProduct] = useState(false)

  return (
    <>
      <GrupoWhatsApp />
      <Header />
      {selectedProduct === false ? (
        <div className='px-32 pt-16'>
          <div className='flex items-center gap-x-10'>
            <Image
              src='/imgs/integracao/linhas-quali.png'
              width={200}
              height={192}
            />
            <div className='w-full flex flex-col gap-y-4'>
              <div className='flex justify-between'>
                <h1 className="text-center font-effra text-xl md:text-4xl text-[#2C674B]">Linha Quali</h1>
                <Link href="/products">
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
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Brachiaria</h1>
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Panicum</h1>
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Leguminosas</h1>
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Gramíneas</h1>
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Brássicas</h1>
                <h1 className="text-center font-openSans  text-lg md:text-lg text-[#C9C9C9] cursor-pointer">Sementes de cobertura</h1>
              </div>
            </div>
          </div>

          <div className="my-16 px-16 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden max-h-[100vh] overflow-y-auto table-scroll">
            {grid.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] cursor-pointer"
                onClick={() => (setSelectedProduct(true))}
              >
                <Image
                  src={item.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                  unoptimized='true'
                />
                <h1 className="text-white absolute font-openSans font-bold text-base sm:text-2xl lg:text-3xl top-4 sm:top-8 left-2 sm:left-4 uppercase">
                  {item.nome}
                </h1>
                <p className="text-white absolute font-openSans font-light text-sm sm:text-base sm:font-medium top-10 sm:top-16 left-2 sm:left-4">
                  {item.nomeCientifico}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='pb-16'>
          <div className="relative grid grid-rows-3 bg-contain bg-center px-16 xl:px-56 h-[75vh]"
            style={{
              backgroundImage: `url('/imgs/integracao/banner-produto-individual.png')`
            }}
          >
            <div className='absolute right-40 -bottom-28 flex flex-col items-end'>
              <Image
                src="/imgs/selo-embrapa.png"
                alt="selo embrapa"
                width={50}
                height={100}
                className=""
              />
              <Image
                src='/imgs/integracao/linhas-quali.png'
                width={500}
                height={192}

              />
            </div>
          </div>
          <div className='px-60 pt-28'>
            <div className='pb-16'>
              <p className="text-center md:text-start font-openSans font-semibold text-xl text-[#354D4D]">Brachiaria</p>
              <h1 className="font-effra text-3xl text-center md:text-start md:text-4xl lg:text-5xl text-[#136736] leading-8">Marandú</h1>
              <p className="text-center md:text-start font-openSans text-sm text-[#354D4D]">B. brizantha cv. Marandú</p>
            </div>
            <p className="text-[#354D4D] font-openSans text-lg font-medium tracking-wider leading-9 pb-16">As semetes Quali Combinam tecnologia e produtos de qualidade, usando sementes selecionadas de alta pureza (95%) que recebem tratamento com fungicida Pureza N, revestimento com macro e micronutrientes e um de blend de minerais naturais, além do seu acabamento em grafite, garantindo fluidez e melhorando a plantabilidade.</p>
          </div>

          <div className="px-4 md:px-40 lg:px-[500px] pb-16">
            <p className="bg-[#4C9162] text-white font-effra py-1 pl-8">B. brizantha cv. Marandu - PRÓ 60</p>
            <div className="relative max-h-64 overflow-y-auto table-scroll">
              {tabela.map((info, index) => (
                <div
                  key={index}
                  className={`py-1 px-8 ${index % 2 !== 0 ? 'bg-[#ACD3B8]' : 'bg-[#EAFCF0]'
                    }`}
                >
                  <p className="font-effra text-[#2D2F2E]">{info}</p>

                </div>
              ))}
            </div>
          </div>

          <div
            className='px-60 flex gap-x-2 items-center cursor-pointer'
            onClick={() => (setSelectedProduct(false))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>

            <p className='text-[#696D69]'>
              VOLTAR
            </p>
          </div>

        </div>

      )
      }
      <Footer />
    </>
  )
}