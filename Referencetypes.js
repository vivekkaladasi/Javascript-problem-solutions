//creation of array

let brr=new Array('vivek','is','number',1);
console.log(brr);
//push pop and slice functions 

console.log(typeof(brr));
console.log("ji")
brr.push("V");
console.log(brr)
brr.pop();
console.log("brr after pop: " ,brr);
brr.shift();
console.log(brr);
brr.unshift("Vivekkaladasi");
console.log(brr);
brr.push(20);
brr.push(30);
brr.push(40);
console.log(brr);
//console.log(brr.slice(2,4));
console.log(brr);
//splice
brr.splice(0,2,'vivek')
console.log(brr);


 //map function

let arr= [10,20,30];

 let ansarr=arr.map((Number)=>{
    return Number*Number
 })
 console.log(ansarr);

 let crr=[40,50,60];
 let answercrr=crr.map((Number)=>{
    return Number*Number
 })
 console.log(answercrr);

 let drr=[21,32,43];

 drr.map((Number)=>{
    return console.log(Number+1)
 })

 //filter function

 
let err=[10,20,30,11,21,44,51];
let errans=err.filter((number)=>{
    if(err%2==0){
        return true;
    }
    else return false;
    
 })
 console.log(errans);

 
 let valans=brr.filter((value)=>{
    if(typeof(value)=='Number'){
        return true;
    }
    else return false;
 })
 console.log(valans)



 //reduce function

 let frr=[10,20,30,40];
 let ansfrr= frr.reduce((acc,cur)=>{
    return acc+cur;
 },0)
 console.log(ansfrr)

 let grr=[3,6,9,4,2,1,8];
 grr.sort();
 console.log(grr);


 // indexOf
 console.log(grr.indexOf(4));

 //find function


 let hrr=[10,20,30];

 let length = hrr.length
 console.log("length: ",length)
 hrr.forEach((value,index)=>{
    console.log("number:",value,"index: ",index)
 })

 let irr = [10,20,30,40,50];
 function getSum(irr){

   let len = irr.length;
   let sum=0;
   for(let index=0;index<length;index++){
      sum = sum +irr[index];
   }
   return sum;
 }
 let total= getSum(irr);
 console.log(total)
