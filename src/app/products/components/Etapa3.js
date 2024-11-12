// Etapa3.js
import React from 'react';

export default function Etapa3({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 2: Informações Técnicas</h2>
      <h2 className='font-openSans text-xl text-[#2C674B] pt-0 pb-4 font-medium'>Preparo de solo</h2>

      <div className='grid'>
        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data do início da preparação do solo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="datapreparacao" value={data.datapreparacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Sequência de operação:
              <textarea className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="sequenciaOperacoes" value={data.sequenciaOperacoes || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Implementos utilizados:
              <textarea className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="implementosUtilizados" value={data.implementosUtilizados || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-2 font-medium'>Correção do solo</h2>
          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Calcário:</h2>

          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataAplicacao" value={data.dataAplicacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataAplicacao" value={data.dataAplicacao || ''} onChange={handleInputChange} />
            </label>
          </div>

        </div>

        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-0 font-medium'>Antecedentes da área</h2>

          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Cultura remanescente:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="culturaRemanescente" value={data.culturaRemanescente || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Cultura anterior:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="culturaAnterior" value={data.culturaAnterior || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Manejo de herbicida:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="manejoHerbicicida" value={data.manejoHerbicicida || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Antecedentes e invasoras na área:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="antecedentesEInvasores" value={data.antecedentesEInvasores || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Antecedência de ocorrência de pragas e doenças:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="pragasEDoencas" value={data.pragasEDoencas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Topografia:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="topografia" value={data.topografia || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Tipo de solo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="tipoDeSolo" value={data.tipoDeSolo || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Característica do solo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="caracteristicaDoSolo" value={data.caracteristicaDoSolo || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Problemas observados(Compactação do solo, Restos de galho, Palhada):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="caracteristicaDoSolo" value={data.caracteristicaDoSolo || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm'>
              Análise do solo disponível:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="analiseDoSolo"
                value={data.analiseDoSolo || ''}
                onChange={handleInputChange}
              >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>

              </select>
            </label>
          </div>

        </div>
      </div>


    </div>
  );
}


