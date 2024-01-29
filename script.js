const selectoption= document.querySelector(".dot-item");

const removeoption=document.querySelector("#cross-icon");
const list=document.querySelector(".nav-icon");


list.addEventListener("click",()=>{
    selectoption.classList.add("active"); 
});

removeoption.addEventListener("click",()=>{
    selectoption.classList.remove("active");
})
