function calculateSum() {
    // Get input numbers from user
    var inputNumbers = document.getElementById('inputNumbers').value;
    // Convert input numbers into an array
    var numbers = inputNumbers.split(',').map(Number);
    // Calculate the sum using a for loop
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    // Display the result in the DOM
    document.getElementById('result').innerText = 'Sum: ' + sum;
  }