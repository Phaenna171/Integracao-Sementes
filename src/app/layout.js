import "./globals.css";

export const metadata = {
  title: "Integração Sementes",
  description: "Semeando qualidade, colhendo confiança!",
  icons: {
    icon: "/logo.png", // O caminho relativo para o seu ícone
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
