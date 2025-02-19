console.clear();

function getELement(datajs) {
  return document.querySelector(`[data-js="${datajs}"]`);
}

const bookmarkButton = getELement("card-bookmark");
const bookmarkIcon = getELement("card-bookmark-icon");

bookmarkButton.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark-icon--active");
  console.log("toggle");
});

const answerButton = getELement("answer-button");
const answerDisplay = getELement("answer");

answerButton.addEventListener("click", () => {
  answerDisplay.classList.toggle("card__answer--visible");

  if (answerDisplay.classList.contains("card__answer--visible") === true) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
