'use client'
import { React, useRef, useContext } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp'
import { ProductContext } from '../context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';
import Linha from './Linha'


export default function MainProducts() {

  const footerRef = useRef(null);

  const { selectedLinha, setSelectedLinha, selectedCategoria, setSelectedCategoria, selectedSemente, setselectedSemente, selectedMix, setSelectedMix, linhas } = useContext(ProductContext)
  

  return (
    <>
      <Linha/>
    </>

  );
}
