import React, { forwardRef } from "react";
import Link from "next/link";

const Footer = forwardRef((props, ref) => {
  return (
    <>
      <div className="bg-[#0E622E]" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-center px-8 xl:px-36 py-4">

          <div>
            <p className="text-white font-openSans font-light mb-4 md:mb-0">© 2024 Integração Sementes</p>
          </div>

          <Link href="/ftr">
            <p className="text-white font-openSans text-sm font-light mb-4 md:mb-0 underline cursor-pointer hover:opacity-50">FTR - Ficha Técnico de Reclamação </p>
          </Link>

          <div className="flex">
            <a href="https://www.instagram.com/integracaosementes/" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/integracaosementes/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/integra%C3%A7%C3%A3o-sementes/" target="_blank" rel="noopener noreferrer">
              <img className="px-2 w-8 h-8" src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>

          </div>
        </div>
      </div>
    </>
  );
});

Footer.displayName = "Footer";
export default Footer;
