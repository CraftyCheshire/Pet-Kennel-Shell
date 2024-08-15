function createPet(nameInput, speciesInput, happinessInput, energyInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,

        play: function() {
            if (this.energy <= 0) {
                console.log(`${this.name} is too tired to play.`);
                return;
            }
            this.energy -= 20;
            if (this.energy < 0) this.energy = 0;
            this.happiness += 10;
            if (this.happiness > 100) this.happiness = 100;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}`);
        },

        feed: function() {
            this.energy += 20;
            if (this.energy > 100) this.energy = 100;
            this.happiness += 20;
            if (this.happiness > 100) this.happiness = 100;
            console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}`);
        },

        rest: function() {
            this.energy = 100
            if (this.energy > 100) this.energy = 100;
            console.log(``)
        },

        status: function() {
            console.log(`Pet Status: Your ${this.species} ${this.name} is ${this.happiness}% happy with ${this.energy} energy.`);
        },
    }
    console.log("Create a pet!");
    pet.status();
    return pet;
}

let pet1 = createPet("Rex", "dog", 50, 100);
let pet2 = createPet("Duke", "dog", 0, 0);
let pet3 = createPet("Daisy", "dog", 75, 100);
let pet4 = createPet("Sache", "dog", 15, 100);
let pet5 = createPet("Gutz", "dog", 25, 100);
let pet6 = createPet("Niko", "dog", 40, 100);
let pet7 = createPet("Kuma", "dog", 60, 100);
let pet8 = createPet("Chance", "dog", 45, 100);

pet1.play();
pet1.feed();
pet1.play();
pet1.play();
pet1.rest();
pet1.status();

pet2.play();
pet2.feed();
pet2.play();
pet2.play();
pet2.status();

pet3.play();
pet3.feed();
pet3.play();
pet3.play();
pet3.status();

pet4.play();
pet4.feed();
pet4.play();
pet4.play();
pet4.status();

pet5.play();
pet5.feed();
pet5.play();
pet5.play();
pet5.status();

pet6.play();
pet6.feed();
pet6.play();
pet6.play();
pet6.status();

pet7.play();
pet7.feed();
pet7.play();
pet7.play();
pet7.status();

pet8.play();
pet8.feed();
pet8.play();
pet8.play();
pet8.status();