//const { request } = require("express");
const db = require("../models");
const Student = db.students;
//const Op
const Op = db.Sequelize.Op;

//Creates and saves a new student
exports.create = (req, res) =>{
    //.validate the request
    if(!req.body.first_name){
        res.status(400).send({
            message: "Fill in the First Name"
        });
        return;
    }

    const add_student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        class: req.body.class,
        physical_address: req.body.physical_address,
        status: req.body.status ? req.body.status : false
    }

    Student.create(add_student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            //RETURN ERROR ON FAILURE
            res.status(400).send({
                message: err.message || "Error occurred while adding Student"
            });

        });
    }        




//retrieves all students
exports.retrieve_students= (req, res) =>{
    const first_name = req.query.first_name;


    var_condition = first_name ? { first_name: { [Op.like]: `%${first_name}&` } } : null;

    //Student.findAll()

    Student.findAll({})
       .then(data => {
           res.send(data);
       })
       .catch(err => {

        //send error message
        res.status(400).send({
            message: err.message || "Error occured while retrieving students"
        });
    });
};

//update student by id
exports.update_student = (req, res) => {
    const first_name = req.params.first_name;
    console.log("RETURN, first name " + first_name);
    Student.update(req.body, {
        where: {first_name: first_name}
    }).then(num => {
        console.log("RETURN, num" + num);
        if(num > 0){
            res.send({
                status: 100,
                status_message: "Success",
                message: `Student with first name = ${first_name} updated successfully.`
            });
        
        }else{
            res.send({
                status: 400,
                status_message: "Error",
                message: `Student with first name = ${first_name} not found.`
                
            });
        }
    }).catch(err =>{
        res.status(500).send(
            {
                message:`Error updating Student with id = ${first_name}. Error ${err}`
            
            });
        });
};


exports.count_students = (req,res)=>{

    Student.count({})
        .then(num =>{
            if(num > 0){
                res.send({
                    message: `the num of rows is ${num}`,
                    status: "success",
                    status_code: 100
                });
            }
            else {
                res.send({
                    message: "no records in the table",
                    status: "error",
                    status_code: 400
                });
            }
        })
        .catch(err=>{
            res.send({
                message:"error occured while counting records" || err.message,
                status: "error",
                status_code: 400
            });
        });
};



    
