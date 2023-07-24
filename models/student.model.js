module.exports = (sequelize_me, Sequelize) => {
    const Student = sequelize_me.define("student", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        class: {
            type: Sequelize.STRING
        },
        physical_address: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING

        }
    });
//an api for updating a student or retrieving students in a db
    return Student;
}