import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';


export default function MenuLinhas() {


  const { setSelectedLinha } = useContext(ProductContext)


  return (
    <>
      <div className='md:h-[80vh] flex flex-col items-center justify-center'>
        <div className='py-8 md:py-0 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12'>
        <div
            className='flex flex-col items-center'
            onClick={() => { setSelectedLinha('Linha Pro') }}
          >
            <Image
              src='/imgs/integracao/linhas-pro.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold md:text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Pro
            </p>
          </div>
          <div
            className='flex flex-col items-center'
            onClick={() => { setSelectedLinha('Linha Quali') }}
          >
            <Image
              src='/imgs/integracao/linhas-total-quali.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold md:text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Quali
            </p>
          </div>

          <div
            className='flex flex-col items-center'
            onClick={() => { setSelectedLinha('Linha Total Quali') }}
          >
            <Image
              src='/imgs/integracao/linhas-total-quali.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold md:text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Total Quali
            </p>
          </div>
          <Link href="/products/mix"
            className='flex flex-col items-center'
            onClick={() => { setSelectedLinha('Mix') }}
          >
            <Image
              src='/imgs/integracao/linhas-mix.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold md:text-xl md:text-xl text-[#354D4D] pl-10">
              Mix
            </p>
          </Link>
        </div>
      </div>

    </>
  )
}