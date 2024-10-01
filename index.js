let balance = 1000;

document.getElementById('withdraw-btn').addEventListener('click', withdraw);
document.getElementById('balance-btn').addEventListener('click', checkBalance);
document.getElementById('deposit-btn').addEventListener('click', deposit);

function withdraw() {
    let pin = document.getElementById('pin').value;
    let amount = parseInt(document.getElementById('amount').value);

    if (pin === '1234' && amount <= balance) {
        balance -= amount;
        document.getElementById('output').innerHTML = `Withdrawal successful. New balance: ${balance}`;
    } else {
        document.getElementById('output').innerHTML = 'Invalid PIN or insufficient balance.';
    }
}

function checkBalance() {
    document.getElementById('output').innerHTML = `Your current balance is: ${balance}`;
}

function deposit() {
    let amount = parseInt(document.getElementById('amount').value);
    balance += amount;
    document.getElementById('output').innerHTML = `Deposit successful. New balance: ${balance}`;
}