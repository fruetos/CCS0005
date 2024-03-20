var balance = 1000; // Initial balance

function transferLoad() {
    var sender = document.getElementById("sender").value;
    var receiver = document.getElementById("receiver").value;
    var amount = parseFloat(document.getElementById("amount").value);

    // Check if sender and receiver are valid phone numbers
    if (!sender || !receiver) {
        document.getElementById("result").innerHTML = "Please enter valid phone numbers.";
        return;
    }

    // Check if amount is valid
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount.";
        return;
    }

    // Check if sender has sufficient balance
    if (balance < amount) {
        document.getElementById("result").innerHTML = "Insufficient balance.";
        return;
    }

    // Deduct amount from balance
    balance -= amount;

    // Update balance and deduction display
    document.getElementById("balanceAmount").innerHTML = balance.toFixed(2);
    document.getElementById("deduction").innerHTML = "Deduction: " + amount.toFixed(2);
    document.getElementById("totalBalance").innerHTML = "Total Balance: " + balance.toFixed(2);

    // Simulate successful transfer
    document.getElementById("result").innerHTML = "Successfully transferred " + amount.toFixed(2) + " load from " + sender + " to " + receiver + ".";

    // Update receiver's amount
    document.getElementById("receiverAmount").innerHTML = "Received: " + amount.toFixed(2);
}