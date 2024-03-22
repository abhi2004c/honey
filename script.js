let totalExpenses = 0;

function addExpense() {
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (description && !isNaN(amount) && amount > 0) {
        totalExpenses += amount;
        const expensesList = document.getElementById("expenses-list");
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerText = `${description}: ₹${amount.toFixed(2)}`;
        expensesList.appendChild(expenseItem);

        document.getElementById("total-expenses").innerText = totalExpenses.toFixed(2);

        // Clear input fields after adding expense
        document.getElementById("expense-description").value = "";
        document.getElementById("expense-amount").value = "";
    } else {
        alert("Please enter valid expense description and amount.");
    }
    if (totalExpenses>50000){
        alert("This month expense is above the safe limit Please reduce it from next month.");
    }
}

