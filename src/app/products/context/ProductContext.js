'use client'
import { createContext, useState, useRef } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [selectedLinha, setSelectedLinha] = useState('')
  const [selectedCategoria, setSelectedCategoria] = useState('brachiaria')
  const [selectedSemente, setSelectedSemente] = useState('')
  const [selectedMix, setSelectedMix] = useState('')


  const linhas = {
    quali: {
      nome: 'Linha Quali',
      url: '/imgs/integracao/linhas-quali.png'
    },
    pro: {
      nome: 'Linha Pro',
      url: '/imgs/integracao/linhas-pro.png'
    },
    total: {
      nome: 'Linha Total Quali',
      url: '/imgs/integracao/linhas-total-quali.png'
    },
    mix: {
      nome: 'Mix',
      url: '/imgs/integracao/linhas-mix.png'
    },
  }

  console.log(selectedLinha)

  return (
    <ProductContext.Provider value={{
      selectedLinha, 
      setSelectedLinha, 
      selectedCategoria, 
      setSelectedCategoria, 
      selectedSemente, 
      setSelectedSemente,
      selectedMix,
      setSelectedMix,
      linhas
    }}>
      {children}
    </ProductContext.Provider>
  )
}

