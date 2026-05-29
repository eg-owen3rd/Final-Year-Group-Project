const express = require("express");
const bcrypt = require("bcrypt");

const DtryReqy = require("./Query_Dtry");
const Equip = require("./Query_Equip");
const Ing = require("./Query_Ingredients");
const Search = require("./Query_Meals");
const Users = require("./Query_User");

const app = express();
app.use(express.json());

// Dietary Requirements section of the Backend //

app.get("/api/DtryReqy", async (req, res) => {
   try {
       // Get function from Query_Dtry //
       const rows = await DtryReqy.getDtry();
       res.json(rows);
   } catch (err) {
       // Error message //
       res.status(500).json({ error: err.message});
   }
});

app.post("/api/DtryReqy", async (req, res) =>{
    const {Dietary_ID , Name} = req.body;
    // Insert into function from Query_Dtry //
    try {
        await DtryReqy.insertDtry(Dietary_ID, Name);
        res.json({ message: "Inserted"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Equipment section of the Backend //

app.get("/api/Equip", async (req, res) => {
    try {
        // Get function from Query_Equip //
        const rows = await Equip.getEquip();
        res.json(rows);
    } catch (err) {
        // Error message //
        res.status(500).json({ error: err.message});
    }
});

app.post("/api/Equip", async (req, res) =>{
    const {Equip_ID , Name} = req.body;
    // Insert into function from Query_Equip //
    try {
        await Equip.insertEquip(Equip_ID, Name);
        res.json({ message: "Inserted"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Equipment section of the Backend //

app.get("/api/Ing", async (req, res) => {
    try {
        // Get function from Query_Ingredients //
        const rows = await Ing.getIng();
        res.json(rows);
    } catch (err) {
        // Error message //
        res.status(500).json({ error: err.message});
    }
});

app.post("/api/Ing", async (req, res) =>{
    const {Ingre_ID , Name} = req.body;
    // Insert into function from Query_Equip //
    try {
        await Ing.insertIng(Ingre_ID, Name);
        res.json({ message: "Inserted"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Meals section of the Backend //

// Search function for the webpage //
app.get("/api/Search", async (req, res) => {
    const term = req.query.q || "";
    const mode = req.query.mode || "recipe";

    try { // Ingredient search method //
        if (mode === "ingredient"){
            const rows = await Search.srchByIng(term);
            return res.json(rows);
        }

        // Recipe search method //
        const rows = await Search.srchRecipe(term);
        res.json(rows);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// This is the User section of the Backend //

// Create User function //
app.post("/api/Users", async (req, res) => {
    const {Name, Email, Pass_Hash} = req.body;

    try {
        const id = await Users.CreateUser(Name, Email, Pass_Hash);
        res.json({Message: "User Created", id});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.post("/api/login", async (req, res) => {
    const { Email, Pass_Hash } = req.body;

    try {
        // 1. Get user by email
        const user = await Users.GetUsrByEml(Email);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // 2. Compare password with stored hash
        const match = await bcrypt.compare(Pass_Hash, Users.Pass_Hash);
        if (!match) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        // 3. Login success
        res.json({
            message: "Login successful",
            User_ID: Users.User_ID,
            Email: Users.Email
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// To be adjusted to correct port //
app.listen(3000, () => console.log("API running on port"));
