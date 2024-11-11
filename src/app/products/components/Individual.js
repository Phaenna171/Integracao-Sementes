import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext, useRef } from 'react';
import { ProductContext } from '../context/ProductContext';


export default function Individual() {

  const { selectedLinha, setSelectedLinha, selectedCategoria, setSelectedCategoria, setSelectedSemente, linhas } = useContext(ProductContext)

  const [selectedProduct, setSelectedProduct] = useState(false)

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

  return (
    <>
      <div className='md:px-32 pt-16'>
        <div className='px-8 md:px-0 md:flex items-center gap-x-10'>
          <Image
            src={linhas[selectedLinha].url}
            width={200}
            height={192}
          />
          <div className='w-full flex flex-col gap-y-4'>
            <div className='flex justify-between'>
              <h1 className="text-center font-effra text-xl md:text-4xl text-[#2C674B]">{linhas[selectedLinha].nome}</h1>
              <Link href="/products" onClick={() => { setSelectedLinha("") }}>
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
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'brachiaria' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('brachiaria') }}
              >Brachiaria</h1>
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'panicum' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('panicum') }}
              >Panicum</h1>
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'leguminosas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('leguminosas') }}
              >Leguminosas</h1>
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'gramineas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('gramineas') }}
              >Gramíneas</h1>
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'brassicas' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('brassicas') }}
              >Brássicas</h1>
              <h1 className={`text-center font-openSans  text-lg md:text-lg cursor-pointer px-2 ${selectedCategoria === 'cobertura' ? "text-[#2B654C] bg-[#E3EBD6]" : "text-[#C9C9C9]"}`}
                onClick={() => { setSelectedCategoria('cobertura') }}
              >Sementes de cobertura</h1>
            </div>
          </div>
        </div>

        <div className="my-16 px-16 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden max-h-[100vh] overflow-y-auto table-scroll">
          {grid.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] cursor-pointer"
              onClick={() => (setSelectedSemente('true'))}
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

    </>
  )
}