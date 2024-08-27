function createPetOwner(firstName, petName, lastName, email, phoneNumber, city, zipCode) {
    const petOwner = {
        firstName,
        petName,
        lastName,
        email,
        phoneNumber,
        city,
        zipCode,

        render: function() {
            let userNameOutput = document.getElementById("userNameOutput");
            console.log(userNameOutput);
            userNameOutput.innerText = this.firstName + " " + this.lastName;

            let userPetNameOutput = document.getElementById("userPetNameOutput");
            console.log(userPetNameOutput);
            userPetNameOutput.innerText = this.petName + " " + this.lastName;

            let emailOutput = document.getElementById("emailOutput");
            console.log(emailOutput);
            emailOutput.innerText = this.email;

            let phoneNumberOutput = document.getElementById("phoneNumberOutput");
            console.log(phoneNumberOutput);
            phoneNumberOutput.innerText = this.phoneNumber;

            let userCityOutput = document.getElementById("userCityOutput");
            console.log(userCityOutput);
            userCityOutput.innerText = this.city;

            let userZipCodeOutput = document.getElementById("userZipCodeOutput");
            console.log(userZipCodeOutput);
            userZipCodeOutput.innerText = this.zipCode;
        },

        status: function() {
            console.log(`Welcome, ${this.firstName} and ${this.petName} ${this.lastName}! You are from ${this.city}, ${this.zipCode} with a phone number of ${this.phoneNumber}. You will be contacted at ${this.email} for any further information.`)
        }
    }
    return petOwner;
}

