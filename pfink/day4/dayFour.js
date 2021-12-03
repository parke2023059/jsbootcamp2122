//Day 4 JS BootCamp
// By Parker Fink


//imports expressJS module
const express = require('express');

//creates express object
const app = express()
//sets view engine as EJS
app.set('view engine', 'ejs')
//creates character object

class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000
    this.name = name
    this.race = race
    this.profession = profession
    this.equipment = {
      head: {},
      chest: {},
      legs: {},
      arm_p: {},
      arm_s: {}
    }
    this.inventory = []
    this.abilities = []
    this.stats = {
      attack: 5,
      defense: 5,
      hp_current: 20,
      hp_max: 20
    }
    //this method searches for items in the itemlist with this name
    //and adds it to this characters inventory
    this.pickupItem = function(searchName) {
      for (var item of item_list) {
        console.log(item.name);
        if (item.name == searchName) {
          console.log("Found a match!");
          this.inventory.push(item);
          break;
        }
      }
    }
    //this method searches for a given slot and overwrites it with an empty object
    this.unequipItem = function(slot) {
      for (var slotName in this.equipment) {
        console.log(slotName);
        if (slotName == slot) {
          console.log("found item slot. removing.")
          this.equipment.slotName = {};
          break;
        }
      }
    }
  }
}



var characterList = []
characterList.push(new Character('Orion', 'Stereotypical Apex Male', 'Ultimate Chad'))



//this holds all possible equipable items
var item_list = [{
    name:'sword',
    slot:'arm_p',
    bonusus:{
      attack:5
    }
  },
  {
    name:'shield',
    slot:'arm_s',
    bonusus:{
      defense:5
    }
  }
]

//this holds all possible equipable items
var item_list = [{
    name: 'sword',
    slot: 'arm_p',
    bonusus: {
      attack: 5
    }
  },
  {
    name: 'shield',
    slot: 'arm_s',
    bonusus: {
      defense: 5
    }
  }
]

characterList[0].pickupItem('sword')
characterList[0].unequipItem('arm_p')

//creates GET endpoint
app.get('/profile/:characterid', (req, res) => {
  console.log(req.params.characterid);
  var foundProfile = characterList.find(character => character.id == req.params.characterid)



if (foundProfile) {
  //render a template called Profile from the views folder and sent it a variable called sendData
  res.render('profiles', {
    sendData: characterList[0]
    })
  } else{
    res.redirect('/new')
  }
})

app.get('/new', function(req,res){
  characterList.push(new Character('Girl', 'Stereotypical Annoying Female', 'Ultimate OnlyFans'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
})



//starts HTTP listen server
app.listen(3000)
