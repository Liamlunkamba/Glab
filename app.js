const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]  
    }
 console.log (adventurer.inventory[0])
 for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log (adventurer.inventory[i])
 }

 const traveler ={ 
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea",
    inventory: ["small hat","glasses"], } }, 
roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}
    }
   // traveler.roll()

   class Character {
    constructor (Liam) {
      this.name = Liam;
      this.health = 100;
      this.inventory = [];}
roll (mod = 0) {
 const result = Math.floor(Math.random() * 20) + 1 + mod;
 console.log(`${this.name} rolled a ${result}.`)}
  }
  
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];

  console.log(robin.inventory,robin.companion)

  class Adventurer extends Character {
    constructor (name, role, companion,) {
      super(name,companion);
      this.role = role;
      
      this.inventory.push("bedroll", "50 gold coins", "hummer","fire","soccerball");
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  const liam  = new Adventurer("liam");
  liam.companion = new Character("Leo");
  liam.companion.type = "Cat";
  liam.companion.companion = new Character("Frank");
  liam.companion.companion.type = "Flea";
  liam.companion.companion.inventory = "Freezingcold"; "sunfire";
  liam.role = "Masterlee",

  console.log(liam)


  