//Day 5 JS BootCamp
// By Parker Fink


//imports expressJS module
const express = require('express');

//creates express object
const app = express()
//sets view engine as EJS
app.set('view engine', 'ejs')
//creates character object


class GameMatch {
  constructor() {
    this.id = gameList.length + 1000 //we will get bacl to this
    this.turn = 0 //we will get back to this
    this.players = []
    this.round = 0
  }
}

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
      speed: 5,
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

//creates game list
var gameList = []
//creates characterlist
var characterList = []
//pushed characters to gamelist
characterList.push(new Character('Orion', 'Stereotypical Apex Male', 'Ultimate Chad'))
characterList.push(new Character('Girl', 'Stereotypical Annoying Female', 'Ultimate Online Shopper'))

for (var i in characterList) {
  characterList[0].pickupItem('sword')
}

//creates a GET endpoint for the game
app.get('/game', (req, res) => {
  //searches for game in gamelist
  var foundGame = gameList.find(game => game.id == req.query.gameid)
  //if game was found we can manipulate it
  if (foundGame){
    //checks to see if the user send the add character query param (&addcharacter=xxxx)
    if (req.query.addcharacter) {
      //checks to see if there is room in this games player list to add a player
      if (foundGame.players.length <= 2) {
        //find the character with the given addcharacter id
        var foundProfile = characterList.find(character => character.id == req.query.addcharacter)
        //if the character exists, add its ID to this games player list
        if(foundProfile){
          foundGame.players.push(foundProfile.id)
        }
      }
    }
    res.render('game', {
      sendData: foundGame
    })
  } else {
    res.redirect('/newgame')
  }
})

app.get('/newgame', function(req,res){
  gameList.push(new GameMatch())
  res.redirect('/game/?gameid=' + gameList[gameList.length - 1].id)
})

//creates GET endpoint
app.get('/profile', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.query.characterid)

if (foundProfile) {
  //render a template called Profile from the views folder and sent it a variable called sendData
  res.render('profiles', {
    sendData: foundProfile
    })
  } else {
    res.redirect('/newprofile')
  }
})
//creates the newprofile endpoint
app.get('/newprofile', function(req,res){
  characterList.push(new Character('Girl', 'Stereotypical Annoying Female', 'Ultimate OnlyFans'))
  res.redirect('/profile/?characterid=' + characterList[characterList.length - 1].id)
})



//starts HTTP listen server
app.listen(3000, function(req,res){
  console.log("Game Status: Functional");
})
