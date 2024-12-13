import "./globals.css";

export const metadata = {
  title: "Integração Sementes",
  description: "Semeando qualidade, colhendo confiança!",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
