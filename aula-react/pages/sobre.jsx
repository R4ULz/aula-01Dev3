import Menu from "./menu";
import Link from "next/link"

export default function Sobre() {
    return (
        <div className="h-screen bg-white">
            <Menu />
            <section className="mt-10">
                <h2 className="text-lg flex justify-center font-bold">Quem Somos</h2>
                <p className="text-md">Bem-vindo à minha página! Sou uma pessoa apaixonada e dedicada a aprender programação. Desde 2017, tenho trabalhado para meus conhecimentos.</p>
            </section>
            <section className="flex mt-10 text-blue-500 justify-center">
                <Link href={"/contato"}>Vá para nossa página de contato</Link>
            </section>
        </div>
    )
}