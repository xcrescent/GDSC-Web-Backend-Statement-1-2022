var mysql = require('mysql');
const createDB = () =>{
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE todolistUser", function (err, result) {
            if (err) return err;
        return("Database created");
        });
    });
}
const createTable = (name)=> {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "todolistUser"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE user (name VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) return err;
            return("Table created");
        });
    });
}

module.exports = {createDB, createTable}