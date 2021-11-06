const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 3000;
process.env.NODE_ENV = 'Development';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const router =  require('./routes/api');

if (process.env.NODE_ENV === 'Development') {
    require('./config').config();
}

app.get('/', (_, res) => { res.send('Bienvenido al BackEnd de Baby App!') })
app.use('/api',router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
