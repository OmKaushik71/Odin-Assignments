function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function merge(left, right) {
  let sortedArr = [];
  let a = 0,
    b = 0;
  while (a < left.length && b < right.length) {
    if (left[a] < right[b]) {
      sortedArr.push(left[a]);
      a++;
    } else {
      sortedArr.push(right[b]);
      b++;
    }
  }
  for (; a < left.length; a++) {
    sortedArr.push(left[a]);
  }
  for (; b < right.length; b++) {
    sortedArr.push(right[b]);
  }
  return sortedArr;
}

const arr1 = [2, 4, 1, 66, 23, 6, 3, 54];
const arr2 = [4, 5, 32, -1, 234, 45, 3, 45, 5];
const arr3 = [2];
const arr4 = [];
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));
console.log(mergeSort(arr4));
