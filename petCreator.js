console.log("Hello from petCreator.js!")

function createPet(nameInput, ageInput, speciesInput, energyInput, happinessInput) {
    let pet = {
        name: nameInput,
        age: ageInput,
        species: speciesInput,
        energy: energyInput,
        happiness: happinessInput,

        status: function() {
            console.log(`Your ${this.species} ${this.name} has ${this.energy} energy and ${this.happiness} happiness.`)
        },

        pat: function() {
            console.log(`${this.name} enjoyed the pats.`);
            this.happiness += 10;
            if (this.happiness > 100) this.happiness = 100;
        },

        feed: function() {
            if (this.energy >= 40) {
                console.log(`${this.name} is not hungry enough to be fed right now!`);
                this.happiness += 10;
            };
            if (this.energy <= 39) {
                console.log(`Thank you for feeding ${this.name}`);
                this.energy += 20;
            };
            if (this.happiness > 100) this.happiness = 100;
            
            if (this.energy > 100) this.energy = 100;
            
        },

        play: function() {
            console.log(`Thank you for playing with ${this.name}!`);
            this.energy -= 10;
            if (this.energy < 0) this.energy = 0;
            this.happiness += 20;
            if (this.happiness > 100) this.happiness = 100;
        },

        nap: function() {
            if (this.energy > 100) this.energy = 100;
            if (this.energy >= 61) {
                console.log(`${this.name} is not sleepy enough for a nap!`);
            };
            if (this.energy <= 60) {
                console.log(`${this.name} had a paw-some nap.`);
                this.energy += 40;
            };
        },
    }

    pet.status();
    return pet;
}