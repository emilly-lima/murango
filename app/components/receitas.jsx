import Image from "next/image";
export default function Receitas() {
    return (
        <div className='grid grid-cols-2 gap-x-60 gap-y-80 space-between justify-center'>
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
                    aaaaaaaaaa
                    </div>         
                </div>

                <div id="card-receita">

                </div>

                <div id="card-receita">

                </div>
                
                <div id="card-receita">

                </div>
        </div>
    )
}