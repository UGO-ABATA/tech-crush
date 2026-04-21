let str = "coding is fun"
//extract the word "coding"
let word=str.slice(0,6)
console.log(word)

let fun = str.slice(10,13)
let pie = str.substring(10, 13)
console.log(fun)
console.log(pie)

let is = str.slice(7,9)
console.log(is)

//SPLIT (Challenge 2)
const colors = "red, green, blue, yellow"
const comma = colors.split(" , ")
console.log(comma)

const joined = comma.join(" - ")
console.log(joined)

console.log("ogbu uzoma Esther".split("  ").join("-"))

const url = "/api/v1/users"
const slash = url.split("/")
console.log(slash)

const v1Imdex = slash[2]
console.log(v1Imdex)
//or
console.log(slash[2])


//challenge 4; extract o ly Esther
const matricNumber= "TECHCRUSH-ESTHER-2026"
const splitMatric= matricNumber.split("-")
console.log(splitMatric)

const splitIndex = splitMatric[1]
console.log(splitIndex) //OR
console.log(splitMatric[1])
