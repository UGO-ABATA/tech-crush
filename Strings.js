//length of a String
let stringText = " This is a class on string method"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase(
 ) 
  let smallLetter= stringText.toLowerCase()
  console.log(capitalLetter)
  console.log(smallLetter)

//trim, trimStart AND trimEnd  
  let str ="  Hello, World  "
  let trimmedStr= str.trim()
  let frontTrimmedStr = str.trimStart()
  let endTrimmedStr = str.trimEnd() //camel casing
  let end_trimmed_str = str.trimEnd() //snake casing(seperated by underscore)
  console.log(trimmedStr)
  console.log(frontTrimmedStr)
  console.log(endTrimmedStr)
  
  
  let signupName= "  Esther"
  let signinName="Esther"
  
  if ((signupName.trim())===signinName){
    console.log("Welcome back, Esther")
  }else{
    console.log("Invalid login information")
  }
  
  
  //indexOf And includes
let user_email = "ogbuuzoma413@techcrush@gmail.com"
let email_index = user_email.indexOf("@") //return Data types for indexOf is NUMBERS
console.log(email_index)

let email_contains_at = user_email.includes("@") //the return Data Types for include is BOOLEAN
console.log(email_contains_at)
  
  //startsWith AND endsWith
  let userName = "techcrush Esther 6"
  let starts = userName.startsWith("techcrush")  //return datatype ; BOOLEAN
  console.log(starts)
  
  let ends = userName.endsWith("6")  //return datatype ; BOOLEAN
  console.log(ends)
  
  
  //slice and substring
  let testString = "my name is Esther"
  let slicedString =testString.slice(0,10)
  let subString = testString.substring(0,10)
  console.log(slicedString)
  console.log(subString)
  
  //replace and replaceAll
  let text= "Esther is a techie. Esther loves coding and Esther loves teaching"
  let replacedText= text.replace ("Esther", "she")
  let replacedAllText = text.replaceAll("Esther", "she")
  console.log(replacedText)
  console.log(replacedAllText)
  
  
  //split
  const sentence = "LANGUAGES: javaScript, python, java, c++"
  let splitSentence = sentence.split(",") //return datatype : Array
  let splitSentence2 = sentence.split(" ")
  console.log(splitSentence)
  console.log(splitSentence2)
  let example=" she is a girl, she loves coadind, she fights"
  console.log(example.split( ","))
  
  
  