var mysql = require('mysql');
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:'',
    database : "aids"
});
module.exports = pool;
