/*Selection sort is a sorting algorithm. 
This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. 
Initially, the sorted part is empty, and the unsorted part is the entire list.*/
const score = [40, 50, 25, 30, 20];
document.getElementById("unsorted_array2").innerHTML = score;
document.getElementById("selection_sort").innerHTML = selectionSort(score);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("outerloop iteration begin " + i + " array " + arr);
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;

            }
        }
        console.log("min " + min + " i " + i);
        swap(arr, min, i);
        console.log("outerloop iteration end" + i + " array " + arr);
    }
    return arr;
}