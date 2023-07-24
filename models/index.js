//import db configurations
const dbconfig = require("../config/db.config.js")

//import sequelize module
const Sequelize = require("sequelize");

const sequelize_me = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize_me = sequelize_me;

//import student model
db.students = require("./student.model.js")(sequelize_me, Sequelize);


//import staff model
db.staff = require("./staff.model.js")(sequelize_me, Sequelize);


module.exports = db;