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
  const header = document.getElementById("header");
  menu.classList.remove("fullfadein");
  menu.classList.add("fullfadeout");
  header.innerHTML="<div class='center fullfadein'><div class='back-button' onclick='pagedown()'>← Go Back</div></div>";
  article.innerHTML="<div class='center' id='articlegrid'><div class='container article-in' id='articlecontainer'><div id='paper'><div class='article-back article-back-waves'><div class='article-front article-front-waves' id='articlespace'></div></div></div></div></div>"
  const articlespace = document.getElementById("articlespace")
  if (id == 'aboutme'){
  articlespace.innerHTML = "<h1>The Front Page</h1><p>Hi there! I’m Matthew Petillo. I’m a junior double majoring in Computer Science and Journalism at the University of Kansas. I’m currently the Editor-In-Chief for the University Daily Kansan, the student newspaper at KU.</p><img src='photos/photoofmeinterviewing-2.jpg' height='500px' width='auto'><p>I’ve been working in student papers for years – first in middle school as an opinion writer, and then in high school as a reporter. I got my professional start working for Lawrence Business Magazine, a local trade publication. When I came to KU, I knew I was going to work for the student paper – because I love doing the news.</p><p>Other than that, I currently work with Professor Alex Bardas, a professor in the Electrical Engineering and Computer Science department at the School of Engineering, in his lab. My goal is to find the intersection of computers and journalism, and build tools for journalists to use to make their reporting better.</p>";
  }
  else if (id == 'projects'){
    articlespace.innerHTML = "<h1>Digital Exclusives</h1>";
  }
  else if (id == 'clips'){
    articlespace.innerHTML = "<h1>What's News</h1>";
  }
  else if (id == 'contactme'){
    articlespace.innerHTML = "<h1>Letter to the Editor</h1>";
  }
}

function pagedown(){//in theory, we don't need to use any ids here.
  const article = document.getElementById("articles");
  const menu = document.getElementById("menu-flex");
  const header = document.getElementById("header");
  const container = document.getElementById("articlecontainer");
  container.classList.remove("article-in");
  container.classList.add("article-out");
  menu.classList.remove("fullfadeout");
  menu.classList.add("fullfadein");
  header.innerHTML="<h1 class='fullfadein'>The News Stand</h1>"
}

function versionnum(){
 const versionhtml = document.getElementById("version");

}

