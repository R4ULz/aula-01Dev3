import Link from "next/link";
import Menu from "./menu";

export default function Contato(){
    return(
        <div className="h-screen bg-white">
            <Menu />
            <section className="mt-10">
                <h2 className="text-lg flex justify-center font-bold my-4">Informações de contato</h2>
                <p className="text-md flex justify-center items-center">Se quiser entrar em contato comigo pelo telefone pode me mandar uma mensagem em (11) 99999-9999</p>
                <p className="text-md flex justify-center items-center">Se quiser entrar em contato comigo pode me enviar um email em aaaaaaa@gmail.com</p>
            </section>
        </div>
    )
}