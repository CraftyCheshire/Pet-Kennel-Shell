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
            console.log(`Thank you for playing with ${this.name}!`);
            this.energy -= 10;
            if (this.energy < 0) this.energy = 0;
            this.happiness += 20;
            if (this.happiness > 100) this.happiness = 100;
        },

        nap: function() {
            console.log(`${this.name} had a paw-some nap.`);
            this.energy += 40;
            if (this.energy > 100) this.energy = 100;
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

console.table(kennel)
kennel[0].play()
kennel[1].play()
kennel[4].play()
kennel[2].play()
kennel[5].play()
kennel[3].play()
console.table(kennel)
kennel[0].feed()
kennel[1].feed()
kennel[4].feed()
kennel[2].feed()
kennel[5].feed()
kennel[3].feed()
console.table(kennel)
kennel[0].nap()
kennel[1].nap()
kennel[4].nap()
kennel[2].nap()
kennel[5].nap()
kennel[3].nap()
console.table(kennel)
kennel[0].status()
kennel[1].status()
kennel[2].status()
kennel[3].status()
kennel[4].status()
kennel[5].status()