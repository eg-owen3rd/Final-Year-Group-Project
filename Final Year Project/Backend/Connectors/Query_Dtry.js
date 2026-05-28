const con = require("./DB_Connector")

// Query module for the Dietary Requirement table //

// Insert into the Dietary Requirements table //
function insertDtry(id, name) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO DtryRequire (Dietary_ID, Name) VALUES (?, ?)";
        con.query(sql, [id, name], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// Get from the Dietary Requirements table //
function getDtry() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM DtryRequire", (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

module.exports = { insertDtry, getDtry };