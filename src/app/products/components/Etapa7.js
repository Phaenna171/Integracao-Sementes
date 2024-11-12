// Etapa3.js
import React from 'react';

export default function Etapa7({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-xl text-[#2C674B] pb-8 font-bold'>Etapa 7: Informações preliminares</h2>
      <h2 className='font-openSans text-lg text-[#2C674B] pt-0 pb-4 font-medium'>Informações Comerciais</h2>

      <div className='grid'>
        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Nota Fiscal de Compra Nº:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="notafiscal" value={data.notafiscal || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

      </div>


    </div>
  );
}


