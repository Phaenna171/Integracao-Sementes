import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <main className="bg-white h-screen w-full flex flex-col gap-8 justify-center">
            <Image className="flex self-center" unoptimized width={300} height={300} src="/imgs/integracao/logo.png" alt="Logo Integração" />
            <div className="flex gap-10 justify-center flex-wrap w-full">
                <Link href="/admin/produtos" className="md:w-[421px] md:h-[533px] w-full md:mx-0 mx-4 hover:scale-105 transition-all">
                    <Image unoptimized width={421} height={467} alt="Card PRODUTOS" className=" rounded-tl-2xl rounded-tr-2xl object-cover md:w-full w-full" src="/imgs/admin-produtos.png" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">PRODUTOS</div>
                </Link>
                <Link href="/admin/carrosel" className="md:w-[421px] md:h-[533px] w-full md:mx-0 mx-4 hover:scale-105 transition-all">
                    <Image unoptimized width={421} height={467} alt="Card CARROSSEL" className=" rounded-tl-2xl rounded-tr-2xl object-cover md:w-full w-full" src="/imgs/admin-carrosel.png" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">CARROSSEL</div>
                </Link>
                {/* <Link href="/admin/blog" className="md:w-[421px] md:h-[533px] w-full md:mx-0 mx-4 hover:scale-105 transition-all">
                    <Image unoptimized width={421} height={467} alt="Card BLOG" className=" rounded-tl-2xl rounded-tr-2xl object-cover md:w-full w-full" src="/imgs/admin-blog.png" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">BLOG</div>
                </Link> */}
            </div>
        </main>
    )
}