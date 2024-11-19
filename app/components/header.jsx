"use client";
import * as React from 'react'
import Image from "next/image";

const windowW = window.innerWidth;
const windowH = window.innerHeight;

export default function Header() {
    return (
        <header className='flex justify-center'>
            <Image
                src="/assets/header.svg" 
                alt=""
                width={windowW}
                height={windowH}
                />

             <Image
                src="/assets/murango.svg"
                alt=''
                width={400}
                height={200}
                className='absolute top-7'
                priority
             />   

        </header>
    )
}