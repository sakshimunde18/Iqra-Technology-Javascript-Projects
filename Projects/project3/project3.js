const billAmountInput = document.querySelector("#bill-amount");
const discountPercentageSelect = document.querySelector("#discount-percentage");
const discountAmountInput = document.querySelector("#discount-amount");
const finalAmountInput = document.querySelector("#final-amount");
const calculateBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");

calculateBtn.addEventListener("click", () => {
	const billAmount = billAmountInput.value;
	const discountPercentage = discountPercentageSelect.value;

	if (billAmount && discountPercentage) {
		const discountAmount = billAmount * (discountPercentage / 100);
		const finalAmount = billAmount - discountAmount;

		discountAmountInput.value = discountAmount.toFixed(2);
		finalAmountInput.value = finalAmount.toFixed(2);
	} else {
		alert("Please enter bill amount and select a discount percentage.");
	}
});

resetBtn.addEventListener("click", () => {
	billAmountInput.value = "";
	discountPercentageSelect.value = "0";
	discountAmountInput.value = "";
	finalAmountInput.value = "";
});
