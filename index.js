const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username != "hman" || password != "pass"){
    res.status(400).json({"msg": "wrong inputs"})
    return
  }

  if(kidneyId !=1 && kidneyId !=2){
    res.status(400).json({"msg": "wrong inputs"})
    return 
  }

  res.json({
    msg: "Your Kidney is fine!"
  })
});

app.listen(3000, () =>{
  console.log("Server is listening on port 3000");
});

