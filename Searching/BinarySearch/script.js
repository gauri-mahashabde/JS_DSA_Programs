/*const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
target = 41;
const array = document.getElementById("1").innerHTML = arr;

 
const binarySearch = (array, target) => {
let startIndex = 0;
let endIndex = array.length - 1;
 while(startIndex <= endIndex) {
let middleIndex = Math.floor((startIndex + endIndex) / 2);
if(target === array[middleIndex]) {
return console.log("Target was found at index " + middleIndex)
};
if(target > array[middleIndex]) {
console.log("Searching the right side of Array")
startIndex = middleIndex + 1;
}
if(target < array[middleIndex]) {
console.log("Searching the left side of array")
endIndex = middleIndex - 1;
}
else {
console.log("Not Found this loop iteration. Looping another iteration.")
}
}
console.log("Target value not found in array");

  }

 

const res = binarySearch(array,target);
const  result = document.getElementById("2").innerHTML = res;
console.log(res );*/

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      // Search the right half
      start = middle + 1;
    } else if (arr[middle] > target) {
      // Search the left half
      end = middle - 1;
    } else if (arr[middle] === target) {
      // Found target
      return middle;
    }
  }

  // Target not found
  return -1;
}
const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
target = 41;

const result = binarySearch(arr, target);
console.log(result);
