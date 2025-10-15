import 'bulma/css/bulma.css'
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <head /> 
      <body className='has-background-light'>
        {children}
      </body>
    </html>
  );
}
