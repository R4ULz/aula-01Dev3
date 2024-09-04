import Link from "next/link";

export default function Menu(){
    return (
        <div className="h-30">
            <ul className="flex justify-center gap-10 text-lg">
                <li className="hover:bg-gray-300"><Link href={"/"}>Home</Link></li>
                <li className="hover:bg-gray-300"><Link href={"/sobre"}>Sobre</Link></li>
                <li className="hover:bg-gray-300"><Link href={"/contato"}>contato</Link></li>
            </ul>
        </div>
    )
}