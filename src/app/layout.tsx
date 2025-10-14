import 'bulma/css/bulma.css'
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>                
        {children}        
      </body>
    </html>
  );
}
