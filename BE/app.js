const express = require('express');
const app = express();
const port = 3000;
process.env.NODE_ENV = 'Development';

// Routes
const apiRouter =  require('./routes/api');

if (process.env.NODE_ENV === 'Development') {
    require('./config').config();
}

app.get('/', (_, res) => { res.send('Bienvenido al BackEnd de Baby App!') })
app.use('/api',apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
