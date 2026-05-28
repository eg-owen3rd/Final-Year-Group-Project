const express = require("express");
const DtryReqy = require("./Query_Dtry");

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
       res.status(500).json({ error: err.message });
   }
});
// To be adjusted to correct port //
app.listen(3000, () => console.log("API running on port"));
