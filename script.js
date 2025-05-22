function calculateFactorial(method) {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
  
    const number = parseInt(input);
    errorElement.textContent = '';
    resultElement.textContent = '';
  
    if (isNaN(number) || number < 0) {
      errorElement.textContent = 'Please enter a valid positive integer.';
      return;
    }
  
    let result;
    if (method === 'iterative') {
      result = factorialIterative(number);
    } else {
      result = factorialRecursive(number);
    }
  
    resultElement.textContent = `${number}! = ${result} (${method})`;
  }
  
  function factorialIterative(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  // FAQ Toggle
  document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
  