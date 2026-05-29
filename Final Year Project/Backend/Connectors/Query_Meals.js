const con = require("./DB_Connector")

// Query module for the Meals table //

function srchByIng(term) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT Meals.recipe_ID,' +
            'Meal.title, Meal.Description, Ingredients.Name' +
            'AS ingredient, RecipeIng.Quantity' +
            'FROM RecipeIng' +
            'JOIN Ingredients ON RecipeIng.Ingre_ID = Ingredients.Ingre_ID' +
            'JOIN Meals ON RecipeIng.Recipe_ID = Meals.Recipe_ID' +
            'WHERE Ingredients.name LIKE ?;';

        con.query(sql, [`%${term}%`], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

function srchRecipe(term){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT Meals.Recipe_ID, ' +
            'Meals.Title, Meals.Description, Ingredients.Name AS ingredient,' +
            'RecipeIng.Quantity, Equipment.Name AS equipment, DtryRequire.name AS dietary' +
            'FROM Meals' +
            'LEFT JOIN RecipeIng ON Meals.Recipe_ID = RecipeIng.Recipe_ID' +
            'LEFT JOIN Ingredients ON RecipeIng.Ingre_ID = Ingredients.Ingre_ID' +
            'LEFT JOIN RecipeEquip ON Meals.Recipe_ID = RecipeEquip.Recipe_ID' +
            'LEFT JOIN Equipment ON RecipeEquip.Equip_ID = Equipment.Equip_ID' +
            'LEFT JOIN RecipeDtry ON Meals.Recipe_ID = RecipeDtry.Recipe_ID' +
            'LEFT JOIN DtryRequire ON RecipeDtry.Dietary_ID = DtryRequire.Dietary_ID' +
            'WHERE Meals.Title LIKE ?;';

        con.query(sql, [`%${term}%`], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

module.exports = {srchRecipe, srchByIng};