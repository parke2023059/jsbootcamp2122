//Day 4 JS BootCamp
// By Parker Fink


//imports expressJS module
const express = require('express');

//creates express object
const app = express()
//sets view engine as EJS
app.set('view engine', 'ejs')
//creates character object
var character = {
  name: 'Parker',
  race: 'Stereotypical White Guy',
  profession: 'God',
  equipment:  {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {}
  },
  inventory:  [],
  abilities:  [],
  stats:  {
    attack: 5,
    defense: 5,
    hp_current: 20,
    hp_max: 20
  },
  //this method searches for item in itemlist with this Name
  //and adds it to this characters inventory
  pickupItem: function(searchName)  {
    for (var item of item_list) {
      console.log(item.name);
      if (item.name == searchName) {
        console.log('Found A Match');
        this.inventory.push(item)
        break
      }
    }
  },
//overwrites slot with an empty object
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName);
      if (slotName == slot){
        console.log("found an item slot. removing");
        this.equipment.slotName = {}
        break
      }
    }
  }
}

//this holds all possible equipable items
var item_list = [
  {
    name:'sword',
    slot: 'arm_p',
    bonusus: {
      attack: 5
    }
  },
  {
    name:'shield',
    slot: 'arm_s',
    bonusus: {
      defense:5
    }
  }
]


//creates GET endpoint
app.get('/', (req,res) => {
  character.pickupItem('sword')
  character.unequipItem('arm_p')
  res.render('profiles', {sendData: character})
})

//starts HTTP listen server
app.listen(3000)
