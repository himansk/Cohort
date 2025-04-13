const express = require(`express`);

const app = express();

function isOldEnough(age){
  return age >= 14 ? true : false ;
}

function isOldEnoughMiddleware(req, res, next){
  return req.query.age >=14 ? next() : res.json({ msg : "Sorry!!! You are under Age" })
}


app.use (isOldEnoughMiddleware);

app.get("/ride1", function(req, res){

  if(isOldEnough(req.query.age)){
    res.json({
      msg: "You have done the ride1"
    })
  }else{
    res.json({
      msg: "Sorry!!! You are under Age"
    })
  }
  
})

app.get("/ride2", isOldEnoughMiddleware,  function(req, res){

  res.json({
    msg: "Welcome to the Ride"
  })
  
})



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

