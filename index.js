async function printAdvice() {
  const advice = document.querySelector("#adviceText");
  const adviceId = document.querySelector("#adviceId");

  const response = await fetch("https://api.adviceslip.com/advice");
  const word = await response.json();
  advice.innerHTML = word.slip.advice;
  console.log(word.slip.advice);
}
