import { useRouter } from "next/router"

export default function rotas(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    return(
        <div>
            <h1>Rota  / {id} / {nome}</h1>
        </div>
    )
}