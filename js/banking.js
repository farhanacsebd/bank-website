
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositetotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositetotal + depositeAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    // clear input field
    depositeInput.value = '';


})
// handle withdrow button
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const withdrowAmount = parseFloat(withdrowAmountText);

    // handle or update withdrow total
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previousWithdorwtotal = parseFloat(withdrowTotalText);

    withdrowTotal.innerText = previousWithdorwtotal + withdrowAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrowAmount;

    // clear input field
    withdrowInput.value = '';

})