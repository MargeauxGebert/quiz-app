console.clear();

function getELement(datajs) {
  return document.querySelector(`[data-js="${datajs}"]`);
}

const formCreateCard = getELement("form-create-card");
const buttonCreateCard = getELement("button-create-card");


formCreateCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardList = getELement("card-list");
  const questionText = formCreateCard.elements.question.value;
  const answerText = formCreateCard.elements.answer.value;

  const newCard = document.createElement("li");


  newCard.innerHTML = `<article class="card">
            <h2 class="card__question">
              ${questionText}
            </h2>
            <button class="card__button" data-js="answer-button">Hide Answer</button>
            <span class="card__answer card__answer--visible" data-js="answer">${answerText}</span>
            <button type="button" class="card__bookmark" data-js="card-bookmark">
              <svg
                class="card__bookmark-icon"
                data-js="card-bookmark-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                />
              </svg>
            </button>
          </article>`;

  cardList.append(newCard);
  formCreateCard.reset();
});
