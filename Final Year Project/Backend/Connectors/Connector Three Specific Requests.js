let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Enter_on_Use",
    database: "oh215"
});

// Query such as request data or update tables //
// Includes protection against SQL Injection using the escape function //
let adr = 'Variable passed from Webpage';
let sql = 'SELECT * FROM Users WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});

    // Connection close //
con.end();
