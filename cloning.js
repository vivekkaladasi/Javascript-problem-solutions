

//object cloning 1.spread operator (...)

console.log("vivek")

let src = {
  age:12,
  wt:67,
  ht:190
};

let src2={
  value:11,
  name:"valkari",
}
let dest ={...src}
src.age=90;
console.log("src: ", src);
console.log("dest: ",dest);

// assign method 

let destt= Object.assign({},src,src2)
console.log("src: ", src);
console.log("dest: ",dest);
console.log("src2:", src2)


//iteration method 
let obj={
  age:12,
  wt:90,
  heit:180
};

let desti={};
let newKey=key;
let newValue=obj[key];
dest[newKey]=newValue;

console.log(desti);
