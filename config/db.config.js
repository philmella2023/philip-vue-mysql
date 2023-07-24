module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "school_a",
    dialect: "mysql",
    pool: {
        // maximum number of connections to db pool
        max:5,
        //minimum number of connections to db pool
        min: 0,
        //maximum time, in milliseconds that db pool tries to connect before throwing an error
        acquire: 30000,
        //maximum time in milliseconds, that connection can be dormant before it closes
        idle: 10000

    }
}