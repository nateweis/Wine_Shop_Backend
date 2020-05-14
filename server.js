// ///////////////////////////////////////////////
// Heroku = https://artbydev-backend.herokuapp.com
// ///////////////////////////////////////////////
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

// /////////////////////////////////////////
// MiddleWear
// ////////////////////////////////////////

const corsOption = {
    origin:"*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  }
  
  app.use(cors())
  app.options('*', cors())

  app.use(express.json({ limit: '10mb' }));
  // app.use(express.urlencoded({ limit: '10mb' }));

//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Credentials", true)
//     if(req.method === 'OPTIONS'){
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//       return res.status(200).json({})
//     }
//     next();
//   })

app.use('/public', express.static('public'))

// /////////////////////////////////////////
// Routes
// ////////////////////////////////////////

const payController = require('./controllers/payRoutes')
app.use('/pay', payController);

const wineController = require('./controllers/wineRoutes')
app.use('/wine', wineController);



app.listen(port, () => {console.log("The Ecomrence Site has Started")})