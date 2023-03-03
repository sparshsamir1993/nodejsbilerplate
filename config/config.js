require("dotenv").config();
module.exports = {
    development: {
        username: "root",
        password: "example",
        database: "testNameDB", // change this
        host: "db",
        dialect: "mysql",
    },
    test: {
        username: "root",
        password: "password",
        database: "testNameDBTest", // change this
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql",
    },
};
