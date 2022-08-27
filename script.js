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
      if(firstScreen.textContent==="0"){
         firstScreen.textContent=numbers[i].textContent;
      }else{
         firstScreen.textContent+=numbers[i].textContent;
      }
   })
}

plus.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   if(a.length===2){
      if (a[1]==="+") {
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " +"
      }else if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " +"
      }
   }else{
      let output= Number(a[0]) +Number(firstScreen.textContent);
      firstScreen.textContent="";
      lastScreen.textContent=output + " +"
   }
}

minus.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   if (a.length===2) {
      if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " -";
      }
      else if(a[1]==="+"){
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " +"
      }
      
   }else{
   let output= Number(a[0]) - Number(firstScreen.textContent);
   firstScreen.textContent="";
   lastScreen.textContent=output + " -";
   }
}

multiply.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   let output= (Number(a[0]) * Number(firstScreen.textContent));
   firstScreen.textContent="";
   lastScreen.textContent=output + " *"
}

divide.onclick=()=>{}
