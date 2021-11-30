//Day 1 JS BootCamp
// By Parker Fink


//primitives Datatypes and Literal Values
5   //Number
'ur mum'  //String
true    //bool

//storing values into a variable  (primitives)
var urMumWeight = 4000
console.log(urMumWeight)

//collection datatypes
//array are ordered lists
var groceries = ['milk', 'bread', 'eggs']
console.log(groceries[1])


//objects can act as unordered lists (dictionaries)
var cart = {
  weheels: 4,
  push:() => {console.log("going forward")}
}
console.log(cart.wheels)
cart.push()


//conditional statements will run the code
//in the curly braces if the expression provided in paranthesis
//resolves as true
if (cart.wheels >= 4) {
  console.log('you have too many wheels');
} else if (cart.wheels == 4) {
  console.log('you have enough wheels')
} else {
  console.log('you do not have enough wheels');
}




//single line conditionals
if(cart.wheels) console.log('you have enough wheels');
else console.log('you do not have enough wheels');
