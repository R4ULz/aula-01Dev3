import Titulo from "@/components/Titulo";
import Link from "next/link";
import Menu from "./menu";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Menu />
      <section className="mt-10">
        <h2 className="text-lg flex justify-center font-bold">Olá e bem-vindo!</h2>
        <p className="text-md flex items-center justify-center">Estamos empolgados em tê-lo conosco. Aqui, na nossa página inicial, você encontrará uma visão geral do que temos a oferecer e como podemos ajudá-lo a alcançar seus objetivos.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg flex justify-center font-bold">O que você pode explorar:</h2>
        <ul className="flex justify-center items-center flex-col">
          <li className="text-md"><strong>Sobre Nós</strong>: Conheça a nossa equipe e descubra a missão e os valores que nos movem.</li>
          <li className="text-md"><strong>Serviços</strong>: Explore os diversos serviços que oferecemos e veja como podemos atender às suas necessidades.</li>
          <li className="text-md"><strong>Blog</strong>: Fique atualizado com as últimas notícias, dicas e insights da nossa equipe.</li>
          <li className="text-md"><strong>Contato</strong>: Entre em contato conosco para qualquer dúvida ou solicitação. Estamos aqui para ajudar!</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg flex justify-center font-bold">Destaques da Página:</h2>
        <ul className="flex justify-center items-center flex-col">
          <li className="text-md"><strong>Novidades</strong>: Fique por dentro das últimas atualizações e novidades que temos para oferecer.</li>
          <li className="text-md"><strong>Testemunhos</strong>: Veja o que nossos clientes têm a dizer sobre nós.</li>
          <li className="text-md"><strong>Ofertas Especiais</strong>: Não perca as ofertas e promoções exclusivas que preparamos para você.</li>
        </ul>
      </section>

      <section className="flex mt-10 text-blue-500 justify-center">
        <Link href={"/contato"}>Vá para nossa página de contato</Link>
      </section>
    </div>
  )
}
