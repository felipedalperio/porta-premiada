import Link from "next/link";
import { useRouter } from "next/router"

export default function paramns(){
    const router = useRouter()
    const id = router.query.codigo;
    const nome = router.query.nome;
    return(
        <div>
            <h1>paramns: {id} - {nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}