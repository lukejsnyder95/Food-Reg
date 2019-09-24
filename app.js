const express =  require('express')
var bp = require('body-parser')
var cors = require('cors');
var firebase =  require('firebase')

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

var app = express()
app.use(bp.json());
app.use(cors());
// app.use((req,res,next)=>{
// 	res.set('Access-Control-Allow-Origin', '*');
//   res.set('Access-Control-Allow-Headers','content-type');
//   res.set('Access-Control-Allow-Methods','GET, POST, DELETE');
// });





app.listen('8989', ()=>{
    console.log('listen  8989')
})





app.post('/createProfile',(req,res)=>{
    body = req.body
    console.log("hi")
    database.ref('/user/'+body.fname).set(body)
    res.status(200).send({message: 'data saved'})
})




app.get('/loadProfile',(req,res)=>{
//requests a username profile
  var result = database.ref('user/').once("value").then(function(snapshot){
    snapshot.forEach(function (childSnapshot){
      if(req.body.fname == childSnapshot.val().fname){
        console.log(childSnapshot.exportVal())
        res.send(childSnapshot.exportVal())
      }
    })
  })
})   
        
app.put('/updateProfile',(req,res)=>{
  //takes form input and updates the entire profile
  username = req.body.fname
  var result = database.ref('user/'+fname).update(req.body,err=>{
    if(err){
    console.log(err)
    res.status(400).send('bad data sent')
    }
    else{
      res.send('update Suscessful')
    }
  })   

})


app.get('/login',(req,res)=>{
    body = req.body
    
    var query = firebase.database().ref("/user").orderByKey()
    query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            if (body.username === childSnapshot.val().username)
                if (body.password === childSnapshot.val().password)
                    res.send(body.type)
        })

        // User does not exist OR password is invalid
        res.send("DNE")
    })
})
app.put('/changeSubscription',(req,res)=>{//takes unique identifier and suscriptionID to change
  body = req.body
  console.log(body)
  update = {subscription:body.subscriptionId, }
  var result = database.ref('user/'+body.username).update(update,err=>{
    if(err){
      res.status(400).send('there was an error')
      console.log(err)
    }
    else{
      res.status(202).send('changes sucessful')
    }
  })
})
app.get('/loadSubscriptions',(req,res)=>{//THIS DOES NOT FUNCTION ATM
  var result = database.ref('subscripition/')
  .once("value",function(snapshot){
    subscriptions=[]
    snapshot.forEach(function (childSnapshot){ 
        console.log(childSnapshot.exportVal())
        subscriptions.push(childSnapshot.val())

  //load all available subscriptions

//   res.send('attempted')
  })
  console.log(subscriptions)
  res.send(subscriptions)
  console.log('retrieved')
  })
})

app.put('/registerFood',(req,res)=>{
  body = req.body
    database.ref('food/'+body.name).set(body)
    res.status(201).send('data saved')
})
app.put('/registerCarePackage',(req,res)=>{
  body = req.body
  database.ref('package/'+body.name).set(body)
  res.status(201).send('data saved')
})
