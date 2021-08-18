

function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);
	const inputAmountText = inputField.value;
	const amountValue = parseFloat(inputAmountText);
	//clear input field
	inputField.value = '';
	return amountValue;
}

function updateTotalField(totalFieldId, amount) {
	// debugger
	const totalElement = document.getElementById(totalFieldId);
	const totalText = totalElement.innerText;
	const previousTotal = parseFloat(totalText);
	totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance() {
	const balanceTotal = document.getElementById('balance-total');
	const balanceTotalText = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(balanceTotalText);
	return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceTotal = getCurrentBalance();

	(isAdd) ?
		balanceTotal.innerText = previousBalanceTotal + depositAmount :
		balanceTotal.innerText = previousBalanceTotal - depositAmount;

}

document.getElementById('deposit-button').addEventListener('click', function () {
	const depositAmount = getInputValue('deposit-input');
	if (depositAmount > 0) {
		//get and update deposit total
		updateTotalField('deposit-total', depositAmount);
		//update balance
		updateBalance(depositAmount, true);
	}
})

//withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
	const withdrawAmount = getInputValue('withdraw-input');
	const currentBalance = getCurrentBalance();
	if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
		//get and update withdraw total
		updateTotalField('withdraw-total', withdrawAmount)
		//update balance
		updateBalance(withdrawAmount, false);
	}

})

