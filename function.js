



// Budget Calculation
document.getElementById('btn-budget').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const newInputFieldAmountString = inputField.value;
    const newInputFieldAmount = parseFloat(newInputFieldAmountString);

    inputField.value = '';

    const totalBudgetElement = document.getElementById('total-budget');
    const previousTotalBudgetString = totalBudgetElement.innerText;
    const previousTotalBudget = parseFloat(previousTotalBudgetString);

    const newTotalBudget = previousTotalBudget + (newInputFieldAmount * 5);
    totalBudgetElement.innerText = newTotalBudget;
    return totalBudgetElement;
})
// TOtal Budget Calculation
document.getElementById('total-budget-btn').addEventListener('click', function(){
    const inputField2 = document.getElementById('input-field-2');
    const newInputField2AmountString = inputField2.value;
    const newInputField2Amount = parseFloat(newInputField2AmountString);
    inputField2.value = '';

    const inputField3 = document.getElementById('input-field-3');
    const newInputField3AmountString = inputField3.value;
    const newInputField3Amount = parseFloat(newInputField3AmountString);
    inputField3.value = '';

    const totalTeamBudget = document.getElementById('total-team-budget');
    const newTotalTeamBudgetAmountString = totalTeamBudget.innerText;
    const newTotalTeamBudgetAmount = parseFloat(newTotalTeamBudgetAmountString);

    const playerBudget = document.getElementById('total-budget');
    const PlayerBudgetString = playerBudget.innerText;
    const newPlayerBudget = parseFloat(PlayerBudgetString);


    const newTotalTeamBudget = newTotalTeamBudgetAmount + newPlayerBudget + newInputField2Amount + newInputField3Amount; 
    totalTeamBudget.innerText = newTotalTeamBudget; 
    

})

