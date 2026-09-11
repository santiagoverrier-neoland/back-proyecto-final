import express from 'express';
import cors from 'cors'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
}))

app.get('/', (req, res) => {
  res.send('Servidor disponible 🟢');
});

app.get('/productos', (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "Producto #1",
            precio: 1000
        },
        {
            id: 2,
            nombre: "Producto #2",
            precio: 2000
        }
    ])
})

app.listen(port, () => {
  console.log(`Backend disponible en puerto: ${port}`);
});