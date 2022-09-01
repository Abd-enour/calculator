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
   console.log(a);
   if (a.length > 2) {
      lastScreen.textContent=firstScreen.textContent+ " +";
      firstScreen.textContent="";
   }else if(a.length===2){
      if (a[1]==="+") {
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " +"
      }else if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " +"
      }
      else if(a[1]==="*"){
         if(firstScreen.textContent!==""){
         let output= Number(a[0]) * Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " +";
         }else{
            return lastScreen.textContent= a[0]+" +";
         }
      }
      else if(a[1]==="/"){
         if(firstScreen.textContent==="0"){
               firstScreen.textContent="ERROR:can't divide by 0";
         }else if (firstScreen.textContent!==""){
         let output= Number(a[0]) / Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " +";
         }else if(firstScreen.textContent===""){
            return ;
         }else{
            lastScreen.textContent="";
            firstScreen.textContent="ERROR:Can't divide by 0"
         }
      }
   }else{
      if(firstScreen.textContent ==="0" && lastScreen.textContent===""){
         return ;
      }
      let output= Number(a[0]) +Number(firstScreen.textContent);
      firstScreen.textContent="";
      lastScreen.textContent=output + " +"
   }
}

minus.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   if (a.length > 2) {
      lastScreen.textContent=firstScreen.textContent+ " -";
      firstScreen.textContent="";
   }else if (a.length===2) {
      if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " -";
      }
      else if(a[1]==="+"){
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " -"
      }else if(a[1]==="*"){if(firstScreen.textContent!==""){
         let output= Number(a[0]) * Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " +";
         }else{
            return lastScreen.textContent= a[0]+" +";
         }
      }else if(a[1]==="/"){
         if(firstScreen.textContent==="0"){
            lastScreen.textContent="";
            firstScreen.textContent="ERROR:can't divide by 0";
         }else if(firstScreen.textContent!==""){
            let output= Number(a[0])/Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output+" /";
         }else{
            return ;
         }
      }
      
   }else{
      if(firstScreen.textContent ==="0" && lastScreen.textContent===""){
         return ;
      }
      let output= Number(firstScreen.textContent) - Number(a[0]);
      firstScreen.textContent="";
      lastScreen.textContent=output + " -";
   }
}

multiply.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   if (a.length > 2) {
      lastScreen.textContent=firstScreen.textContent+ " *";
      firstScreen.textContent="";
   }else if(a.length===2){
      if(a[1]==="+"){
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " *"
      }
      else if (a[1]==="-") {
         let output= Number(a[0]) -Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " *"   
      }
      else if (a[1]==="*") {
         let output= Number(a[0]) *Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " *"
      }
      else if (a[1]==="/") {
         if(firstScreen.textContent==="0"){
               firstScreen.textContent="ERROR:can't divide by 0";
         }else if(firstScreen.textContent!==""){
            let output= Number(a[0])/Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output+" /";
         }else{
            return ;
         }
      }
   }else{
   if(firstScreen.textContent ==="0" && lastScreen.textContent===""){
      return ;
   } else{ 
      if(lastScreen.textContent!=="" && firstScreen.textContent===""){
         return ;
      }else if(lastScreen.textContent==="" && firstScreen.textContent!==""){
         lastScreen.textContent=firstScreen.textContent + " *";
         firstScreen.textContent="";
      }
      else{
         let output= (Number(a[0]) * Number(firstScreen.textContent));
         firstScreen.textContent="";
         lastScreen.textContent=output + " *";
      }
}
   }
}

divide.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   if (a.length > 2) {
      lastScreen.textContent=firstScreen.textContent+ " /";
      firstScreen.textContent="";
   }else if(a.length===2){
      if (a[1]==="+") {
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " /";
      }else if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " /";
      }else if(a[1]==="*"){
         let output= Number(a[0]) *Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " /"
      }else if(a[1]==="/"){
         if(firstScreen.textContent==="0"){
               firstScreen.textContent="ERROR:can't divide by 0";
               lastScreen.textContent="";
         }else if(firstScreen.textContent!==""){
            let output= Number(a[0])/Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output+" /";
         }else{
            return ;
         }
      }

   }else{
      if(lastScreen.textContent==="" && firstScreen.textContent===""){
         return ;
      }else if(firstScreen.textContent!==""){
         lastScreen.textContent=firstScreen.textContent+ " /";
         firstScreen.textContent="";
      }
   }
}

clBtn.onclick=()=>{
   firstScreen.textContent="0";
   lastScreen.textContent="";
}

modulus.onclick=()=>{
   let a = lastScreen.textContent.split(" ");
   console.log(a);
   if (a.length > 2) {
      lastScreen.textContent=firstScreen.textContent+ " %";
      firstScreen.textContent="";
   }else if(a.length===2){
      if (a[1]==="+") {
         let output= Number(a[0]) +Number(firstScreen.textContent);
         firstScreen.textContent="";
         lastScreen.textContent=output + " %"
      }else if(a[1]==="-"){
         let output= Number(a[0]) - Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " %"
      }
      else if(a[1]==="*"){
         if(firstScreen.textContent!==""){
         let output= Number(a[0]) * Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " %";
         }else{
            return lastScreen.textContent= a[0]+" %";
         }
      }
      else if(a[1]==="/"){
         if(firstScreen.textContent==="0"){
               lastScreen.textContent="";
               firstScreen.textContent="ERROR:can't divide by 0";
         }else if (firstScreen.textContent!==""){
         let output= Number(a[0]) / Number(firstScreen.textContent);
            firstScreen.textContent="";
            lastScreen.textContent=output + " %";
         }else{
            return ;
         }
      }
   }else{
      if(firstScreen.textContent ==="0" && lastScreen.textContent===""){
         return ;
      }
      let output= Number(a[0]) +Number(firstScreen.textContent);
      firstScreen.textContent="";
      lastScreen.textContent=output + " %"
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

equal.onclick=()=>{
   let a =lastScreen.textContent.split(" ");
   if(a[1]==="+"){
      let output=Number(a[0]) + Number(firstScreen.textContent);
      lastScreen.textContent=a[0] +" + "+ firstScreen.textContent+" = ";
      firstScreen.textContent=output;
   }else  if(a[1]==="-"){
      let output=Number(a[0]) - Number(firstScreen.textContent);
      lastScreen.textContent=a[0] +" - "+ firstScreen.textContent+" = ";
      firstScreen.textContent=output;
   }else  if(a[1]==="*"){
      let output=Number(a[0]) * Number(firstScreen.textContent);
      lastScreen.textContent=a[0] +" * "+ firstScreen.textContent+" = ";
      firstScreen.textContent=output;
   }else  if(a[1]==="/"){
      let output=Number(a[0]) / Number(firstScreen.textContent);
      lastScreen.textContent=a[0] +" / "+ firstScreen.textContent+" = ";
      firstScreen.textContent=output;
   }else  if(a[1]==="%"){
      let output=Number(a[0]) % Number(firstScreen.textContent);
      lastScreen.textContent=a[0] +" % "+ firstScreen.textContent+" = ";
      firstScreen.textContent=output;
   }
}