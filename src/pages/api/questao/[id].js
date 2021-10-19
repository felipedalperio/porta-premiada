export default function questao(req, res){
        if(req.method == "GET"){
            const id = req.query.id;
            res.status(200).json({
                id,
                enunciado: 'Qual sua cor preferida ?',
                resposta: ['Branca','Amarela','Vermelha','Azul']
            })
        } else{
            res.status(405).send()
        }
}