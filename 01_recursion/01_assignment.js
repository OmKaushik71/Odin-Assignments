function fibs(n) {
  let arr = [];
  if (n < 0) return 'Please enter a positive number';
  else {
    for (let i = 0; i < n; i++) {
      // Sets first two values as '0' and '1'
      if (i < 2) arr.push(i);
      else if (i >= 2) {
        // Adds previous two values.
        arr.push(arr[i - 2] + arr[i - 1]);
      }
    }
  }
  return arr;
}

function fibsRec(n) {
  if (n == 0) return [0];
  else if (n == 1) return [0, 1];
  else if (n > 1)
    // ...fibsRec(n-1) copies all the values from previous iterations.
    // Now we have to add last two values from the previously calculated iteration.
    // Last calculated array is fibsRec(n-1) whose last digit is at index (n-1);
    // Similarly second last digit will be at index (n-2).
    // Hence the sum of these two values will be fibsRec(n-1)[n-2] + fibsRec(n-1)[n-1].
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 1]];
}

console.log(fibsRec(8));
console.log(fibs(8));
