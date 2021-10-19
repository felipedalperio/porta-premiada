export default (req, res) =>{
    if(req.method ==="GET"){
        res.status(200).json({
            meotod: "visualizar"
        })
    }else if(req.method ==="POST"){
        res.status(200).json({
            meotod: "Backend"
        })
    }else{
        res.status(200).json({
            meotod: "seila mano kk"
        })
    }
    
}