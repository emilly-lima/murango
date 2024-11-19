import Image from "next/image";
export default function Footer() {
    return (
        <div id="footer">
            <img
                src="/assets/Ativo 12.svg"
                alt=""
                width={200}
                height={100}
                id="img-footer"
            />
            <div id="text-footer">
                <p className="pb-5">© 2024 Murango by Emilly Lima</p>
            
                <div className="flex flex-row gap-x-5 align-baseline">
                    <Image 
                    src="/assets/linkedin.png" 
                    alt="linkedin"
                    width={32}
                    height={30}
                    />
                    <a href="https://www.linkedin.com/in/emilly-lima--/">emilly-lima--</a>
                    
                    <Image 
                    src="/assets/github.png"
                    alt="github"
                    width={32}
                    height={30}
                    />
                    <a href="https://github.com/emilly-lima">emilly-lima</a>        
                </div>
            </div>
        </div>
    )
}
