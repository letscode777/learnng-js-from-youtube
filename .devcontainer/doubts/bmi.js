const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'please give valid value ';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'please give valid value ';
  } else {
    const ans = (weight / ((height * height) / 10000)).toFixed(2);
  }
  function myfunction(ans) {
    if (ans <= 18.6) {
      resutls.innerHTML = `underweight`;
    }
    if (ans >= 18.6 || ans <= 24.9) {
      resutls.innerHTML = `Normal range`;
    }
    if (ans > 24.9) {
      resutls.innerHTML = `Overweight`;
    }
  }
});
