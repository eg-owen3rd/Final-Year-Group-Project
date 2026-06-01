// Standard code copy-paste from connect_0 //
const con = require("./DB_Connector")

// Query module for the Ingredients table //



// Get from the Ingredients table //
function getIng() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM Ingredients", (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

function insertIng(id, name) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Ingredients (Ingre_ID, Name) VALUES (?, ?)";
        con.query(sql, [id, name], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {getIng, insertIng};