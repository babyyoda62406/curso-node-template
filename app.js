console.clear()
const hbs  = require("hbs")
const express = require("express")
const app = express()
require("dotenv").config()

port  = process.env.PORT


hbs.registerPartials(__dirname + "/views/partials" , (arg)=> {})

app.set('view engine' , 'hbs')
app.use(express.static("royal"))


app.get('/' ,(req, res) => {
    res.render("home" , {
        nombre: "Deivis Torres.", 
        titulo: "Curso de node"
    })
})

app.get('/about' , (req, res)=>{
    res.render('about' , {
        // Variables en caso de entornos dinamicos
    })
})

app.get('/service' , (req, res)=>{
    res.render('service' , {
        // Variables en caso de entornos dinamicos
    })
})


app.get('/blog' , (req, res)=>{
    res.render('blog' , {
        // Variables en caso de entornos dinamicos
    })
})

app.get('/contact' , (req, res)=>{
    res.render('contact_us' , {
        // Variables en caso de entornos dinamicos
    })
})



/*
app.get('*' , (req , res) => {
    let fileName = req.url
    res.sendFile(__dirname + "/royal/"+ fileName + ".html")
    
})
*/

app.listen(port , ()=> {
    console.log("Listen un port ", port)
})

