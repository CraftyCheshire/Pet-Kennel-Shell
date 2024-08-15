function createPet(nameInput, speciesInput, energyInput, happinessInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        energy: energyInput,
        happiness: happinessInput,

        status: function() {
            console.log(`Your ${this.species} ${this.name} has ${this.energy} energy and ${this.happiness} happiness.`)
        },

        feed: function() {
            console.log(`Thank you for feeding ${this.name}!`)
            this.energy += 20;
            if (this.energy > 100) this.energy = 100;
            this.happiness += 10;
            if (this.happiness > 100) this.happiness = 100;
        },

        play: function() {
            console.log(`Thank you for playing with ${this.name}!`)
            this.energy -= 10
            if (this.energy < 0) this.energy = 0;
            this.happiness += 20
            if (this.happiness > 100) this.happiness = 100;
        },
    }
    console.log("Created a pet...");
    pet.status();
    return pet;
}

let pet1 = createPet("Houdini", "cat", 60, 40);
let pet2 = createPet("Loki", "cat", 70, 70);
let pet3 = createPet("Skooberz", "cat", 50, 20);

let kennel = [];
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(createPet("Figment", "cat", 20, 10));

let pet5 = createPet("Rue", "cat", 90, 80);
kennel[4] = pet5;
kennel[5] = createPet("Bast", "cat", 100, 70)
kennel[4].play()

console.table(kennel)
