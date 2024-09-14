 //classes
 //class can be considered as a blue print or a structure to build something
 //the instance from the class is called an "object"


 class Human{
  //properties
  age; //public 
  #wt=12;
  ht=3;

  //constructor

  constructor(newAge,newHeight,newWeight){
    this.age=newAge;
    this.ht=newHeight;

    this.#wt=newWeight;
  }

  //behaviour
 //getters and setters


    walking(){
      console.log("iamwalking" , this.#wt)
    }
    running(){
      console.log("iamrunning")
    }

    get fetchweight(){
      return this.wt;
     }
     set modifyweight(val){
      this.#wt=val;
     }

 }

 let obj = new Human(50,190,75);

 console.log(obj.ht);

 obj.walking();
 
 console.log(obj.age);

 console.log(obj.fetchweight);



 
 
