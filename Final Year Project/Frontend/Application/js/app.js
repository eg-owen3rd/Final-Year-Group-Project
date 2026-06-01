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
    fetch("http://localhost:3000/api/Search?q=" + encodeURIComponent(ingredients) + "&mode=ingredient")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Meal results from API:", data);
        const resultsDiv = document.getElementById("meal-results");

        resultsDiv.innerHTML = "";
        if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No meals found.</p>";
        return;
    }

    data.forEach(function (meal) {
        resultsDiv.innerHTML += `
            <div class="meal-card">
                <h3>${meal.Title}</h3>
                <p>${meal.Description}</p>
                <p><strong>Ingredient:</strong> ${meal.ingredient}</p>
                <p><strong>Quantity:</strong> ${meal.Quantity}</p>
            </div>
        `;
    });
    })
    .catch(function (error) {
        console.log("API connection error:", error);
    });

});
}