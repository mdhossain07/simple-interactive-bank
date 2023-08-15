function givenInput(inputId){
    const inputAmount = document.getElementById(inputId);
    const inputAmountValue = parseFloat(inputAmount.value);
    inputAmount.value = '';
    return inputAmountValue;
}

function amountDisplay(amountShowId, inputGivenAmount){
    const amountShow = document.getElementById(amountShowId);
    const amountShowValue = parseFloat(amountShow.innerText);
    amountShow.innerText = amountShowValue + inputGivenAmount;
}

function balanceDisplay(balanceId, inputGivenAmount, bool){
    const balanceShow = document.getElementById(balanceId);
    const balanceShowValue = parseFloat(balanceShow.innerText);

    if(bool === true){
        balanceShow.innerText = inputGivenAmount + balanceShowValue;
    }
    else{
        balanceShow.innerText = balanceShowValue - inputGivenAmount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = givenInput('deposit-input');
    const depositAmountShow = amountDisplay('deposit-show', depositInput);
    const totalBalance = balanceDisplay('balance-show', depositInput, true);
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = givenInput('withdraw-input');
    const withdrawAmountShow = amountDisplay('withdraw-show', withdrawInput);
    const totalBalance = balanceDisplay('balance-show', withdrawInput);
})