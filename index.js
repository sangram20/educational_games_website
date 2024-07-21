let nav=document.getElementById("mynav");
let icon=document.getElementsByClassName("icon");


function show()
{
    nav.style.visibility="visible"; 
    nav.style.opacity="10";  
    icon[0].style.visibility="hidden";

}


function show2()
{
    nav.style.visibility="hidden";   
    icon[0].style.visibility="visible";
    nav.style.opacity="0";  

}