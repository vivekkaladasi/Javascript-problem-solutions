
//here vivek is asking as a default parameter
function sayName(myName="vivek"){
  console.log("my name is ", myName)
}
//if u do not pass a name parameter here it still uses vivek because it is a default parameter
sayName();

function newName(fName="vivek", lname="kaladasi"){
  console.log("my first name is ",fName,"my last name is", lname);

}
newName();


function prevName(fname="vivek", lname = fname.toUpperCase()){
  console.log("my first name is ",fname,"my last name is ",lname)
}
prevName();


function solve(value={age:15,wt:90,ht:190}){ 
  console.log("hello joi",value)
}

solve(undefined);

//function as default parameter

function getAge(){
  return 190;
}

function utility(name="love",age=getAge()){
  console.log(name," ", age);

}
utility();
