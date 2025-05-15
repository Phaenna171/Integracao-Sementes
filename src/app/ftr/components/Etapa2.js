// Etapa3.js
import React from 'react';

export default function Etapa3({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-lg md:text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 1: Informações preliminares</h2>
      <h2 className='font-openSans text-xl text-[#2C674B] pt-0 pb-4 font-medium'>Informações Comerciais</h2>

      <div className='flex flex-col md:grid '>
        <div className='flex flex-col md:grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Nota Fiscal de Compra Nº:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="notafiscal" value={data.notafiscal || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data da emissão da Nota Fiscal:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="datanota" value={data.datanota || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Espécie:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="especie" value={data.especie || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Lote:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="lote" value={data.lote || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Safra:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="safra" value={data.safra || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Tratamento:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="tratamento" value={data.tratamento || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Quantidade de semente adquirida:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdadquirido" value={data.qtdadquirido || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Quantidade de semente utilizada:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="qtdutilizado" value={data.qtdutilizado || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Sobra de semente:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sobra" value={data.sobra || ''} onChange={handleInputChange} />
            </label>
          </div>
        </div>

        <div className='flex flex-col md:grid grid-cols-4 gap-x-8 gap-y-2'>
          <h2 className='col-span-4 font-openSans text-xl text-[#2C674B] pt-8 pb-0 font-medium'>Motivo da Solicitação</h2>
          <div className='col-span-4'>
            <label className='font-openSans text-sm'>
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="motivo"
                value={data.motivo || ''}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="falha">Falha no stand</option>
                <option value="qualidadeFisica">Qualidade física da semente, problema na regulagem da semeadora</option>
                <option value="baixoPoderGerminativo">Baixo poder germinativo</option>
                <option value="baixoVigor">Baixo vigor</option>
                <option value="morteSementes">Morte das sementes</option>
                <option value="morteSementesGerminadas">Morte das sementes germinadas</option>
                <option value="emergenciaDesuniforme">Emergência desuniforme</option>
                <option value="baixoDesenvolvimento">Baixo desenvolvimento das plântulas</option>
                <option value="morteAntes">Morte de plântulas antes da emergência</option>
                <option value="morteEmergidas">Morte de plântulas emergidas</option>
                <option value="plantasInvasoras">Presença de plantas invasoras</option>
                <option value="outros">Outros</option>
              </select>
            </label>
            <div className='pt-4'>
              <label className='font-openSans text-sm '>
                Descreva (Para todos os casos):
                <textarea className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="descricaoMotivo" value={data.descricaoMotivo || ''} onChange={handleInputChange} />
              </label>
            </div>

          </div>
        </div>

        <div className='flex flex-col md:grid grid-cols-4 gap-x-8 gap-y-2'>
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
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="problemasObservados" value={data.problemasObservados || ''} onChange={handleInputChange} />
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


