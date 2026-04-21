//Accessing keys in an object
let obj ={
    name: "Esther",
    age: 25,
    profession: "Developer",
}
let student= {
    name:"Ngozi Adeyemi",
    age: 21,
   department:"computer science",
   isEnrolled: true
};
console.log(student.name)//use of dot(.)
console.log(student["age"])//use of square bracket

//Destructuring keys in an object
let employee ={
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};


let newName = employee.name
let newRole = employee.role

const {name, salary} = employee
console.log(name)
console.log(salary)

//renaming keys
let courses = {
    csc401: "Data Structure" ,
    csc402: "Algorithms",
    csc403: "operating Systems",
    csc404: "Database Systems"
}

let {csc401: csc400} = courses
console.log(csc400)


let profile= {name: "Ada", age: 22}

//copy and add new properties
let updatedProfile ={
    ...profile,
    city: "Abuja"
};
console.log(updatedProfile);

//const { nombre,...rest} = {
//     nombre: "Emeka",
//     age: 25
//    city: "Lagos"
//};

//console.log(nombre); //"Emeka"
//console.log(rest);
//{age: 25, city: "Lagos"}
      


const user = {
      name: "Esther",
      password: "12345",
      isFemale: true,
      city: "Lagos",
      age: 25
 }
 
 //console.log(object.keys(user))
 //console.log(object.values(user))
// console.log(object.entries(user))
 
 //for in
for(let key in user){
   console.log("these are the keys: " + key)
   console.log("these are the values: " + user[key])
}