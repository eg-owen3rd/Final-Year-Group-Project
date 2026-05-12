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

    // Print values
    console.log("Ingredients:", ingredients);
    console.log("Other Equipment:", otherEquipment);
    console.log("Skill Level:", selectedSkill);
});
}