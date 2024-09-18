//change css-> modify, change , add , delete
let paraElement = document.getElementById('spara');
undefined
paraElement
<p id=​"spara" style=​"background-color:​ orange;​ padding:​ 0.8rem;​">​ second para ​</p>​
console.log(paraElement.style);
VM4873:1 CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
undefined
    paraElement.style.backgroundColor='blue';
'blue'
let secondElement=document.getElementById('sdiv')
undefined
secondElement.style.cssText;
'background-color: yellow; padding: 1.2rem;'
secondElement.style.cssText="background-color:red; color:white; padding:0.5rem";
'background-color:red; color:white; padding:0.5rem'

let firstElement = document.querySelector('#fdiv');
undefined
firstElement
<div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​">​…​</div>​
firstElement.setAttribute('class','divClass');
undefined
firstElement
<div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"divClass">​" first div "<p id=​"fpara" style=​"background-color:​ green;​ padding:​ 1rem;​">​ first para ​</p>​<div id=​"sdiv" style=​"background-color:​ red;​ color:​ white;​ padding:​ 0.5rem;​">​…​</div>​</div>​
firstElement.setAttribute('class','secondDivClass');
undefined
firstElement
<div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"secondDivClass">​" first div "<p id=​"fpara" style=​"background-color:​ green;​ padding:​ 1rem;​">​ first para ​</p>​<div id=​"sdiv" style=​"background-color:​ red;​ color:​ white;​ padding:​ 0.5rem;​">​…​</div>​</div>​
firstElement.setAttribute('style'."padding:0rem");
VM6007:1 Uncaught SyntaxError: Unexpected stringUnderstand this error
firstElement.setAttribute('style',"padding:0rem");
undefined
