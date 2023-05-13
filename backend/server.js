const express = require('express');
const cors = require('cors');

const router = express.Router();
const app = express();

app.use(cors())
app.use(express.json());

app.use(router)
app.listen(3001, () => {
    console.log('Server Started at ${3001}')
})