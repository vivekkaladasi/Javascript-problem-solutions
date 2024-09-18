///

///DO NOT RUN THIS CODE//


///


//javascript DOM manipulation
//window is considered as global object
//window object is top of the hirearichy
//DOM:- (Document object Model)
//BOM:- browser object model
//code

//get element byid
document.getElementById("fpara");
<p id=​"fpara">​ First paragraph​</p>​
document.getElementById("fheading");
<h1 id=​"fheading">​ First heading​</h1>​



//get element by class names
documentcument.getElementsByClassName("textMatter");
HTMLCollection []length: 0[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object




//Get element by tag name

document.getElementsByTagName('p')
HTMLCollection(3) [p#fpara.textMatter, p, p, fpara: p#fpara.textMatter]



//query selector(#fpara)
//it only returns the first line and leaves the rest
document.querySelector('#fpara');
<p id=​"fpara" class=​"textMatter">​ First paragraph​</p>​
document.querySelector('.textMatter');
<p id=​"fpara" class=​"textMatter">​ First paragraph​</p>​
document.querySelector('p')
<p id=​"fpara" class=​"textMatter">​ First paragraph​</p>​

//update exisiting element
//1.inner html -get/set
document
#document (https://www.codehelp.in/)<!DOCTYPE html><html lang=​"en" class=​"dark" style=​"color-scheme:​ dark;​">​<head>​…​</head>​<body class=​"__className_36bd41 overflow-x-hidden">​…​</body>​</html>​
$0
<p class=​"flex items-center justify-center gap-x-2 text-base font-medium px-2">​View Courses​</p>​flex
let button = $0
undefined
button.innerHTML
'View Courses'
button.innerHTML = '<p> hello </p>';
'<p> hello </p>'
button
<p class=​"flex items-center justify-center gap-x-2 text-base font-medium px-2">​…​</p>​flex
www.codehelp.in/:1 The resource https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FDarkLogoGif.gif&w=384&q=75 was preloaded using link preload but not used within a few seconds
// from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
//2.outer html
//3. text content
let fHeading = document.createElement('h1');
undefined
fHeading.textContent = "my name ivi vivek";
'my name ivi vivek'
fHeading
<h1>​my name ivi vivek​</h1>​
docum
VM2491:1 Uncaught ReferenceError: docum is not defined
    at <anonymous>:1:1
(anonymous) @ VM2491:1Understand this error
document
#document (http://127.0.0.1:5500/index.html)<!DOCTYPE html><html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
let bodyTage = document.querySelector('body');
undefined
bodTag.appendChild(fHeading);
VM2738:1 Uncaught ReferenceError: bodTag is not defined
    at <anonymous>:1:1
(anonymous) @ VM2738:1Understand this error
bodyTag.appendChild(fHeading);
VM2822:1 Uncaught ReferenceError: bodyTag is not defined
    at <anonymous>:1:1
(anonymous) @ VM2822:1Understand this error
bodyTage.appendChild(fHeading);
<h1>​my name ivi vivek​</h1>​
bodyTage
<body>​<div id=​"fdiv">​…​</div>​<p id=​"fpara" class=​"textMatter">​ First paragraph​</p>​<p>​</p>​<h1 id=​"fheading" class=​"textMatter">​ First heading​</h1>​<p>​</p>​<!-- Code injected by live-server --><script>​…​</script>​<h1>​my name ivi vivek​</h1>​</body>​
//
undefined


// insert Adjacent html()

position-1 before begin
          2.after begin
          3.before end
          4.after end


//removechild
remove_child()







