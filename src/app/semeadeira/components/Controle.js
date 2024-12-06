import Image from "next/image";

export default function Controle() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 lg:px-40 py-8 md:py-16">
        <div>
          <h1 className="text-[#2E664D] font-openSans text-2xl md:text-3xl lg:text-4xl font-bold pt-4 md:pt-0 pb-6 md:pb-12">
            Mais controle ao semear
          </h1>
          <p className="text-[#354D4D] font-openSans py-2 md:py-4 leading-7 font-medium tracking-wider md:leading-8 xl:pr-12">
            As semeadeiras são acionadas por motor elétrico 12 Volts em corrente contínua diretamente na bateria de tratores, quadriciclos ou colhetadeiras, de dentro da cabina, permitindo controle total do funcionamento, com mais eficiência e precisão, evitando perdas de sementes.
          </p>
          <p className="text-[#354D4D] font-openSans py-2 md:py-4 leading-7 font-medium tracking-wider md:leading-8 xl:pr-12">
            O lançamento de sementes por disco associado à vazão promovida pelo dosador, permite larguras de plantio de 2 a 16 metros, dependendo da quantidade e característica das sementes forrageiras, grãos miúdos, fetilizantes, iscas ou granulados utilizados.
          </p>
          <p className="text-[#354D4D] font-openSans py-2 md:py-4 leading-7 font-medium tracking-wider md:leading-8 xl:pr-12">
            Com monitoramento ATIVO por GPS, ela praticamente semeia sozinha. Com o trator se movimentando ela começa a semeadura, ajusta tudo automaticamente de acordo com a velocidade de trabalho, e quando o trator para ela para também.
          </p>
          <p className="text-[#354D4D] font-openSans py-2 md:py-4 leading-7 font-medium tracking-wider md:leading-8 xl:pr-12">
            Incrível!
          </p>
        </div>
        
        <div className="relative flex items-center justify-center">
          <Image
            src="/imgs/integracao/equipamento.png"
            width={600}
            height={100}
            objectFit="cover"
            className="w-full h-auto max-w-[500px] md:max-w-full"
          />
          {/* <Image
            src="/imgs/integracao/360.png"
            width={50}
            height={50}
            className="absolute bottom-8 left-8 md:bottom-48 md:left-24 "
          /> */}
        </div>
      </div>
    </>
  );
}
