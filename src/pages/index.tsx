import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"

export default function Form() {

  const [qntPortas, setQntPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}> 
        <div>
            <Cartao bgColor="#c0392c" >
                <h1>Monty hall</h1>
            </Cartao>
            <Cartao>
                  <EntradaNumerica text="Qntd Portas?" 
                  value={qntPortas} onChange={ novaQnt => setQntPortas(novaQnt)} />
            </Cartao>
        </div>
        <div>
            <Cartao >
            <EntradaNumerica text="Porta com presente?" 
                  value={comPresente} onChange={ novoPresente => setComPresente(novoPresente)} />
            </Cartao>
            <Cartao bgColor="#28a085" >
              <Link href={`/jogo/${qntPortas}/${comPresente}`}>
                  <h2 className={styles.link} >Iniciar</h2>
              </Link>
            </Cartao>
        </div>
       
    </div>
  )
}
