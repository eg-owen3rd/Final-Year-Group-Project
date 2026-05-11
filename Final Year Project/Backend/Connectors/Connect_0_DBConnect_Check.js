// Connector method shell one. //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
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

// Note For large scale manual inserts for test data //
// let sql = "INSERT INTO Table_to_Use (values to update) VALUES ?";
// let values = [List of values (surround by square bracket each time)];
// console log update = console.log("Update submitted: " + result.affectedRows);

// Update method for quick use //
// let sql = "UPDATE Users SET Email = 'Email@email.com', Pass_Hash = 'PASSHASH', Created_at = now() WHERE User_ID = '01'";
//     con.query(sql, function (err, result){
//         if (err) throw err;
//         console.log("1 record inserted");
//     });

