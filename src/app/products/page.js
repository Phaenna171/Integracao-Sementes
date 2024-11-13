'use client'
import { ProductProvider } from './context/ProductContext';
import MainProducts from './components/MainProduct';
import FormReclamacao from "./components/FormReclamacao"


export default function ProductsPage() {
  return (
    <>
      <ProductProvider>
        <FormReclamacao />
      </ProductProvider>
    </>
  )
}
