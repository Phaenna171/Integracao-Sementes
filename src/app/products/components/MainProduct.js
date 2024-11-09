'use client'
import { React, useRef, useContext } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import { ProductContext } from '../context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';


export default function MainProducts() {

  const footerRef = useRef(null);

  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <div className='h-[80vh] flex flex-col items-center justify-center'>
        <div className='grid grid-cols-4 gap-x-10'>
          <Link href="/products/quali" className='flex flex-col items-center'>
            <Image
              src='/imgs/integracao/linhas-quali.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Quali
            </p>
          </Link>
          <Link href="/products/pro" className='flex flex-col items-center'>
            <Image
              src='/imgs/integracao/linhas-pro.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Pro
            </p>
          </Link>
          <Link href="/products/total" className='flex flex-col items-center'>
            <Image
              src='/imgs/integracao/linhas-total-quali.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold text-xl md:text-xl text-[#354D4D] pl-10">
              Linha Total Quali
            </p>
          </Link>
          <Link href="/products/mix" className='flex flex-col items-center'>
            <Image
              src='/imgs/integracao/linhas-mix.png'
              width={250}
              height={192}
            />
            <p className="text-center font-openSans font-bold text-xl md:text-xl text-[#354D4D] pl-10">
              Mix
            </p>
          </Link>
        </div>
      </div>
      <Footer ref={footerRef} />

    </>

  );
}
