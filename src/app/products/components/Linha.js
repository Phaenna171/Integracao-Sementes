'use client'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import Individual from './Individual'
import Semente from './Semente'
import MenuLinhas from './MenuLinhas'
import { useContext, useRef } from 'react';
import { ProductContext } from '../context/ProductContext';


export default function Linha() {

  const footerRef = useRef(null);

  const { selectedLinha, selectedSemente } = useContext(ProductContext)


  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      {selectedLinha ? (
        selectedSemente === ''? (
          <Individual/>
        ) : (
          <Semente/>
        )
      ) : (
        <MenuLinhas/>
      )}

      <Footer ref={footerRef} />
    </>
  )
}