function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalField, amount) {
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousDepositetotal = parseFloat(totalText);
    totalElement.innerText = previousDepositetotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else { balanceTotal.innerText = previousBalanceTotal - amount; }

}
document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositeInput = document.getElementById('deposit-input');
    // const depositeAmountText = depositeInput.value;
    // const depositeAmount = parseFloat(depositeAmountText);


    // get current deposite
    // const depositeTotal = document.getElementById('deposite-total');
    // const depositeTotalText = depositeTotal.innerText;
    // const previousDepositetotal = parseFloat(depositeTotalText);
    // depositeTotal.innerText = previousDepositetotal + depositeAmount;



    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    const depositeAmount = getInputValue('deposit-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }

})
// handle withdrow button

document.getElementById('withdrow-button').addEventListener('click', function () {
    // const withdrowInput = document.getElementById('withdrow-input');
    // const withdrowAmountText = withdrowInput.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);



    // handle or update withdrow total
    // const withdrowTotal = document.getElementById('withdrow-total');
    // const withdrowTotalText = withdrowTotal.innerText;
    // const previousWithdorwtotal = parseFloat(withdrowTotalText);

    // withdrowTotal.innerText = previousWithdorwtotal + withdrowAmount;



    // update balance after withdraw
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
 
     balanceTotal.innerText = previousBalanceTotal - withdrowAmount; */

    const withdrowAmount = getInputValue('withdrow-input');
    const currentBalance = getCurrentBalance();
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        updateTotalField('withdrow-total', withdrowAmount)
        updateBalance(withdrowAmount, false);
    }
    if (withdrowAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account')
    }

    // clear input field
    // withdrowInput.value = '';

})