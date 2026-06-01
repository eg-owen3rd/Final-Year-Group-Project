const con = require("./DB_Connector")

// Query module for the User table //

// Create a new user for the user table //
function CreateUser(Name, Email, Pass_Hash) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Users (User_ID, Name, Email, Pass_Hash, Created_at) ' +
            'VALUES (?, ?, ?, ?, NOW())';
        con.query(sql, [Name, Email, Pass_Hash], (err, result) => {
            if (err) return reject(err);
            resolve(result.insertID);
        });
    });
}

// Get User By Email from Table //
function GetUsrByEml(email) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Users WHERE email = ?";
        con.query(sql, [email], (err, rows) => {
            if (err) return reject(err);
            resolve(rows[0]); // return first user
        });
    });
}

// DELETE user //
function DltUser(id) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM Users WHERE Email = ?";
        con.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = { CreateUser, GetUsrByEml, DltUser };