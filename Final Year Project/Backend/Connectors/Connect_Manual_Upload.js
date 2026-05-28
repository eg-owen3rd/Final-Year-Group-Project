// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Setting the Users up in the database //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "UPDATE Users SET Email = 'Email@email.com', Pass_Hash = 'PASSHASH', Created_at = now() WHERE User_ID = '01'";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
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

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Quantity numbers for ingredients //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO RecipeIng (Recipe_ID, Ingre_ID, Quantity) VALUES ('01', '01', '7kg')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Connector method between Recipe and Equipment, to be used in specific queries //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO RecipeEquip (Recipe_ID, Equip_ID) VALUES ('01', '01')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Connector method between Meals and Dietary, to be used in specific queries //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO RecipeDtry (Recipe_ID, Dietary_ID) VALUES ('01', '01')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });

    // Connection close //
    con.end();
});

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
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

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Ingredients for each meal //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO Ingredients (Ingre_ID, Name) VALUES ('01', 'Chicken')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});

// Standard code copy-paste from connect_0 //
let mysql = require('mysql');

//Creation of the connection using host address, //
// User ,and Pass //
let con = mysql.createConnection({
    host: "dragon.kent.ac.uk",
    user: "oh215",
    password: "Password_upload",
    database: "oh215"
});
// Standard code copy-paste from connect_0 //

// Required equipment for each recipe //

// Querying the database //
con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    let sql = "INSERT INTO Equipment (Equip_ID, Name) VALUES ('01', 'Spoon')";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
    // Connection close //
    con.end();
});

