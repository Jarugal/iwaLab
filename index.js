const http = require("http");
axios = require("axios");

http.createServer((req, res)=>{
    res.write(users.join(", "));
    res.end()
}).listen(8000);

(async function getNames(){
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name)
    } catch(error){
        console.log(error)
    }
})()