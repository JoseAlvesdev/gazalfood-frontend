import Link from "next/link"

export default function Index() {
    return (
        <div>
            <Link href={'/Login'}>login</Link>
                
            <title>Minha Aplicação</title>
            {/* <meta name="description" content="Descrição da minha aplicação" /> */}
      
            <h1>Bem-vindo à Minha Aplicação!</h1>
            <p>Esta é a página inicial.</p>
        </div>
    );
}