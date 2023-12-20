const con =require("constants");
const express = require("express");
const app = express();
const studentRouter =require("./router/studentRouter");
const port = process.env.PORT || 3010;

app.use(express.json());
app.use('/students', studentRouter);
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');;
});
app.listen(port,()=>{
console.log("you are connected to port"+port);
});