// Express
const express = require('express');
const app = express();


//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de base de datos
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
mongoose.set("debug", true)

require('./models/User')
require('./models/Dog')
require('./models/Walk')

require('./config/passport')

//Rutas
app.use('/v1', require('./routes'));

// Iniciando el servidor

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`)
})

