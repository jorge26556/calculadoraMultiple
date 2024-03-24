function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill').value);
    var tipPercentage = parseFloat(document.getElementById('tip').value);
  
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      alert('Por favor, ingresa un valor válido para la cuenta y el porcentaje de propina.');
      return;
    }
  
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
  
    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
  }
  
  function calculatePerPerson() {
    var totalBill = parseFloat(document.getElementById('totalBill').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);
  
    if (isNaN(totalBill) || isNaN(numPeople) || totalBill <= 0 || numPeople <= 0) {
      alert('Por favor, ingresa un valor válido para el total de la cuenta y el número de personas.');
      return;
    }
  
    var perPersonAmount = totalBill / numPeople;
    document.getElementById('perPersonAmount').textContent = perPersonAmount.toFixed(2);
  }
  document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('change', toggleDarkMode);
  
    // Al cargar la página, comprobar el estado del modo nocturno
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    modeToggle.checked = isDarkMode;
    if (isDarkMode) {
      enableDarkMode();
    }
  });
  
  function toggleDarkMode() {
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
  
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  }
  
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
  
  