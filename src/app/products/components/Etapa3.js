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

        <div className='grid grid-cols-4 pb-8 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-2 font-medium'>Correção do solo</h2>


          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Calcário:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Fonte:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fonteCalcario" value={data.fonteCalcario || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataCalcario" value={data.dataAplicacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaCalcario" value={data.sistemaCalcario || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdCalcario" value={data.qtdCalcario || ''} onChange={handleInputChange} />
            </label>
          </div>

          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Gesso:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Fonte:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fonteGesso" value={data.fonteGesso || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataGesso" value={data.dataGesso || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaGesso" value={data.sistemaGesso || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdGesso" value={data.qtdGesso || ''} onChange={handleInputChange} />
            </label>
          </div>

        </div>

        <div className='grid grid-cols-4 pb-8 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-2 font-medium'>Adubação de plantio</h2>


          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Adubação antes do plantio:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Fonte:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fonteAntesPlantio" value={data.fonteAntesPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataAntesPlantio" value={data.dataAntesPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaAntesPlantio" value={data.sistemaAntesPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdAntesPlantio" value={data.qtdAntesPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>

          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Adubação simultânea ao plantio:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Fonte:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fonteSimultaneaPlantio" value={data.fonteSimultaneaPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataSimultaneaPlantio" value={data.dataSimultaneaPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaSimultaneoPlantio" value={data.sistemaSimultaneoPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdSimultaneaPlantio" value={data.qtdSimultaneaPlantio || ''} onChange={handleInputChange} />
            </label>
          </div>


        </div>

        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-2 font-medium'>Trato Cultural pré-semeadura</h2>


          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Controle de plantas daninhas:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Herbicida:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="herbicidaDaninhas" value={data.herbicidaDaninhas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataDaninhas" value={data.dataDaninhas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaDaninhas" value={data.sistemaDaninhas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdDaninhas" value={data.qtdDaninhas || ''} onChange={handleInputChange} />
            </label>
          </div>

          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Controle de pragas:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Produto:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fontePragas" value={data.fontePragas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataPragas" value={data.dataPragas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaPragas" value={data.sistemaPragas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdPragas" value={data.qtdPragas || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-2 font-medium'>Adubação de cobertura</h2>


          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-0 pb-0 font-light'>Realizado adubação de cobertura:</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Fonte:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="fonteAdubacao" value={data.fonteAdubacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da aplicação
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataAdubacao" value={data.dataAdubacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sistema de aplicação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaAdubacao" value={data.sistemaAdubacao || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade (ton/ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdAdubacao" value={data.qtdAdubacao || ''} onChange={handleInputChange} />
            </label>
          </div>

        </div>

      </div>


    </div>
  );
}


