const http = require("http"),
      logger = require("morgan"),
      express = require("express"),
      bodyParser = require("body-parser");
    
 let app = express();
 let port = 8000;
 
 app.use(bodyParser.json());

app.get("/hello", (res, req)=>{
    res.json({message: "Hello world"});
})

 app.listen(port, function(error){
     console.log("Listening on port: " + port)
 });