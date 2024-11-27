// Etapa3.js
import React from 'react';

export default function Etapa6({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-lg md:text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 5: Informações Finais</h2>
      <h2 className=' font-openSans text-lg text-[#2C674B] pt-2 pb-2 font-medium'>Aplicação de Defensivos Agrícolas</h2>

      <div className='grid'>
        <div className='flex flex-col gap-2 md:grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Produto1:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaProduto1" value={data.denfensivosAgricolaProduto1 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Dosagem:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaDosagem1" value={data.denfensivosAgricolaDosagem1 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="denfensivosAgricolaData1" value={data.denfensivosAgricolaData1 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Obetivo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaObjetivo1" value={data.denfensivosAgricolaObjetivo1 || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Produto2:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaProduto2" value={data.denfensivosAgricolaProduto2 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Dosagem:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaDosagem2" value={data.denfensivosAgricolaDosagem2 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="denfensivosAgricolaData2" value={data.denfensivosAgricolaData2 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Obetivo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaObjetivo2" value={data.denfensivosAgricolaObjetivo2 || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Produto3:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaProduto3" value={data.denfensivosAgricolaProduto3 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Dosagem:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaDosagem3" value={data.denfensivosAgricolaDosagem3 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="denfensivosAgricolaData3" value={data.denfensivosAgricolaData3 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Obetivo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaObjetivo3" value={data.denfensivosAgricolaObjetivo3 || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Produto4:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaProduto4" value={data.denfensivosAgricolaProduto4 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Dosagem:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaDosagem4" value={data.denfensivosAgricolaDosagem4 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="denfensivosAgricolaData4" value={data.denfensivosAgricolaData4 || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Obetivo:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="denfensivosAgricolaObjetivo4" value={data.denfensivosAgricolaObjetivo4 || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-4'>
            <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 pb-2 font-medium text-center md:text-start'>Interpretação da situação - Comentários da vistoria - Parecer Técnico</h2>
            <textarea className='py-1 rounded-xl border-2 h-[300px] md:h-[150px] border-[#E3EBD6] px-3 w-full' type="text" name="interpretacaoComentarioParecer" value={data.interpretacaoComentarioParecer || ''} onChange={handleInputChange} />
          </div>
          <div className='col-span-4'>
            <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 pb-2 font-medium text-center md:text-start'>Considerações finais</h2>
            <textarea className='py-1 rounded-xl border-2 h-[300px] md:h-[200px] border-[#E3EBD6] px-3 w-full' type="text" name="consideracoesFinais" value={data.consideracoesFinais || ''} onChange={handleInputChange} />
          </div>
        </div>
      </div>

    </div>
  );
}


