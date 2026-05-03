// Connector method shell one. //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "localhost",
    user: "oh215",
    password: "Enter_on_Use",
    database: "oh215"
});

//Error throw and connection confirm//
con.connect(function (err){
    if (err) throw err;
    console.log("Connected");

    // Table queries for required connection here //
    // Query such as request data or update tables //

    // Connection close //
    con.end();
});

