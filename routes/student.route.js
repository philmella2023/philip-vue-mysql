module.exports = app => {
    
    var router = require("express").Router();


//import student controller
const students_logic = require("../controllers/student.controller.js");

//import express router
var router = require("express").Router();

//retrieve all students api route

router.get("/r", students_logic.retrieve_students);


//create student api route
//http://localhost:8489/students/r
router.post("/add", students_logic.create);


//count the number of students api route
router.get("/count",students_logic.count_students);

//app.get('/api/items/count', countController.countItems);
//http://localhost:8489/students/r
//update students api route
 router.put("/update/:id", students_logic.update_student);

//http://localhost:8489/students/r
//delete students api route

    //define default route
    app.use('/students', router);

}