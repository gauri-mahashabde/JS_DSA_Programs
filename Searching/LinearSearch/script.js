//linear search

let arr = [8, 92, 45, 6, 89, 90, 40, 55];
let target = 55;

function linearSearch(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr, target);
console.log(result);

for (let j = 0; j <= arr.length - 1; j++) {
  console.log(arr[j]);
}
