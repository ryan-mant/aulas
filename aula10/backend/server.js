const express = require ('express')
const app = express()
const port = 8050
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://admin:admin123@appdatabase.ry0gm2w.mongodb.net/"
const Pagamento = require("./models/pagamento")
const pagamento = require('./models/pagamento')
app.use(express.json())

app.get("/listar", async(req,res) =>{
    try{
        let dataReferencia= req.query.dataReferencia
        let pagamentos = await Pagamento.find({dataPagamento: dataReferencia})

        valor = 0
        for (const pagamento of pagamentos) {
            valor += pagamento.valorPagamento
        }
        console.log(valor)
        

        
        return res.status(200).json({pagamentos, valor})
    }catch(error){
        console.log(error)
    }
})

app.get("/listar-pagamentos", async(req, res)=>{
    try{
        let pagamentos = await Pagamento.find()
        return res.status(200).json(pagamentos)
    } catch(error){
        return res.status(500).json(error)
    }
})
app.post("/cadastrar-pagamento", async (req, res)=>{
    let pagamento = {...req.body}
    try{
        await Pagamento.create(pagamento)
        return res.status(201).json("Pagamendo cadastrado")
    }catch(error){
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString ,{
    dbName: "DevsMall"
}).then(() => {
    console.log(`Mongo UP on http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})