let state = {
    name: "",
    petName: "",
    zipCode: "",
};

let saveBtn = document.getElementById("saveButton");
let nameInput = document.getElementById("firstName");
let petNameInput = document.getElementById("petName");
let zipCodeInput = document.getElementById("zipCode");

function handleSave() {
    console.log("save button was clicked");
    let name = nameInput.value;
    state.firstName = firstName;
    console.log("Added name" + state.firstName);

    state.petName = petNameInput.value;
    state.zipCode = zipCodeInput.value;

    console.log(state);

    nameInput.value = "";
    petNameInput.value = "";
    zipCodeInput.value = "";

    let user = createFamily(state.name, state.petName, state.zipCode);
    user.status();
    user.render();
}

saveBtn.addEventListener("click", handleSave);