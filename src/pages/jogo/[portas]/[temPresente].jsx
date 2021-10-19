import styles from  "../../../styles/jogo.module.css"
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../../functions/Porta";
import Porta from "../../../components/Porta";
import PortaModel from "../../../model/PortaModel";
import Link from "next/link";
import {useRouter} from "next/router"

export default function jogo(){
  const router = useRouter()

  const [p1, setP1] =  useState(new PortaModel(1))
  
  const[valido,setValido] = useState(false)
  const [portas,setPortas] =useState([])

  useEffect(()=>{
    //LENDO OS VALORES PASSADOS
      const portas = +router.query.portas;
      const temPresente = +router.query.temPresente;
      //VALIDANDO
      const qntPortasValido = portas >=3 && portas <=20
      const  temPresenteValido = temPresente >= 1 && temPresente<= portas

      setValido(qntPortasValido && temPresenteValido)
  },[portas])

  useEffect(()=>{
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas,temPresente))
  },[router?.query])


  function rederizarPorta(){
    return valido && portas.map(porta=>{
          return <Porta key={porta.numero} value={porta} 
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div className={styles.jogo} > 
        <div className={styles.portas}>
            {valido ?
              rederizarPorta()
            :
              <h2>Valores invalidos</h2>
            }
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar Jogo</button>
            </Link>
        </div>
    </div>
  )
}