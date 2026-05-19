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

    // Print values
    console.log("Ingredients:", ingredients);

    console.log("Other Equipment:", otherEquipment);

    console.log("Skill Level:", selectedSkill);

    console.log("Dietary Requirements:", dietaryRequirements);

    console.log("Equipment:", equipment);
});
}