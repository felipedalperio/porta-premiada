import PortaModel from "../src/model/PortaModel";

export function criarPortas(qntde: number, portaComPresente: number):PortaModel[]{
    return Array.from({length: qntde}, (_, i) =>{
        //implementando o valor do indice:
        const numero = i + 1
        //se  o numero for igual a porta selecionada , entao quer dizer que tem presente:
        const temPresente = numero ==  portaComPresente
        return new PortaModel(numero,temPresente)
    })
}

export function atualizarPortas(portas:PortaModel[], portaModificada : PortaModel): PortaModel[]{
    return portas.map(portaAtual =>{
        const igualModificada = portaAtual.numero ===portaModificada.numero
        
        if(igualModificada){
            return portaModificada
        }else{
            return  portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}