// const mysql = require('mysql2');   -----  old es5 way to write

import mysql from "mysql2"; //pulls library of mysql tools from mysql2 and puts on this page

const db = mysql.createConnection({ // creates a connection and gives name "db"
    host: "127.0.0.1",
    database: "bocacode",
    user: "root",
    password: "h&p5o=i#Iql_0I_e5rad"
});

console.log('we are connected.');

db.query('UPDATE tv SET media_type = "Hulu" WHERE media_type = "comedy central"', (err) => {
    if (err) console.log("update error ->", err);
    else console.log('update done!');
});


db.query("SELECT * FROM tv",(err,results) => {
    if(err) console.log('error ->', err);
    console.table(results);
});

console.log('The end.');
