import { useRouter } from "next/router"

export default function rotas(){
    const router = useRouter()
    const id = router.query.id
    return(
        <div>
            <h1>Rota  / {id} / buscar+++++</h1>
        </div>
    )
}