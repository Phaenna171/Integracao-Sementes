// Etapa1.js
import React from 'react';

export default function Etapa1({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-xl text-[#2C674B] pb-8 font-bold'>Etapa 1: Informações preliminares</h2>
      <div>
        <div className='grid grid-rows-2 grid-cols-2 justify-between gap-x-16'>
          <div className='row-start-1 '>
            <label className='font-openSans text-sm flex gap-x-4 items-center'>
              Data da Reclamação:
              <input className='py-1 px-2 text-[#C9C9C9] rounded-xl border-2 border-[#E3EBD6]' type="date" name="dataReclamacao" value={data.dataReclamacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-2'>
            <label className='font-openSans text-sm'>
              Responsável por fazer a reclamação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="text" name="responsavelfazer" value={data.responsavelfazer || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-2'>
            <label className='font-openSans text-sm'>
              Responsável por receber a reclamação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="text" name="responsavelreceber" value={data.responsavelreceber || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <h2 className='font-openSans text-lg text-[#2C674B] pt-8 pb-4 font-medium'>Dados da propriedade</h2>
        <div className='grid grid-rows-3 grid-cols-2 justify-between gap-x-16'>
          <div className='row-start-1 '>
            <label className='font-openSans text-sm'>
              Propriedade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="text" name="propriedade" value={data.propriedade || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-2 '>
            <label className='font-openSans text-sm'>
              Proprietário:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="text" name="proprietario" value={data.proprietario || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-3 col-start-1'>
            <label className='font-openSans text-sm flex flex-col'>
              Município/UF:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-[40%]' type="text" name="municipioUF" value={data.municipioUF || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-1 col-start-2'>
            <label className='font-openSans text-sm'>
              Contato:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="text" name="contato" value={data.contato || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='row-start-2 col-start-2'>
            <label className='font-openSans text-sm'>
              Telefone:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] w-full' type="tel" name="telefone" value={data.telefone || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
