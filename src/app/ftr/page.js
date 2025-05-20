'use client'
import React, { useState, useRef } from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'
import Etapa5 from './components/Etapa5'
import Etapa6 from './components/Etapa6'
import Header from '@/app/components/Header';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp';
import Footer from '@/app/components/Footer';
import mailService from '@/services/mail.service';

export default function FormReclamacao() {
  const [etapa, setEtapa] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const avancarEtapa = () => setEtapa(etapa + 1);
  const retrocederEtapa = () => setEtapa(etapa - 1);

  const handleSubmit = async () => {
    try {
      const response = await mailService.register(formData)
      alert('Formulário enviado com sucesso!');

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário. Tente novamente.');
    }
  };

  const footerRef = useRef(null);


  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <div className=' py-16 px-4 xl:px-40'>
        <h1 className=' font-effra text-2xl md:text-4xl text-[#2C674B] pb-8 text-center md:text-start'>FTR - Ficha Técnica de Reclamação</h1>
        {etapa === 1 && <Etapa1 onChange={handleChange} data={formData} />}
        {etapa === 2 && <Etapa2 onChange={handleChange} data={formData} />}
        {etapa === 3 && <Etapa3 onChange={handleChange} data={formData} />}
        {etapa === 4 && <Etapa4 onChange={handleChange} data={formData} />}
        {etapa === 5 && <Etapa5 onChange={handleChange} data={formData} />}
        {etapa === 6 && <Etapa6 onChange={handleChange} data={formData} />}
        <div className='flex justify-center gap-x-8'>


          {etapa > 1 && <button className='font-effra text-xl md:text-xl text-[#2C674B] pt-8 flex gap-x-2 items-center' onClick={retrocederEtapa}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
            Anterior
          </button>}


          {etapa < 6 && <button className='font-effra text-xl md:text-xl text-[#2C674B] pt-8 flex gap-x-2 items-center' onClick={avancarEtapa}>
            Próximo
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>}


          {etapa === 6 && <button className='font-effra text-xl md:text-xl text-[#2C674B] pt-8 flex gap-x-2 items-center' onClick={() => handleSubmit()}>Enviar</button>}
        </div>
      </div>
      <Footer ref={footerRef} />
    </>
  );
}

