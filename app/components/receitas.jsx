"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function Receitas() {
    const router = useRouter()
    return (
        <div className='grid grid-cols-2 gap-x-60 gap-y-80 space-between justify-center'>
                <button id="card-receita" onClick={() => router.push('/boloMorango')}>
                    <Image
                            src="/assets/default-image.jpg" 
                            alt="Ativo 11"
                            width={350} 
                            height={100}
                            className=''
                            id="img-receita"
                            />   
                    <div id="title-receita">
                    Bolo de Morango
                    </div>         
                </button>

                <div id="card-receita">
                <Image
                            src="/assets/default-image.jpg" 
                            alt="Ativo 11"
                            width={350} 
                            height={100}
                            className=''
                            id="img-receita"
                            />   
                    <div id="title-receita">
                    Sorvete de Morango
                    </div>
                </div>

                <div id="card-receita">
                <Image
                            src="/assets/default-image.jpg" 
                            alt="Ativo 11"
                            width={350} 
                            height={100}
                            className=''
                            id="img-receita"
                            />   
                    <div id="title-receita">
                    Torta de Morango
                    </div>
                </div>
                
                <div id="card-receita">
                <Image
                            src="/assets/default-image.jpg" 
                            alt="Ativo 11"
                            width={350} 
                            height={100}
                            className=''
                            id="img-receita"
                            />   
                    <div id="title-receita">
                    Escondidinho de Morango e Ninho
                    </div>
                </div>
        </div>
    )
}