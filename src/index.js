const express = require("express");
const {PORT} = require("./config/ServerConfig")
const app = express();

const PrepareAndStartServer = () =>{
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
}
PrepareAndStartServer();

