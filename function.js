// common function start
function getElementById(elemntId) {
    const amount = document.getElementById(elemntId);
    const amountString = amount.value;
    const total = parseInt(amountString);
    return total;
}
// common function end

const list = document.getElementById('player-list');

let placeOl = document.getElementById('player-list');

document.getElementById('btn-mbappe').addEventListener('click', function () {
    const name = document.getElementById('player-1');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
    
})
document.getElementById('btn-messi').addEventListener('click', function () {
    const name = document.getElementById('player-2');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    const name = document.getElementById('player-3');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
})
document.getElementById('btn-mosalah').addEventListener('click', function () {
    const name = document.getElementById('player-4');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
})
document.getElementById('btn-neymar').addEventListener('click', function () {
    const name = document.getElementById('player-5');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
})
document.getElementById('btn-suarez').addEventListener('click', function () {
    const name = document.getElementById('player-6');
    if (list.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = name.innerText;
        placeOl.appendChild(li);
    }
    else {
        alert('No more player selection allowed!');
    }
})



// Budget Calculation
document.getElementById('btn-budget').addEventListener('click', function(){
    const allPlayers = list.children.length;
    const inputField = document.getElementById('input-field');
    const newInputFieldAmountString = inputField.value;
    const newInputFieldAmount = parseFloat(newInputFieldAmountString);

    inputField.value = '';

    const totalBudgetElement = document.getElementById('total-budget');
    const previousTotalBudgetString = totalBudgetElement.innerText;
    const previousTotalBudget = parseFloat(previousTotalBudgetString);

    const newTotalBudget = previousTotalBudget + (newInputFieldAmount * allPlayers);
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

