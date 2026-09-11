import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import pool from "./data/db.js"


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
}))

app.get('/', (req, res) => {
  res.send('Servidor disponible 🟢');
});

app.get('/productos', async (req, res) => {

    try {
        const [datos] = await pool.execute(`SELECT * FROM productos`)
        res.json(datos)
    } catch (error) {
        res.json({error: error.message})
    }

  
})

app.listen(port, () => {
  console.log(`Backend disponible en puerto: ${port}`);
});