const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('./models')
const app = express();
const port = 3000;
process.env.NODE_ENV = 'Development';

// Creo todas las tablas en la base si no existen
db.blood_type.sync();
db.user.sync();
db.child.sync();
db.check.sync();
db.check_result.sync();
db.child_of.sync();
db.child_request.sync();
db.notification.sync();
db.study.sync();
db.study_result.sync();
db.vaccine.sync();

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
  console.log(`Listening at port: ${port}`);
})
