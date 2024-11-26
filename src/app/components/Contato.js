import Image from 'next/image';
import Link from 'next/link';

export default function Contato() {

  return (
    <div className="sm:px-6 px-4 py-8 xl:px-44 grid grid-cols-1 md:grid-cols-3 gap-12 xl:pt-16 xl:pb-32 justify-between">
      <div className="lg:col-start-1 flex flex-col items-center md:items-start md:text-start mt-4">
        <h2 className="font-openSans font-bold text-xl md:text-4xl text-[#354D4D]">Onde <br className='hidden lg:block' />estamos</h2>
        <p className="font-openSans tracking-wider text-[#354D4D] pt-2 lg:pt-6"> Rua Lagoa Rica, 28 - Panorama</p>
        <p className="font-openSans tracking-wider text-[#354D4D] pb-2 lg:pb-6">Campo Grande - MS</p>
        <p className="font-openSans tracking-wider font-bold text-[#354D4D]">Telefones:</p>
        <div className='flex gap-2 md:justify-start'>
          <Image
            src="/imgs/integracao/phone-icon.svg"
            width={15}
            height={15}
            alt="Phone Icon"
          />
          <p className="font-openSans tracking-wider text-[#354D4D]">+55 (67) 3025-9398</p>
        </div>
      </div>


      <Link className="rounded-xl md:ml-32 h-[200px] md:h-[300px] md:col-span-2 lg:col-start-2 flex flex-col items-center" href="https://www.google.com/maps/place/R.+Lagoa+Rica,+28+-+Panorama,+Campo+Grande+-+MS,+79044-670/@-20.4668182,-54.5444536,17z/data=!4m6!3m5!1s0x9486e93570b26a25:0x6d1be82aea66f029!8m2!3d-20.4668182!4d-54.5444536!16s%2Fg%2F11sbkxzftw?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">
        <Image
          src="/imgs/integracao/mapa.png"
          width={300}
          height={150}
          alt="mapa"
          className='md:w-[500px] rounded-xl'
        />
      </Link>
    </div>
  );
}
