//const { request } = require("express");
const db = require("../models");
const Staff = db.staff;
//const Op

//Creates and saves a new student
exports.create = (req, res) =>{
    //.validate the request
    if(!req.body.first_name){
        res.status(400).send({
            message: "Fill in the First Name"
        });


    }

    const add_student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        phone_number: req.body.phone_number
       
    }

            res.send()



    Staff.create(add_staff)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            //RETURN ERROR ON FAILURE
            res.status(400).send({
                message: err.message || "Error occurred while adding Staff"
            });

        });
    }   
    
