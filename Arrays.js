let item1="milk"
let item2="milo"
let item3="rice"

let items=["milk", "milo", "rice", 1, 2, 4, true]

console.log(items[0])
console.log(items.length)

//forEach
let fruits=["apple", "banana", "orange", "grape", "mango"]
let names= ["esther", "john", "doe", "jane", "smith"]

names.forEach(function(fruit){
console.log("i eat" + fruit)
})
names.foreach=(name) => {
  console.log("TECH_CRUSH_2026_COHORT_6"+ name) //arrow function
}
names.forEach(function(name){
  console.log("TECH_CRUSH_2026_COHORT_6" + name)
})


//map method
let scores = [90, 80, 70, 60, 50]
let newScores =scores.map(score =>{ 
  console.log("as a good teacher, i decided to add 5 marks to all my students")
  return score + 5
})//arrow function
console.log(newScores)

let students =["esther", "john", "doe", "jane", "smith"]

let nameTag = students.map(function(tag){
  return "TECH_CRUSH_2026_COHORT_6" +tag
})
console.log(nameTag)


//filter method
let jambscores=[200, 250, 300, 150, 180,200, 290,100]
let passed = jambscores.filter(score=>{
  return score >=200
})
  console.log(passed)
  
  
  let ages= [18, 25, 30, 15, 20, 35, 40]
  let adults =ages.filter(function(age){
    return age >=18
  })
  console.log(adults)
  

//FIND method (returns only the first match)
const studentsNames=["john", "john", "Ada", "doe", "jane", "smith", "Bola"]
const found = studentsNames.find((name)=>{
  return name==="john"
})
console.log(found)


//reduce method
let cartPrices = [1500, 800, 2200, 450, 1000]
let total = cartPrices.reduce(function(accumulator, currentPrices) {
  return accumulator + currentPrices;
}, 0)  //accululator, current valie, initial value
console.log(total);

//Arrow function
let grandTotal = cartPrices.reduce((acc,price) => {
  return acc + price;
  }, 0)
  console.log(grandTotal);
  
  //push, pop, shift, unshift
  //push
  let colors = ["red","blue","green"]
  colors.push("yellow");
  //pop
  let lastColor =colors.pop();
  console.log(colors);
  console.log(lastColor)
  //shift
  let firstColor = colors.shift();
  console.log(colors);
  console.log(firstColor)
  //unshift
  let newLength = colors.unshift("purple")
  console.log(colors);
  console.log(newLength);
  
  //the return type for push and u shift are numbers
 // the return type for pop and shift are the removed elements from the array