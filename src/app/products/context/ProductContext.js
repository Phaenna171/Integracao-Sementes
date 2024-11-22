'use client'
import { createContext, useState, useRef } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedLinha, setSelectedLinha] = useState('')
  const [selectedCategoria, setSelectedCategoria] = useState('Brachiaria')
  const [selectedSemente, setSelectedSemente] = useState('')
  const [selectedMix, setSelectedMix] = useState('')


  const linhas = {
    "Linha Quali": {
      nome: 'Linha Quali',
      url: '/imgs/integracao/linhas-quali.png'
    },
    'Linha Pro': {
      nome: 'Linha Pro',
      url: '/imgs/integracao/linhas-pro.png'
    },
    'Linha Total Quali': {
      nome: 'Linha Total Quali',
      url: '/imgs/integracao/linhas-total-quali.png'
    },
    'Mix': {
      nome: 'Mix',
      url: '/imgs/integracao/linhas-mix.png'
    },
  }


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

