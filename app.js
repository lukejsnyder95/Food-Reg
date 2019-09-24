const express =  require('express')
var bp = require('body-parser')
var firebase =  require('firebase')

var app = express()
app.use(bp.json());
var cors = require('cors');

app.use(cors());

var firebaseConfig = {
    apiKey: "AIzaSyDLTHO2THrb2eqCZdgAUDxY4X9DUEhV3ec",
    authDomain: "foodregistry-fe864.firebaseapp.com",
    databaseURL: "https://foodregistry-fe864.firebaseio.com",
    projectId: "foodregistry-fe864",
    storageBucket: "foodregistry-fe864.appspot.com",
    messagingSenderId: "379918489539",
    appId: "1:379918489539:web:555ebe831978ea9c320f76"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()


app.post('/createProfile',(req,res)=>{
    body = req.body
    database.ref('/user/'+body.username).set(body)
    res.send('data saved')

})
app.put('/editProfile',(req,res)=>{
    var collecion = database.ref('/user/')

})
app.get('/login',(req,res)=>{
    console.log('Test')
    body = req.body
    res.send('test');
    // res.send(database.ref('/user/' + body.email).once('value').then(function(result){
       
    //    var username = result.val().email
    //    var password = result.val().password
    // })
    
})
app.listen(3000, ()=>{
    console.log('listen')
})