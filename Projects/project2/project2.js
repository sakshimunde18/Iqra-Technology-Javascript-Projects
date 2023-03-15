const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const resetBtn = document.querySelector("#reset");
const countSpan = document.querySelector("#count");

let count = 0;

minusBtn.addEventListener("click", () => {
	count--;
	countSpan.textContent = count;
});

plusBtn.addEventListener("click", () => {
	count++;
	countSpan.textContent = count;
});

resetBtn.addEventListener("click", () => {
	count = 0;
	countSpan.textContent = count;
});
