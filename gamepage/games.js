card=document.getElementsByClassName('card')
keyboard=document.getElementById('keyboard')
quesetionmark=document.getElementById('questionmark')

card[0].addEventListener('mouseover', () => {
    keyboard.style.transform = 'rotateZ(10deg)';
    
  });
  
  card[0].addEventListener('mouseout', () => {
    keyboard.style.transform = 'rotateZ(0deg)';
  });

  card[1].addEventListener('mouseover', () => {
    quesetionmark.style.transform = 'rotateZ(-6deg)';
    
  });

  card[1].addEventListener('mouseout', () => {
    quesetionmark.style.transform = 'rotateX(0deg)';
  });


  

  
let nav=document.getElementById("mynav");
let icon=document.getElementsByClassName("icon");


function show()
{
  // nav.style.display="block";
  //   nav.style.visibility="visible"; 
    nav.style.display="block";  
    icon[0].style.visibility="hidden";
    // nav.style.display="block";
}


function show2()
{
    // nav.style.visibility="hidden";   
    icon[0].style.visibility="visible";
    nav.style.display="none";  
    // nav.style.display="none";

}
