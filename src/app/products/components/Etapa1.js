// Etapa1.js
import React from 'react';

export default function Etapa1({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
    console.log(data)
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 1: Informações preliminares</h2>

      <div className='grid'>

        <div className=' grid grid-cols-4 justify-between gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-0 pb-2 font-medium'>Dados da reclamação</h2>

          <div className='row-start-2'>
            <label className='font-openSans text-sm flex flex-col'>
              Data da Reclamação:
              <input className='py-1 px-2 text-[#C9C9C9] rounded-xl border-2 border-[#E3EBD6]' type="date" name="dataReclamacao" value={data.dataReclamacao || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-2 row-start-3'>
            <label className='font-openSans text-sm'>
              Responsável por fazer a reclamação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="responsavelfazer" value={data.responsavelfazer || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-2 row-start-3'>
            <label className='font-openSans text-sm'>
              Responsável por receber a reclamação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="responsavelreceber" value={data.responsavelreceber || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className=' grid grid-cols-4 justify-between gap-x-8 gap-y-2'>
          <h2 className='col-span-4 row-start-1 font-openSans text-xl text-[#2C674B] pt-8 pb-0 font-medium'>Dados da propriedade</h2>

          <div className='row-start-2 col-span-2'>
            <label className='font-openSans text-sm'>
              Propriedade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="propriedade" value={data.propriedade || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='row-start-3 col-span-2'>
            <label className='font-openSans text-sm'>
              Proprietário:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="proprietario" value={data.proprietario || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='row-start-2'>
            <label className='font-openSans text-sm flex flex-col'>
              Município/UF:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 ' type="text" name="municipioUF" value={data.municipioUF || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='row-start-3'>
            <label className='w-full font-openSans text-sm'>
              Contato:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="contato" value={data.contato || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='row-start-3'>
            <label className='w-full font-openSans text-sm'>
              Telefone:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="tel" name="telefone" value={data.telefone || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 row-start-1 font-openSans text-xl text-[#2C674B] pt-8 pb-0 font-medium'>Dados da revenda</h2>

          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Revenda:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="revenda" value={data.revenda || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Cidade/UF:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="cidadeuf" value={data.cidadeuf || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Endereço:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="endereco" value={data.endereco || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Vendedor:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="vendedor" value={data.vendedor || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Contato:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="contatovendedor" value={data.contatovendedor || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Condições de armazenamento das sementes:
              <textarea className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="condicoes" value={data.condicoes || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
