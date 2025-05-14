let chbtn=document.querySelector(".chbtn");
let inner=document.querySelector(".inner");
let box=document.querySelector(".box2");
let first=document.querySelector(".box1")
let colorch=true;
function randomString(length){
    let result="";
    let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<length;i++ ){
        const randomIndex=Math.floor(Math.random()*r.length);
        result+=r[randomIndex];
    }
    return result;
};
box.addEventListener("click",()=>{
    first.innerText=randomString(8);
})
chbtn.addEventListener("click",()=>{
      if(colorch==true){
        inner.style.backgroundColor="black";
        colorch=false;
      }
      else{
        inner.style.backgroundColor="white";
        colorch=true;
      }
});