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