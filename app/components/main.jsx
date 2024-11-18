"use client";
import * as React from 'react'
import Image from "next/image";

export default function Main() {
    return (
        <main className='flex w-full flex-row space-between gap-20 nowrap justify-center items-center'>
            <Image
                src="/assets/Ativo-morango.svg" 
                alt=""
                width={200}
                height={250}
                className=''
                />  

            <p className='text-justify text-2xl left-1/4 bottom-28'>Olá, eu sou o Murango!<br />
            Nesse site você irá encontrar várias receitas minhas! Ao realizar login você <br />pode avaliar e salvar suas receitas favoritas.</p>

        </main>
    )
}