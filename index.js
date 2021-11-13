const express = require('express');     //require module express which returns a function
const app = express();  //and this fuction call returns an object

//this app object has bunch of methods
/*app.post(); //create data
app.put();  //update data
app.delete();   //delete data
*/

// "app.get"
//recieve data 
//this get method take two args
// 1. url which contains the endpoint as in slash which represents the root of website 
// 2. call back func which take two args and also called route handler 
app.get('/', (req, res) => {
    res.send("hello World!!");
});

//app.listen(3000, () => console.log("listening on port 3000"))

//lets define another route
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
});

// Environment Variables
// PORT
//to read the value of the PORT we have process global object
const port = process.env.PORT || 3000;
//now set value of port or default use 3000

//now change listener from hard coded value to port
app.listen(port, () => console.log(`Listening on PORT [${port}]`))

//Routing Parameters
// example /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})