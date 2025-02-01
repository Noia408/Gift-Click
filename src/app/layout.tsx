"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="pt">
      <head>
        <meta name="monetag" content="031323bcaf14985f50e5ef42f7934cdb" />
      </head>
      <Script data-cfasync="false" type="text/javascript" id="monetag">
          {`
              (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8883139,document.createElement('script'))
          `}
      </Script>
      <body className="w-screen min-h-screen h-auto bg-white flex-col flex overflow-x-hidden">
        {!pathname.includes("/login") && !pathname.includes("/signup") && (
          <Navbar />
        )}
        <div
          className={`flex flex-col gap-[2vw] w-full ${
            !pathname.includes("/login") && !pathname.includes("/signup")
              ? "min-h-full max-h-[calc(100%-8vw)]"
              : "min-h-screen"
          } overflow-y-scroll`}
        >
          <main className="h-fit w-full px-[6vw]">{children}</main>
          {!pathname.includes("/login") && !pathname.includes("/signup") && (
            <Footer />
          )}
        </div>
      </body>
    </html>
  );
}
