module.exports = (sequelize_me, Sequelize) => {
    const Staff = sequelize_me.define("staff", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        gender: {
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
    return Staff;
}