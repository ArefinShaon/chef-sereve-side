const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors());

app.get('/', (req,res) => {
    req.setEncoding('server is running');
})

app.listen(port, () => {
    console.log(`server is running on port:${port} `);
})