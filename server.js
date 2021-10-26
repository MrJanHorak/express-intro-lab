//import modules

import express from 'express'

// import petnames from database
import * as petnamesDb from './data/petNames-db.js'

// create Express App

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.use(express.static('public'))


// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req,res){
  res.redirect('/petNames')
})

app.get('/home', function(req, res){
  res.render('home')
})

app.get('/petNames', function(req,res){
  petnamesDb.find({}, function(error, petNames){
    res.render('petNames/index', {
      petNames: petNames,
      error, error
    })
  })
})

// Tell the app to listen on port 3000


app.listen(3000, function () {
  console.log("Listening on port 3000")
})

