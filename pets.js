console.log("Hello from pets.js!");

createPet("Hello", "cat", 50, 50);

const button = document.getElementById("button");
function submit() {
    const petNameInput = document.getElementById("petName")
    const petAgeInput = document.getElementById("petAge")
    const speciesInput = document.getElementById("species")

    const petName = petNameInput.value
    const petAge = petAgeInput.value
    const species = speciesInput.value

    console.log(`Your ${species} ${petName} is ${petAge} years old.`)

    const pet = createPet(petName, petAge, species, 40, 70)

    console.log(pet)

    state.pets.push(pet)
    petNameInput.value = ""
    petAgeInput.value = ""
    speciesInput.value = ""

    console.log(state.pets)
    console.table(pets)  
}

button.addEventListener("click", submit);

