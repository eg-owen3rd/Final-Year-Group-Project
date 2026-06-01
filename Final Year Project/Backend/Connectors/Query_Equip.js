const con = require("./DB_Connector")

// Query module for the Dietary Requirement table //

// Insert into the Equipment table //
function insertEquip(id, name) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Equipment (Equip_ID, Name) VALUES (?, ?)";
        con.query(sql, [id, name], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// Get from the Equipment table //
function getEquip() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM Equipment", (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

module.exports = { insertEquip, getEquip };