function insertText(text, element) {
  return new Promise(resolve => {
      for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
              element.innerHTML += text.charAt(i);
              if (i === text.length - 1) resolve(); // Resolve the promise after the last character
          }, i * 50);
      }
  });
}

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function randomNum(beginning, end) {
  return Math.floor(Math.random() * (end - beginning + 1)) + beginning;
}

function pullRandomQuote() {
  const randomQuotes = ["hehe, queer coded shit.", "oh look! a random quote.", "go outside! you've been indoors all day.", "remind me not to drink the pink drink too fast.", "the way to my heart is donuts.", "i have more grey hairs than i would like to think about.", "did you miss me? of course you did! that's why you're here.", "if you see this one, shoot me a tweet at @mpetilloks saying 'CAUGHT YOU!!!!'"];
  return randomQuotes[randomNum(0, randomQuotes.length - 1)];
}

function pullPage(page){
  const center = document.getElementById("center")
  center.classList.remove("fadein")
  center.classList.add("fadeout")
  sleep(0.5)
  if (page = 'about'){
    center.innerHTML = '<div class="container-fluid mt-3"><div class="row"><div class="col"></div><div class="col-sm-8" style="overflow: auto;"><h1>A1</h1><p>Hello. I\'m Matthew. Nice to meet you.</p><p>I work as an undergraduate researcher at the University of Kansas, with two stints at the California Institute of Technology. My primary area of research is cybersecurity, with a focus on microservices, but I\'ve also done work in nanofabrication and artificial intelligence.</p><p>I also moonlight as a journalist - I\'ve worked for several different publications, including the University Daily Kansan, where I\'m the editor-in-chief. I also formerly freelanced for Lawrence Business Magazine and the Kansas City Star.</p><p>I\'m currently pursuing two different degrees in Computer Science and Multimedia Journalism. I plan to graduate sometime in 2025.</p></div><div class="col"></div></div></div>'
  }
  center.classList.remove("fadeout")
  center.classList.add("fadein")
}

document.addEventListener('DOMContentLoaded', function() {
  const openBox = document.getElementsByClassName("open")[0];
  const center = document.getElementById("center")
  if (openBox) {
        sleep(1)
          .then(() => insertText("Hi. I'm Matthew.", openBox.querySelector("h1")))
          .then(() => sleep(2)) // 2-second delay
          .then(() => insertText(pullRandomQuote(), openBox.querySelector("h6")))
          .then(() => sleep(2))
          .then(() => openBox.innerHTML = "")
          .then(() => openBox.classList.add("timetogo"))
          .then(() => document.querySelector("header").classList.add("fadein"))
          .then(() => document.querySelector("footer").classList.add("fadein"))
          .then(() => center.innerHTML += '<div class="d-flex justify-content-center align-items-center" style="height: auto;"><button type="button" class="btn btn-secondary" onclick = "pullPage(\'about\')">About Me</button></div>')
  }
});
