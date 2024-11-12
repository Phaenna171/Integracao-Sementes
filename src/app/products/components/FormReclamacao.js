// FormularioReclamacao.js
import React, { useState, useRef } from 'react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';
import Header from '@/app/components/Header';
import GrupoWhatsApp from '@/app/components/GrupoWhatsApp';
import Footer from '@/app/components/Footer';

export default function FormReclamacao() {
  const [etapa, setEtapa] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const avancarEtapa = () => setEtapa(etapa + 1);
  const retrocederEtapa = () => setEtapa(etapa - 1);

  const footerRef = useRef(null);


  return (
    <>
      <GrupoWhatsApp />
      <Header footerRef={footerRef} />
      <div className=' py-16 px-40'>
        <h1 className=' font-effra text-xl md:text-4xl text-[#2C674B] pb-8'>Ficha Técnica de Reclamação - FTR</h1>
        {etapa === 1 && <Etapa1 onChange={handleChange} data={formData} />}
        {etapa === 2 && <Etapa2 onChange={handleChange} data={formData} />}
        {etapa === 3 && <Etapa3 onChange={handleChange} data={formData} />}
        <div>
          {etapa > 1 && <button onClick={retrocederEtapa}>Anterior</button>}
          {etapa < 3 && <button onClick={avancarEtapa}>Próximo</button>}
          {etapa === 3 && <button onClick={() => console.log(formData)}>Enviar</button>}
        </div>
      </div>
      <Footer ref={footerRef} />
    </>
  );
}

