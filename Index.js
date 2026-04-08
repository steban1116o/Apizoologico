const express = require('express')
const app = express()
const port = 3000
const authRoutes = require("./routers/authetication"); 
app.get('/prueba', (req, res)=>{
    res.send('Pipe deja de ser tan canson')
})
app.use("/api", authRoutes)
app.listen(port, () => {
    console.log('la aplicacion se esta ejecutando por el puerto')
})
