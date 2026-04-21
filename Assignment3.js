//Section A: forEach()
const numbers= [2, 4, 6, 8, 10];
numbers.forEach(function(number){
  console.log(number * 2)
})


//Question 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name){
  console.log("Hello" + name)
})

//Section B: map()
//Question 3
const numbers2= [1,2,3,4,5];
let numberSquared = numbers2.map(number=>{
  return number **2
})
console.log(numberSquared)

//Question 4
const prices = [100,200, 300];
let priceWithDiscount = prices.map(function(price){
  return price - 0.1 //10% has to be broken down to its decimal form because javaScript only recognizes % as modules, not percentage.
})
  console.log(priceWithDiscount)
  
 
  //Section C: filter()
  //Question 5
 const numbers3= [5,12,8,20,3];
let greaterThan = numbers3.filter(function(number){
   return number > 10
 })
 console.log(greaterThan)

 //Question 6  (using arrow function)
 const ages =[15, 22, 17, 30, 18];
 let adult = ages.filter(age=>{
   return age >= 18
 })
 console.log(adult)


//Bonus question 7 
const numbers4 =[10,15,20,25,30];
//using filter to get number >20
let aboveAverage = numbers4.filter(function(number){
  return number > 20
})
  console.log(aboveAverage)
  //using map() to double the remaining numbers
  let doubled = aboveAverage.map(number=>{
    return number + number  //or number *2
  })
  console.log(doubled)