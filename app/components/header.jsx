"use client";
import * as React from 'react'
import Image from "next/image";

export default function Header() {
    const [screenSize, setScreenSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    // Atualiza o estado com as dimensões da tela no client-side
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Listener para atualizar as dimensões da tela em caso de redimensionamento
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <header className='flex justify-center'>
           {screenSize.width > 0 && screenSize.height > 0 && (
        <Image
          src="/assets/header.svg"
          alt="Header Image"
          width={screenSize.width}
          height={screenSize.height}
        />
      )}

             <img
                src="/assets/murango.svg"
                alt=''
                width={400}
                height={200}
                className='absolute top-7'
             />   

        </header>
    )
}