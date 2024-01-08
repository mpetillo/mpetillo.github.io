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
  const randomQuotes = ["hehe, queer coded shit.", "oh look! a random quote.", "go outside! you've been indoors all day.", "remind me not to drink the pink drink too fast.", "the way to my heart is donuts.", "i have more grey hairs than i would like to think about.", "did you miss me? of course you did! that's why you're here.", "if you see this one, shoot me a post at @mpetilloks saying 'CAUGHT YOU!!!!'"];
  return randomQuotes[randomNum(0, randomQuotes.length)];
}


window.onload = function() {
  const openBox = document.getElementsByClassName("open")[0];
  const body = document.querySelector("body")
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
          .then(() => body.innerHTML += '<div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;"><button type="button" class="btn btn-secondary">About Me</button></div>')
  }
};
