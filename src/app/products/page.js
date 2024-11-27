'use client'
import { ProductProvider } from './context/ProductContext';
import MainProducts from './components/MainProduct';


export default function ProductsPage() {
  return (
    <>
      <ProductProvider>
        <MainProducts />
      </ProductProvider>
    </>
  )
}
