//import modules

import express from 'express'

// create Express App

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes

app.get('/home', function(req, res){
  res.render('home')
})


// Tell the app to listen on port 3000


app.listen(3000, function () {
  console.log("Listening on port 3000")
})

