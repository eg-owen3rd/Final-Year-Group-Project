// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "/rfallo",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Method for setting and getting user preferences (No meat, Celiac , etc) //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO UserPref (Pref_ID, User_ID, Dietary_ID) VALUES ('01', '01','01')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});