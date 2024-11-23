import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Gift Click",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="w-screen min-h-screen h-auto bg-white flex-col flex overflow-x-hidden">
        <Navbar/>
        <div className="flex flex-col gap-[2vw] w-full min-h-full max-h-[calc(100%-8vw)] overflow-y-scroll">
          <div className="h-fit w-full px-[6vw]">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
