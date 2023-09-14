// Define basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  // Define increment and decrement functions
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }  

function makeInt(string) {
    return parseInt(string, 10);
  }
  
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }

  