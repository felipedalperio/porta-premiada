import Link from 'next/link'
import router, { useRouter } from 'next/router'
export default function rotas(){
    return(
        <div>
            <h1>Rota index</h1>
            <ul>
                <Link href="/rotas/id/paramns?codigo=123&nome=felipe">
                     <li>Paramns</li>
                </Link>
            </ul>

            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <button onClick ={() =>router.push("rotas/123/buscar")}>Buscar</button>
            </div>

        </div>

    )
}