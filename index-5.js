function createPet(nameInput, speciesInput, energyInput, happinessInput) {
    let pet = {
        name: nameInput,
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

let dogKennel = [];
dogKennel.push(createPet("Sandy", "dog", 20, 60));
dogKennel.push(createPet("Sache", "dog", 50, 80));
dogKennel.push(createPet("Sadie", "dog", 70, 10));
dogKennel.push(createPet("Sid", "dog", 80, 30));
dogKennel.push(createPet("Seth", "dog", 10, 0));

console.log()

let catKennel = [];
catKennel.push(createPet("Billie", "cat", 60, 10));
catKennel.push(createPet("Barbara", "cat", 80, 100));
catKennel.push(createPet("Bridget", "cat", 70, 90));
catKennel.push(createPet("Bub", "cat", 30, 20));
catKennel.push(createPet("Bisquit", "cat", 20, 30));

console.log()
console.table(dogKennel)
console.table(catKennel)

dogKennel.forEach(pet => pet.feed());
console.log()
catKennel.forEach(pet => pet.feed());

console.log()
console.table(dogKennel)
console.table(catKennel)

dogKennel.forEach(pet => pet.nap());
console.log()
catKennel.forEach(pet => pet.nap());

console.log()
console.table(dogKennel)
console.table(catKennel)

dogKennel.forEach(pet => pet.pat());
console.log()
catKennel.forEach(pet => pet.pat());

console.log()
console.table(dogKennel)
console.table(catKennel)
