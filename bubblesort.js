/*Bubble sort is a sorting algorithm that compares adjacent elements and swaps them if they do not follow the desired order. 
This algorithm is stable and follows in-place sorting. 
Easy-to-understand and implement, bubble sort in JavaScript takes O(n^2) time complexity to sort and is not the most optimal sorting algorithm possible.*/
const marks = [65, 78, 35, 99, 87, 45, 39, 39, 56, 32, 2];
const num = [3, 4, 5, 2, 1];
//console.log(document.getElementById("bubble_sort").innerHTML)

document.getElementById("unsorted_array").innerHTML = num;
//document.getElementById("bubble_sort").innerHTML = bubbleSort(marks);
document.getElementById("bubble_sort").innerHTML = bubbleSort(num);
/* console.log(document.getElementById("bubble_sort").innerHTML);
console.log(document.getElementById("unsorted_array").innerHTML);
console.log(marks);
var tagName = "body"; */
//console.log(document.getElementsByTagName(tagName));
//console.log(document.getElementsByTagName("div"));
//console.log(document.getElementsByTagName("h3"));


function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        //console.log("outerloop iteration begin " + i + " array " + arr);
        for (let j = 0; j < (arr.length - 1 - i); j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);

            }
            //console.log("innerloop j " + j + " arr  " + arr);
        }
        //console.log("outerloop iteration end " + i + " array  " + arr);
    }

    return arr;
}

// Bubble sort Implementation using Javascript

function bubbleSort(array){
	
    for(var i = 0; i <= array.length-1; i++){
        // Last i elements are already in place
        for(var j = 0; j < ( array.length - i -1); j++){

            // Comparing two adjacent numbers 
            // and see if first is greater than second
            if(array[j] > array[j+1]){

            // Swap them if the condition is true 
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(array);
}

//optimized solution
