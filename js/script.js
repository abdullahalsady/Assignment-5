document.addEventListener('DOMContentLoaded', () => {
  const donateSection = document.querySelector('.donate-parent');
  const historySection = document.getElementById('history-container');
  const donateBtn = document.getElementById('donation-btn');
  const historyBtn = document.getElementById('history-btn');

  // Function to show history and hide donation sections
  function showHistory() {
    donateSection.classList.add('hidden');  // Hide donation section
    historySection.classList.remove('hidden');  // Show history section
    
    // Button styling: Highlight history button, de-highlight donation button
    donateBtn.classList.remove('bg-[#a6e26b]', 'text-white', 'hover:bg-green-400');
    donateBtn.classList.add('bg-white', 'text-black', 'border', 'border-gray-300', 'hover:bg-gray-100');
    historyBtn.classList.remove('bg-white', 'text-black', 'border', 'border-gray-300', 'hover:bg-gray-100');
    historyBtn.classList.add('bg-[#a6e26b]', 'text-white', 'hover:bg-green-400');
  }

  // Function to show donation and hide history sections
  function showDonations() {
    donateSection.classList.remove('hidden');  // Show donation section
    historySection.classList.add('hidden');  // Hide history section
    
    // Button styling: Highlight donation button, de-highlight history button
    historyBtn.classList.remove('bg-[#a6e26b]', 'text-white', 'hover:bg-green-400');
    historyBtn.classList.add('bg-white', 'text-black', 'border', 'border-gray-300', 'hover:bg-gray-100');
    donateBtn.classList.remove('bg-white', 'text-black', 'border', 'border-gray-300', 'hover:bg-gray-100');
    donateBtn.classList.add('bg-[#a6e26b]', 'text-white', 'hover:bg-green-400');
  }

  // Add event listeners to buttons
  donateBtn.addEventListener('click', showDonations);
  historyBtn.addEventListener('click', showHistory);
});




// Scroll Related Function
window.addEventListener('scroll', function() {
  const headerSection = document.getElementById('header-section');
  const buttonSection = document.getElementById('button-section');

  if (window.scrollY > 0) {
      headerSection.classList.add('bg-[#faf6ee]', 'bg-opacity-90');
      buttonSection.classList.remove('bg-white');
      buttonSection.classList.add('bg-blend-darken')
  } else {
      headerSection.classList.add('bg-[#faf6ee]', 'bg-opacity-80');
      buttonSection.classList.remove('bg-[#faf6ee]', 'bg-opacity-90');
      buttonSection.classList.add( 'bg-blend-darken');
  }
});




document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn1").addEventListener('click', function() {
      handleButtonClick('input1', 'my-amount', 'add-money1', 'Donate for Flood at Noakhali, Bangladesh');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn2").addEventListener('click', function() {
      handleButtonClick('input2', 'my-amount', 'add-money2', 'Donate for Flood Relief in Feni, Bangladesh');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn3").addEventListener('click', function() {
      handleButtonClick('input3', 'my-amount', 'add-money3', 'Aid for Injured in the Quota Movement');
  });
});