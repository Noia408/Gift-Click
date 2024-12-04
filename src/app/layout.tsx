'use client'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="w-screen min-h-screen h-auto bg-white flex-col flex overflow-x-hidden">
        {(!window.location.pathname.includes('/login') && !window.location.pathname.includes('/signup')) && <Navbar/>}
        <div className={`flex flex-col gap-[2vw] w-full ${(!window.location.pathname.includes('/login') && !window.location.pathname.includes('/signup')) ? 'min-h-full max-h-[calc(100%-8vw)]' : 'min-h-screen'} overflow-y-scroll`}>
          <main className="h-fit w-full px-[6vw]">
            {children}
          </main>
          {(!window.location.pathname.includes('/login') && !window.location.pathname.includes('/signup') )&& <Footer/>}
        </div>
      </body>
    </html>
  );
}
