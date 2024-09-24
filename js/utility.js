// Utility function for handling the button click event
function handleButtonClick(inputValueId, targetAmountId, addAmountId, messageTitle) {
    // Get the input value element and its value
    const inputValueElement = document.getElementById(inputValueId);
    const inputValue = parseFloat(inputValueElement.value);
    
    // Get the innerHTML of the target amount and convert it to a floating point number
    const currentAmount = parseFloat(document.getElementById(targetAmountId).innerHTML);
    
    // Check if the input value is a valid number
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Please enter a valid number.");
        inputValueElement.value = '';
        return; // Exit the function if the input is invalid
    }

    // Check if there is enough money for subtraction
    if (inputValue > currentAmount) {
        alert("Not enough money!");
        inputValueElement.value = '';
        return; // Exit the function if there isn't enough money
    }

    // Subtract the input value from the current amount
    const updatedAmount = currentAmount - inputValue;

    // Update the target element with the new value
    document.getElementById(targetAmountId).innerHTML = updatedAmount.toFixed(2); // Use .toFixed(2) for two decimal places
    
    // Add the input value to the add amount element
    const addAmountElement = document.getElementById(addAmountId);
    const additionalAmount = parseFloat(addAmountElement.innerHTML);
    addAmountElement.innerHTML = (additionalAmount + inputValue).toFixed(2);

    // Create and append the donation message to the history section
    const currentDate = new Date();
    const formattedDate = `Date: ${currentDate.toString()}`;

    const messageContainer = document.createElement('div');
    messageContainer.className = 'border p-4 mb-4 rounded-lg bg-[#faf6ee] shadow-md'; // Tailwind classes for styling

    // Create the title and subtitle elements
    const title = document.createElement('h3');
    title.className = 'text-lg font-bold';
    title.innerText = `${inputValue} Taka is Donated for ${messageTitle}`; // Use inputValue for the donation amount

    const subtitle = document.createElement('p');
    subtitle.className = 'text-sm text-gray-500';
    subtitle.innerText = formattedDate;

    // Append title and subtitle to the message container
    messageContainer.appendChild(title);
    messageContainer.appendChild(subtitle);

    // Append the message container to the history section
    document.getElementById('history-container').appendChild(messageContainer);

    // Clear the input field after the operation
    inputValueElement.value = '';
}

// Example usage of the function
document.getElementById("btn1").addEventListener('click', function() {
    handleButtonClick('input1', 'my-amount', 'add-money1', 'Donate for Flood at Noakhali, Bangladesh'); 
});

let container = document.getElementById('history-container');
console.log(container)
