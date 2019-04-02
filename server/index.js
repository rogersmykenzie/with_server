const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({message: 'You hit the server!'})
})

app.listen(5055, () => console.log('Listening on Port 5055'));