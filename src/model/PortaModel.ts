export default class PortaModel{
    #numero : number
    #temPresente : boolean
    #selecionada  : boolean
    #aberta : boolean

    //Construtor:
    constructor(numero : number, temPresente = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }
    
    get temPresente(){
        return this.#temPresente
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }

    alterarSelecionada(){
        //setando o valor da variavel selecionad
        //se for false vai ser true, se for true vai ser false
        const selecionada = !this.selecionada
        //retornando um novo objeto Porta com esse valor alterado
        return new PortaModel(this.numero,this.temPresente, selecionada, this.aberta)
    }

   abrir(){
        const aberta = true
        return new PortaModel(this.numero,this.temPresente, this.selecionada, aberta)
    }
    
    desselecionar(){
        const selecionada = false;
        return new PortaModel(this.numero,this.temPresente, selecionada, this.aberta)
    }

}