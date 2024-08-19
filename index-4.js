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

    pet.status();
    return pet;
}
let pet1 = createPet("Sparky", "dog", 50, 40)
let pet2 = createPet("Shatouliky", "dog", 100, 20)
let pet3 = createPet("Suzie", "dog", 30, 90)
let dogKennel = [];
dogKennel.push(pet1);
dogKennel.push(pet2);
dogKennel.push(pet3);
dogKennel.push(createPet("Sheriff", "dog", 20, 10));
dogKennel.push(createPet("Sadie", "dog", 60, 70));
dogKennel.push(createPet("Steve", "dog", 70, 60));
console.table(dogKennel)
dogKennel.forEach(pet => pet.play());
console.table(dogKennel)
dogKennel.forEach(pet => pet.feed());
console.table(dogKennel)
dogKennel.forEach(pet => pet.nap());
console.table(dogKennel)


let pet4 = createPet("Lucifer", "cat", 50, 40)
let pet5 = createPet("Loki", "cat", 100, 20)
let pet6 = createPet("Lizard", "cat", 40, 90)
let catKennel = [];
catKennel.push(pet4);
catKennel.push(pet5);
catKennel.push(pet6);
catKennel.push(createPet("Lilly", "cat", 50, 10));
catKennel.push(createPet("Loofah", "cat", 60, 70));
catKennel.push(createPet("Lionel", "cat", 70, 60));
console.table(catKennel)
catKennel.forEach(pet => pet.play());
console.table(catKennel)
catKennel.forEach(pet => pet.feed());
console.table(catKennel)
catKennel.forEach(pet => pet.nap());
console.table(catKennel)


let fishTank = [];
fishTank.push(createPet("Trunks", "fish", 50, 40))
fishTank.push(createPet("Tasha", "fish", 100, 20))
fishTank.push(createPet("Tina", "fish", 40, 90))
fishTank.push(createPet("Terrence", "fish", 50, 10));
fishTank.push(createPet("Tyrone", "fish", 60, 70));
fishTank.push(createPet("T-Money", "fish", 70, 60));
console.table(fishTank)
fishTank.forEach(pet => pet.play());
console.table(fishTank)
fishTank.forEach(pet => pet.feed());
console.table(fishTank)
fishTank.forEach(pet => pet.nap());
console.table(fishTank)

