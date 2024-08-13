let pet = {
    name: 'Daisy',
    species: 'dog',
    happiness: 50,

    status: function() {
        console.log(`Pet Status: Your ${this.species} ${this.name} is ${this.happiness}% happy`);
    },

    rename: function(newName) {
        console.log(`You have renamed ${this.name} to ${newName}`);
        this.name = newName;
    },

    play: function() {
        console.log(`Thank you for playing with ${this.name}.`);
        this.happiness += 5;
    },

    feed: function() {
        console.log(`Thank you for feeding ${this.name}.`);
        this.happiness += 10;
    }
}



pet.status();   // Shows the pet's status
pet.rename('Rex'); // Renames the pet to 'Rex'
pet.play();     // Increases happiness by 5
pet.feed();     // Increases happiness by 10
pet.status();   // Shows the updated status
