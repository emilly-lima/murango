"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function Receitas() {
    const router = useRouter()
    return (
        <div className='grid grid-cols-2 gap-x-60 gap-y-80 space-between justify-center'>
                <a href="/BoloMorango" id="card-receita">
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
                </a>
                <a href="/SorveteMorango" id="card-receita">
                        <img
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
                </a>

                <a href="/TortaMorango" id="card-receita">
                    <img
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
                </a>
                
                <a href="/Escondidinho" id="card-receita">
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
                </a>
        </div>
    )
}