// Etapa3.js
import React from 'react';

export default function Etapa5({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-lg md:text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 4: Informações Pós-Plantio</h2>
      <h2 className=' font-openSans text-lg text-[#2C674B] pt-2 pb-2 font-medium'>Histórico de Preciptação na Propriedade</h2>

      <div className='grid'>
        <div className='flex flex-col gap-2 md:grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              15 dias antes do plantio (mm):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="quinzeAntesPlantio" value={data.quinzeAntesPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              15 dias depois do plantio (mm):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="quinzeDepoisPlantio" value={data.quinzeDepoisPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Geadas
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="geadas" value={data.geadas || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Estágio de desenvolvimento das plantas observadas:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="estagioDesenvolvimentoPlantasObservadas" value={data.estagioDesenvolvimentoPlantasObservadas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Densidade de sementes (m²):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="densidadeSementes" value={data.densidadeSementes || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Densidade de Plântulas (m²):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="densidadePlantulas" value={data.densidadePlantulas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Uniformidade de emergência das plântulas:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="uniformidadeEmergenciaPlantulas" value={data.uniformidadeEmergenciaPlantulas || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-4'>
            <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 font-medium'>Doenças - Espécies</h2>
            <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="especiesDoencas" value={data.especiesDoencas || ''} onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Incidência:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="incidenciaDoenca" value={data.incidenciaDoenca || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Dano:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="danoDoenca" value={data.danoDoenca || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Severidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="severidadeDoenca" value={data.severidadeDoenca || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-4'>
            <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 font-medium'>Pragas - Espécies</h2>
            <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="especiesPragas" value={data.especiesPragas || ''} onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Sintomas:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sintomasPragas" value={data.sintomasPragas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Localização:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="localizacaoPragas" value={data.localizacaoPragas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Severidade dos danos:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="severidade" value={data.severidade || ''} onChange={handleInputChange} />
            </label>
          </div>

          <div className='col-span-4'>
            <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 font-medium'>Plantas Invasoras - Espécies</h2>
            <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="plantasInvasorasPragas" value={data.plantasInvasorasPragas || ''} onChange={handleInputChange} />
          </div>          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Estágio de desenvolvimento:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="estagioDesenvolvimentoPlantasInvasoras" value={data.estagioDesenvolvimentoPlantasInvasoras || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Densidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="densidadePlantasInvasoras" value={data.densidadePlantasInvasoras || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Cobertura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="coberturaPlantasInvasoras" value={data.coberturaPlantasInvasoras || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>
      </div>


    </div>
  );
}


