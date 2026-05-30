const button = document.querySelector(".meal-button");

if (button) {
    button.addEventListener("click", function () {

    // Get inputs
    const ingredients =
    document.getElementById("ingredients").value;

    const otherEquipment =
    document.getElementById("other-equipment").value;

    const selectedSkill =
    document.querySelector("input[name='skill']:checked")
    .parentElement.textContent.trim();

    // Get dietary and equipment requirements
    const dietaryRequirements = [];
    document.querySelectorAll("#dietary-grid input[type='checkbox']:checked")
        .forEach(function (checkbox) {
            dietaryRequirements.push(checkbox.value);
        });

    const equipment = [];
    document.querySelectorAll("#equipment-grid input[type='checkbox']:checked")
        .forEach(function (checkbox) {
            equipment.push(checkbox.value);
        });

    // Group all form data
    const mealRequest = {
        ingredients: ingredients,
        otherEquipment: otherEquipment,
        skillLevel: selectedSkill,
        dietaryRequirements: dietaryRequirements,
        equipment: equipment
    };

    console.log("Meal Request:", mealRequest);

    // Temporary API test
    fetch("http://localhost:3000/api/Search?q=" + ingredients + "&mode=ingredient")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Meal results from API:", data);
    })
    .catch(function (error) {
        console.log("API connection error:", error);
    });

});
}