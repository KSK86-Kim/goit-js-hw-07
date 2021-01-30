const butIncRef = document.querySelector('button[data-action="increment"]');
const butDecRef = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector("#value");

butIncRef.addEventListener("click", () => {
  counter.textContent = Number(counter.textContent) + 1;
});
butDecRef.addEventListener("click", () => {
  counter.textContent = Number(counter.textContent) - 1;
});
