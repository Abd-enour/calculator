let numbers=document.querySelectorAll(".nbr");
let firstScreen= document.getElementById("first-screen");
let lastScreen = document.getElementById("last-screen");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let openParenthises = document.getElementById("open-parenthises");
let closeParenthises = document.getElementById("close-parenthises");
let clBtn = document.getElementById("clBtn");
let a =Number(firstScreen.textContent);
let b=Number(lastScreen.textContent);

for (let i=0;i<numbers.length;i++){
   numbers[i].addEventListener("click",()=>{
   lastScreen.textContent +=numbers[i].textContent;
   })
}

function addition() {
  let a =firstScreen.textContent;
  let b = lastScreen.textContent;
  let output = Number(a)+Number(b)
  lastScreen.textContent=output;
  firstScreen.textContent=b;
  console.log(a);
  console.log(b);
  console.log(output);
}
plus.onclick=()=>addition();
equal.onclick=()=>equals();

function equals(){
 let demo=  Number(lastScreen.textContent);
    firstScreen.textContent=demo;
}