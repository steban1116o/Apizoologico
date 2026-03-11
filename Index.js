const express = require('express')
const app = express()
const port = 3000
app.get('/prueba', (req, res)=>{
    res.send('Pipe deja de ser tan canson')
})

app.listen(port, () => {
    console.log('la aplicacion se esta ejecutando por el puerto')
})