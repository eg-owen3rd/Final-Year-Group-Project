let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Enter_on_Use",
    database: "oh215"
});

//Error throw and connection confirm//
con.connect(function (err){
    if (err) throw err;
    // Table queries for required connection here //
    con.query("SELECT * FROM Meals", function (err, result){
        if (err) throw err;
        console.log(result);
    });
    // Query such as request data or update tables //
    let adr = 'Mountain 21';
    let sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    // Connection close //
    con.end();
});