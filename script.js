let state = {
    firstName: "",
    lastName: "",
    petName: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    city: "",

};

let saveBtn = document.getElementById("saveButton");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let petNameInput = document.getElementById("petName");
let zipCodeInput = document.getElementById("zipCode");
let phoneNumberInput = document.getElementById("phoneNumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");

function handleSave() {
    console.log("save button was clicked");
    let firstName = firstNameInput.value;
    state.firstName = firstName;
    console.log("Added name" + state.firstName);

    state.petName = petNameInput.value;
    console.log("Added pet's name" + state.petName);

    state.lastName = lastNameInput.value;
    console.log("Added last name" + state.lastName);

    state.zipCode = zipCodeInput.value;
    console.log("Added zip code" + state.zipCode);

    state.phoneNumber = phoneNumberInput.value;
    console.log("Added phone number" + state.phoneNumber);

    state.email = emailInput.value;
    console.log("Added email address" + state.email);

    state.city = cityInput.value;
    console.log("Added city" + state.city);


    console.log(state);

    firstNameInput.value = "";
    petNameInput.value = "";
    lastNameInput.value = "";
    petNameInput.value = "";
    zipCodeInput.value = "";

    let user = createFamily(state.firstName, state.petName, state.zipCode);
    user.status();
    user.render();
}

saveBtn.addEventListener("click", handleSave);