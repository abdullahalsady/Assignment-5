// Transaction Related Function
function handleButtonClick(inputValueId, targetAmountId, addAmountId, messageTitle) {
    const inputValueElement = document.getElementById(inputValueId);
    const inputValue = parseFloat(inputValueElement.value);
    const currentAmount = parseFloat(document.getElementById(targetAmountId).innerHTML);
  
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Please enter a valid number.");
        inputValueElement.value = '';
        return;
    }
  
    if (inputValue > currentAmount) {
        alert("Not enough money!");
        inputValueElement.value = '';
        return;
    }
  
    const updatedAmount = currentAmount - inputValue;
    document.getElementById(targetAmountId).innerHTML = updatedAmount.toFixed(2);
  
    const addAmountElement = document.getElementById(addAmountId);
    const additionalAmount = parseFloat(addAmountElement.innerHTML);
    addAmountElement.innerHTML = (additionalAmount + inputValue).toFixed(2);
  
    const currentDate = new Date();
    const formattedDate = `Date: ${currentDate.toString()}`;
  
    const messageContainer = document.createElement('div');
    messageContainer.className = 'border p-4 mb-4 rounded-lg bg-[#faf6ee] shadow-sm';
  
    const title = document.createElement('h3');
    title.className = 'text-lg font-bold';
    title.innerText = `${inputValue} Taka is Donated for ${messageTitle}`;
  
    const subtitle = document.createElement('p');
    subtitle.className = 'text-sm text-gray-500';
    subtitle.innerText = formattedDate;
  
    messageContainer.appendChild(title);
    messageContainer.appendChild(subtitle);
  
    document.getElementById('history-container').appendChild(messageContainer);
  
    inputValueElement.value = '';

    // Show the modal after successful donation
    showModal();
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById('donation-modal');
    modal.classList.remove('hidden'); // Make modal visible
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('donation-modal');
    modal.classList.add('hidden'); // Hide modal
}

// Attach event listener to close button
document.getElementById('close-modal').addEventListener('click', closeModal);

// Close modal if user clicks outside of it
window.addEventListener('click', (e) => {
    const modal = document.getElementById('donation-modal');
    if (e.target === modal) {
        closeModal();
    }
});
