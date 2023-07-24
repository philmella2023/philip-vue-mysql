module.exports = app => {
    
    var router = require("express").Router();


//import staff controller
const staff_logic = require("../controllers/staff.controller.js");

//import express router
var router = require("express").Router();

//create student api route
router.post("/add", staff_logic.create);


//update students api route
//router.put("/:id", students_logic.update_student);

    //define default route
    app.use('/staff', router);

}