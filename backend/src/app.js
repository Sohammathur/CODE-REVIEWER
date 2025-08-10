const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173", // local dev
        "https://code-reviewer-five-delta.vercel.app" // deployed frontend
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/ai', aiRoutes)

module.exports = app;