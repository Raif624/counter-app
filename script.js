let count=0;
let showcount=document.querySelector("#count");
let Increase=document.querySelector("#increase");
let Reset=document.querySelector("#reset");
let Decrease=document.querySelector("#decrease");

Increase.addEventListener("click",function(){
    count++;
    showcount.textContent=count;
});

Decrease.addEventListener("click",function(){
    count--;
    showcount.textContent=count;
}); 
Reset.addEventListener("click",function(){
    count=0;
    showcount.textContent=count;
});