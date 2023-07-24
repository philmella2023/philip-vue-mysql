// import express, body-parser and cors

// building Rest APIs
const express = require("express");

//help to parse the requesrt and create the req.body object
const bodyParser = require("body-parser");

//middleware to protect api
const cors = require("cors");

//define app framework
const app = express();

//parse requests of content-type application types
app.use(bodyParser.json());

//parse requests of content type application
app.use(bodyParser.urlencoded({extended: true}));

//simple API request
app.get("/v1/get-root", (request, response) =>{

    response.json({
        mesage: "Your first API Request"
    })

});

app.get("/v1/get-root-param", (request, response) =>{
    const id_ = request.query.id;
    if(!id_){
        //Invalid request if id is not included
        response.status(400).send({
            message:"ID param not passed, please pass required parameter",
            status: "Error",
            status_code: 400
        });    
    }else if(id_ == 100){
    response.json({
        message:"Valid ID",
        status: "Success",
        status_code: 200

    });
}else{
        response.status(400).send({
            message:"Invalid ID",
            status: "Error",
            status_code: 400
        });
}
}   ); 
app.get("get/v1/add-numbers", (request, response)=> {
        a=100;
        b= 200;

    if (isNaN(a) ||NaN(b)) {
        response.status(400).send({
            message:"Invalid response provided",
            status: "Error",
            status_code: 400
        });
    } else if (a ===100 && b ===200){
            c = a + b;
        response.json({
            message: "Addition successful with specific values",
            result: c,
            status: "Success",
            status_code: 200
        });
    }else {
        const c = a + b;
        response.json({
            message: "Addition successful",
            result: c,
            status: "Success",
            status_code: 200
        });
    }
});  


//import models

//create tables that don't exist
const db = require("./models");
db.sequelize_me.sync();

//define the routes
require("./routes/student.route")(app);
require("./routes/staff.route")(app);
//defines the port on which the project will run on
const PORT = 9003;

//Listen to the port
app.listen(PORT, () =>{
    console.log(`Server succesfully stared at port ${PORT}.`);
});  






