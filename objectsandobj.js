 //classes
 //class can be considered as a blue print or a structure to build something
 //the instance from the class is called an "object"


 class Human{
  //properties
  age=13; //public 
  #wt=12;
  ht=3;

  //behaviour

    walking(){
      console.log("iamwalking" , this.#wt)
    }
    running(){
      console.log("iamrunning")
    }

 }

 let obj = new Human();

 console.log(obj.wt);

 obj.walking();
 
 console.log(obj.age);
