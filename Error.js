//syntax error
//let add = (5+ 3  //made a typo error by forgetting to add )
//console.log(add) 

//reference error
//let myame = "Amina"  //using a  ariable that does not exist
//console.log (myName)

//type error
//let num = 5
//num.toUpperCase()
//console.log(num)

try{
   //code that might fail goes here
   let result = 10/0;
   console.log(result)
   undefinedFunction(); //this will cquse an error!
   console.log("this line will NOT run.");
}catch(error){
     //this runs ONLY if something goes wrong
     console.log("An error occuref:" + error.name, error.message);
}
console.log(" the program continues here.");

try{
  let age = 25
  console.log(age.length())
}catch(error){
   console.log("An error occurred: " + error.message);
   }
   
   function loadUserData(userId) {
      console.log("starting to load data...");
      try {
          if (!userId.startsWith("BAD")) {
            throw new Error("user ID must start with BAD");
          }
          console.log("Data loaded for user: " + userId);
      }catch(error) {
        console.log("Failed:" + error.message);
      }finally{
        console.log("Loading complete. Closing connection.");  //ALWAYS r7ns
      }
   }
   
   loadUserData("BAD-1234"); //Data loaded for user: 5 --> Loading complete.
   loadUserData(-1); //Failed: User Id must be -->Loading complete.