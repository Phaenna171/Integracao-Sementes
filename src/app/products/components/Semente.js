import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import Image from 'next/image';
import Link from 'next/link';
import Individual from './Individual'
import { useState, useContext, useRef } from 'react';
import { ProductContext } from '../context/ProductContext';


export default function Semente() {

  const { selectedLinha, setSelectedLinha, selectedCategoria, setSelectedCategoria, selectedSemente, setSelectedSemente,
    selectedMix, setSelectedMix, linhas } = useContext(ProductContext)

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


  return (
    <>
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
              src={linhas[selectedLinha].url}
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
          onClick={() => (setSelectedSemente(''))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#696D69" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>

          <p className='text-[#696D69]'>
            VOLTAR
          </p>
        </div>

      </div>

    </>
  )
}