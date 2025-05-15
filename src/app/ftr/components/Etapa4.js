// Etapa3.js
import React from 'react';

export default function Etapa4({ onChange, data }) {
  const handleInputChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-[#E7F1E9] px-8 py-8 rounded-xl border-2 border-[#E3EBD6]'>
      <h2 className='font-openSans text-lg md:text-2xl text-[#2C674B] pb-8 font-bold'>Etapa 3: Informações do Plantio</h2>
      <h2 className='font-openSans text-lg text-[#2C674B] pt-0 pb-4 font-medium'>Informações técnicas da semeadura</h2>

      <div className='grid'>
        <div className='flex flex-col gap-2 md:grid grid-cols-4 gap-x-8 gap-y-2'>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data do início da semeadura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataInicioSemeadura" value={data.dataInicioSemeadura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data do término da semeadura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataTerminoSemeadura" value={data.dataTerminoSemeadura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Condições de armazenamento das sementes na propriedade:
              <textarea className='py-1 rounded-xl h-[90px] border-2 border-[#E3EBD6] px-3 w-full' type="number" name="condicoesArmazenamentoSementePrioridade" value={data.condicoesArmazenamentoSementePrioridade || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Área total semeada (ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="areaTotalSemeada" value={data.areaTotalSemeada || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Área com problema (ha):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="areaComProblema" value={data.areaComProblema || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm'>
              Sistema de plantio:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="sistemaPlantio"
                value={data.sistemaPlantio || ''}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="lanco">Lanço</option>
                <option value="emLinha">Em Linha</option>
                <option value="plantioDireto">Plantio Direto</option>
                <option value="matracaManual">Matraca/Manual</option>
                <option value="aereo">Aéreo</option>


              </select>
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Distância entre linhas (cm):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="distanciaLinhas" value={data.distanciaLinhas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Distância entre plantas (cm):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="distanciaPlantas" value={data.distanciaPlantas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-4'>
            <label className='font-openSans text-sm '>
              Equipamento utilizado na semeadura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="equipamentoUtilizadoSemeadura" value={data.equipamentoUtilizadoSemeadura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm'>
              Sementes foram incorporadas?
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="sementesIncorporadas"
                value={data.sementesIncorporadas || ''}
                onChange={handleInputChange}
              >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>

              </select>
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Se sim informar equipamento:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="equipamentoSementesIncorporadas" value={data.equipamentoSementesIncorporadas || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm'>
              Presença de palha na área:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="presencaPalha"
                value={data.presencaPalha || ''}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="dessecada">Somente dessecada</option>
                <option value="dessecadaIncorporada">Dessecada e incorporada</option>
                <option value="corte">Corte</option>

              </select>
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Espécie:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="semeaduraEspecie" value={data.semeaduraEspecie || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Cultivar:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="semeaduraCultivar" value={data.semeaduraCultivar || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Volume:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="semeaduraVolume" value={data.semeaduraVolume || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Porcentagem coberta:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="number" name="semeaduraPorcentagemCoberta" value={data.semeaduraPorcentagemCoberta || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data de colheita da cultura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataColheitaCultura" value={data.dataColheitaCultura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm'>
              Sistema Integração Lavoura/Pecuária:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="sistemaIntegracaoLP"
                value={data.sistemaIntegracaoLP || ''}
                onChange={handleInputChange}
              >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>

              </select>
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm'>
              Se sim:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="sistemaIntegracaoLPSim"
                value={data.sistemaIntegracaoLPOpcao || ''}
                onChange={handleInputChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="consorciado">Consorciado</option>
                <option value="sucessivo">Sucessivo</option>

              </select>
            </label>
          </div>

          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 font-medium'>Cultura</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data de semeadura da cultura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataSemeaduraCultura" value={data.dataSemeaduraCultura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Sistema de semeadura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaSemeaduraCultura" value={data.sistemaSemeaduraCultura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Densidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="densidadeCultura" value={data.densidadeCultura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Profundidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="profundidadeCultura" value={data.profundidadeCultura || ''} onChange={handleInputChange} />
            </label>
          </div>

          <h2 className='col-span-4 font-openSans text-lg text-[#2C674B] pt-8 font-medium'>Forrageira</h2>
          <div className='col-span-1'>
            <label className='font-openSans text-sm '>
              Data de semeadura da forrageira:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="date" name="dataSemeaduraForrageira" value={data.dataSemeaduraForrageira || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-3'>
            <label className='font-openSans text-sm '>
              Sistema de semeadura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="sistemaSemeaduraForrageira" value={data.sistemaSemeaduraForrageira || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Densidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="densidadeForrageira" value={data.densidadeForrageira || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Profundidade:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="profundidadeForrageira" value={data.profundidadeForrageira || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm'>
              Mistura de adubo com a sementes no plantio:
              <select
                className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full'
                name="misturaAduboSemetesPlantio"
                value={data.misturaAduboSemetesPlantio || ''}
                onChange={handleInputChange}
              >
                <option value="sim">Sim</option>
                <option value="nao">Não</option>

              </select>
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Manejo da mistura:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="manejoMistura" value={data.manejoMistura || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Proporção (Adubo/Semente):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="proporcaoAduboSemente" value={data.proporcaoAduboSemente || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Manipulação:
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="manipulacaoForrageira" value={data.manipulacaoForrageira || ''} onChange={handleInputChange} />
            </label>
          </div>
          <div className='col-span-2'>
            <label className='font-openSans text-sm '>
              Tempo de contato (Entre a mistura e a semeadura):
              <input className='py-1 rounded-xl border-2 border-[#E3EBD6] px-3 w-full' type="text" name="tempoContato" value={data.tempoContato || ''} onChange={handleInputChange} />
            </label>
          </div>

        </div>

      </div>


    </div>
  );
}


