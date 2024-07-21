function createCard(img, name) {
  let html = `<div class="profile">
    <img src="${img}" alt=""/><span class="name">${name}</span>
  </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
let data = [
  {
    url: "vinay.png",
    name: "Vinay Kesarwani",
  },
  {
    url: "sangram.png",
    name: "Sangram Ghadage",
  },
  {
    url: "pratik.png",
    name: "Pratik Kumbhar",
  },
];

data.forEach(function (obj) {
  let Url = obj.url;
  let Name = obj.name;
  createCard(Url, Name);
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
