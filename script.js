let numbers=document.querySelectorAll(".nbr");
let firstScreen= document.getElementById("first-screen");
let lastScreen = document.getElementById("last-screen");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clBtn = document.getElementById("clBtn");
let returnArrow=document.getElementById("return-arrow");
let modulus=document.getElementById("modulus");
let closeHistory= document.getElementById("close-history");
let history= document.getElementsByClassName("calc-history")[0];
let showHistory=document.getElementById("show-history");
let calContainer=document.getElementById("calculator");


for (let i=0;i<numbers.length;i++){
   numbers[i].addEventListener("click",()=>{
      if(firstScreen.textContent==="0"){
         firstScreen.textContent=numbers[i].textContent;
      }else{
         firstScreen.textContent+=numbers[i].textContent;
      }
   })
}
function operators(operator){ 
   if (lastScreen.textContent==="" && firstScreen.textContent!=="") {
      lastScreen.textContent=lastScreen.textContent+ firstScreen.textContent+" "+operator;
      firstScreen.textContent="0";
   }
       else if(lastScreen.textContent!=="" && firstScreen.textContent!==""){
         let lastScreenArray=lastScreen.textContent.split(" ");
         if(lastScreenArray[lastScreenArray.length-1]==="="){
            lastScreen.textContent=firstScreen.textContent+" "+operator;
            firstScreen.textContent="0";
         }else if(lastScreenArray[lastScreenArray.length-1]!=="="){
            lastScreen.textContent+=" "+firstScreen.textContent+" "+operator;
            firstScreen.textContent="0";
         }
      } 
}

plus.onclick=()=>{
   operators("+");
}

minus.onclick=()=>{
   operators("-");
}

multiply.onclick=()=>{
   operators("*")
}

divide.onclick=()=>{
   operators("/")
}

modulus.onclick=()=>{
   operators("%")
}

clBtn.onclick=()=>{
   firstScreen.textContent="0";
   lastScreen.textContent="";
let rowHistory=document.querySelectorAll(".row-history");
   for (let i=0; i<rowHistory.length;i++){
      rowHistory[i].remove();
   }
}

returnArrow.onclick=()=>{
   let something = firstScreen.textContent.split("");
   something.pop();
   let result="";
   for(let i =0; i<=something.length-1;i++){
      result += something[i];
   }
   firstScreen.textContent=result;
}

function calculateResult(){
   let lastScreenArray=lastScreen.textContent.split(" ");
   for (let i =1 ; i<lastScreenArray.length;i+=2){
      if(i===1){
         if(lastScreenArray[i]==="+"){
            var result = Number(lastScreenArray[i-1])+Number(lastScreenArray[i+1]);
         }
         else if(lastScreenArray[i]==="-"){
               var result = Number(lastScreenArray[i-1])-Number(lastScreenArray[i+1]);
         }
         else if(lastScreenArray[i]==="*"){
               var result = Number(lastScreenArray[i-1])*Number(lastScreenArray[i+1]);
         }
         else if(lastScreenArray[i]==="/"){
               var result = Number(lastScreenArray[i-1])/Number(lastScreenArray[i+1]);
         }
         else if(lastScreenArray[i]==="%"){
               var result = Number(lastScreenArray[i-1])%Number(lastScreenArray[i+1]);
         }
   }else if (i>1 && i!==lastScreenArray.length-1){
      if(lastScreenArray[i]==="+"){
         result+= Number(lastScreenArray[i+1]);
      }
      else if(lastScreenArray[i]==="-"){
         result-= Number(lastScreenArray[i+1]);
      }
      else if(lastScreenArray[i]==="*"){
         result*= Number(lastScreenArray[i+1]);
      }
      else if(lastScreenArray[i]==="/"){
         result/= Number(lastScreenArray[i+1]);
      }
      else if(lastScreenArray[i]==="%"){
         result%= Number(lastScreenArray[i+1]);
      }
   }else{
      firstScreen.textContent=result;
   }
}
}

equal.onclick=()=>{
   let lastScreenArray=lastScreen.textContent.split(" ");
   if (lastScreenArray.length%2===0 && firstScreen.textContent==="" || firstScreen.textContent==="0"){
      lastScreenArray.pop();
      lastScreenArray.push("=");
      lastScreen.textContent=lastScreenArray.join(" ");
      calculateResult();
   }else {
      operators(lastScreenArray[lastScreenArray.length-1])
      lastScreenArray=lastScreen.textContent.split(" ");
      lastScreenArray.pop();
      lastScreenArray.push("=");
      lastScreen.textContent=lastScreenArray.join(" ");
      calculateResult();
   }
   createHistory();
}

closeHistory.onclick=()=>{
   history.style.width="0px";
   history.classList.add("visibility");
   closeHistory.classList.add("visibility");
   showHistory.classList.remove("visibility");
   calContainer.style.cssText="border-top-right-radius:15px ;border-bottom-right-radius:15px";
};

showHistory.onclick=()=>{
   history.style.cssText="width:286px;background-color:#76a3dad6";
   history.classList.remove("visibility");
   showHistory.classList.add("visibility");
   closeHistory.classList.remove("visibility");
   calContainer.style.cssText="border-top-right-radius:0px ;border-bottom-right-radius:0px";
};

function createHistory(){
   let div=document.createElement("div");
   div.setAttribute("class","row-history");
   for(let i=1;i<=2;i++){
   let p=document.createElement("p");
      if(i==1){
         p.textContent=lastScreen.textContent;
      }else if(i==2){
         p.textContent=firstScreen.textContent;
      }
      div.appendChild(p);
   }
   history.appendChild(div);
}