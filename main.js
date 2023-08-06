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
  if (id == 'aboutme'){
  article.innerHTML = "<div class='center' id='articlegrid'><div class='container article-in'><div id='paper'><div class='article-back article-back-waves'><div class='article-front article-front-waves' id='paper'><h1>TOMFUCKERY</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Justo donec enim diam vulputate ut pharetra. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Tincidunt augue interdum velit euismod in pellentesque massa. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. In fermentum et sollicitudin ac orci phasellus egestas tellus. Velit scelerisque in dictum non consectetur. Est ante in nibh mauris cursus mattis molestie. Dui ut ornare lectus sit amet est placerat in egestas. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.</p><p>Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas dui id ornare arcu odio ut sem. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Pretium viverra suspendisse potenti nullam ac. Fusce ut placerat orci nulla pellentesque dignissim enim. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Faucibus interdum posuere lorem ipsum dolor sit. Egestas erat imperdiet sed euismod nisi porta. Tortor at auctor urna nunc id cursus metus aliquam. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ultrices dui sapien eget mi proin sed libero enim. Ac felis donec et odio pellentesque. Elit scelerisque mauris pellentesque pulvinar. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Risus in hendrerit gravida rutrum quisque. Urna porttitor rhoncus dolor purus non enim. Varius quam quisque id diam vel. Mi sit amet mauris commodo quis imperdiet massa tincidunt.</p><p>Dictum sit amet justo donec enim diam vulputate. Laoreet non curabitur gravida arcu ac tortor dignissim. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Enim diam vulputate ut pharetra sit amet. Vulputate odio ut enim blandit volutpat. Integer vitae justo eget magna fermentum iaculis. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nibh praesent tristique magna sit amet purus gravida. Amet commodo nulla facilisi nullam vehicula. Sapien nec sagittis aliquam malesuada. Nulla facilisi etiam dignissim diam quis enim lobortis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Magna fermentum iaculis eu non diam phasellus. Sed arcu non odio euismod lacinia at quis risus sed.</p><p>Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Enim sit amet venenatis urna cursus. Congue nisi vitae suscipit tellus mauris a diam. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Faucibus vitae aliquet nec ullamcorper. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Hendrerit gravida rutrum quisque non tellus. Volutpat commodo sed egestas egestas fringilla phasellus. Dolor sit amet consectetur adipiscing elit ut. Velit scelerisque in dictum non consectetur a erat nam at. Enim tortor at auctor urna nunc id cursus metus. Urna duis convallis convallis tellus id interdum velit laoreet. Tortor dignissim convallis aenean et tortor at. Eu volutpat odio facilisis mauris. Adipiscing at in tellus integer feugiat scelerisque varius. Condimentum lacinia quis vel eros donec ac odio tempor.</p><p>Id venenatis a condimentum vitae. Leo a diam sollicitudin tempor id eu nisl. Et malesuada fames ac turpis egestas. Lectus proin nibh nisl condimentum. Non sodales neque sodales ut etiam. Neque volutpat ac tincidunt vitae semper. Feugiat pretium nibh ipsum consequat. Odio aenean sed adipiscing diam donec adipiscing. Lacus laoreet non curabitur gravida. Scelerisque felis imperdiet proin fermentum. Aliquam malesuada bibendum arcu vitae. Vel fringilla est ullamcorper eget nulla facilisi. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Nunc mi ipsum faucibus vitae aliquet nec. Fames ac turpis egestas maecenas pharetra convallis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Semper feugiat nibh sed pulvinar proin. Quam quisque id diam vel quam elementum pulvinar.</p></div></div></div></div></div>";
  }
}

function pagedown(){//in theory, we don't need to use any ids here.
  const background = document.getElementById("article-bg");
  const paper = document.getElementById("article");
  background.classList.remove("backgroundarticlefadeout");  
  background.classList.add("backgroundarticlefadein");
}

