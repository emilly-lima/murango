"use client";
import * as React from 'react'
import Image from "next/image";
import Receitas from './receitas';

export default function Mural() {
    return (
        <div className='flex relative flex-row w-full py-32 justify-center items-center space-around h-full'
        style={{
            backgroundImage: "url('/assets/Ativo 11.svg')",
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
        }}>
            <Receitas/> 
        </div>
    )
}