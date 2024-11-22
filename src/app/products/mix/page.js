'use client'
import { ProductProvider } from '../context/ProductContext';
import MainMix from './main'

export default function Mix() {

  return (
    <ProductProvider>
      <MainMix />
    </ProductProvider>
  )
}