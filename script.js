let data=50;
const cursor=document.getElementById('cursor');
const header_box=document.getElementsByClassName('header_box');
addEventListener("mousemove", (event) => {
if(event.y < 100)
      {console.log(event.x);
      console.log("y",event.y);
      cursor.style.left=event.x-data+"px";
      cursor.style.top=event.y-data+"px";}
});

for(let i=0;i<header_box.length;i++)
{ 
      header_box[i].addEventListener("mouseenter", (event) => {
      console.log("enter")
      cursor.style.backgroundColor="white";
      cursor.style.padding=40+"px";
});
      header_box[i].addEventListener("mouseleave", (event) => {
      console.log("leave")
      cursor.style.backgroundColor = "#1353f66b";
      data=50;
      cursor.style.padding=0+"px";
});
}