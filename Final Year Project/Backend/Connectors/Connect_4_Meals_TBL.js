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

// Contents of each meal, connects to all tables except Users tables //
// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
//    let sql = "INSERT INTO Meals (Recipe_ID, Title) VALUES ('01', 'Chicken Pasta')";
//    con.query(sql, function (err, result){
//        if (err) throw err;
//        console.log("1 record inserted");
//    });

    let sql = "UPDATE Meals SET Description = 'A easy pasta meal', Skill_Lvl = '2', Created_By = '01' WHERE Recipe_ID = '01'";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});