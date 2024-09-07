const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const audio = document.querySelector(".audio")
const typing = document.querySelector(".typed-out")

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you toooo, hmmm jadi sayang dehhh 😍";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmphaTlsdmQyZ3l3M2h4Mms1dTZqc3FsMWNueGx0ajJ6YXluN3BuOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MT6LcGLC1qJuYjn3ZE/giphy.gif";
  noBtn.style.pointerEvents = "none";
  typing.classList.remove("hide");
  audio.play(); 
});

// Make the No button move randomly on hover
noBtn.addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
