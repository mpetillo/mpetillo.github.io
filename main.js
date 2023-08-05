//functionality notes:
//ARRAY FORM SHOULD ALWAYS BE [FRONT, BACK] FOR HOVER IDS
//hoverover is for when a mouse is over a dic, unhoverover is when the mouse is removed

function hoverover(ids){ 
  const front = document.getElementById(ids[0]);
  const back = document.getElementById(ids[1]);
  front.classList.remove("animationdown");
  back.classList.remove("animationdown");
  front.classList.add("animationup");
  back.classList.add("animationup");
  console.log("Hovering!");
}

function unhoverover(ids) {
  const front = document.getElementById(ids[0]);
  const back = document.getElementById(ids[1]);
  front.classList.remove("animationup");
  back.classList.remove("animationup")
  front.classList.add("animationdown");
  back.classList.add("animationdown");
  console.log("Left!");
}

function pageup(id){//this takes a single id, the section that was clicked
  const article = document.getElementById("articles");
  const menu = document.getElementById("menu-flex");
  menu.classList.add("fullfadeout")
  article.innerHTML = "<div class='center' id='articlegrid'><div class='container article-in'><div class='article-back article-back-waves'><div class='article-front article-front-waves' id='paper'><h1>TOMFUCKERY</h1></div></div></div></div>";
}

function pagedown(){//in theory, we don't need to use any ids here.
  const background = document.getElementById("article-bg");
  const paper = document.getElementById("article");
  background.classList.remove("backgroundarticlefadeout");  
  background.classList.add("backgroundarticlefadein");
}

