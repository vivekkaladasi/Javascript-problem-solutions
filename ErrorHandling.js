//ERROR HANDLING IN JAVASCRIPT
//types of errors
//1.complie time error 2.runtime error



//complie time error

//console.log(1;  //syntax error


//Runtime error
//reference error
 // console.log(x);

 //Handling:- try catch block

 try{
  console.log("try block stars here:");
  console.log(x);
  console.log("try block ends here");
 }
 catch(err){
  //defince what to do with the error
  //retry logic
  //fallback mechanism
  //logging
  //custom error

  console.log("i am inside catch block");
  console.log("your error is here:", err);

 }

 //finally block- this will run anyway anytime


 finally{
  console.log("i will run anytime anywhere");
 }
 //throw - shows custom error

 //lets create a custom error

 try{
  console.log(v);
 }
 catch(e){
  console.log("i am in catch block")

  throw new Error("declare first and print next")
 }

 let errorcode =100;
  if(errorcode==100){
    throw new Erro ("invalid JSon");
  }
