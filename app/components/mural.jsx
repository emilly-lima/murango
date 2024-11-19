"use client";
import * as React from 'react'
import Image from "next/image";
import Receitas from './receitas';

export default function Mural() {
    return (
        <div className='flex relative flex-row w-full py-32 justify-center items-center h-full'
        style={{
            backgroundImage: "url('/assets/faixa.svg')",
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
        }}>
            <Image
            src={"/assets/morango2.svg"}
            alt=""
            width={200}
            height={250}
            className='absolute'
            />
            
            <Receitas/> 
        </div>
    )
}