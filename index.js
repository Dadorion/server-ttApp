import express from 'express'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get('/', (req, res) => { res.json('Hello, Anton!') })

async function startApp() {
   try { app.listen(PORT, () => { console.log('SERVER WORK ON PORT ' + PORT) }) }
   catch (e) { console.log(e) }
}

startApp()