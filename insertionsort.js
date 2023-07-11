//Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position.

//syntax code
/*begin selectionSort(list)
  for i = 0 to sizeof(list) - 1    
      
       minIndex = i;
      
       for j = i + 1 to sizeof(list)
          
           if list[j] < list[mid_index]
               minIndex = j;
           end if
      
          swap(list[minIndex], list[i])
      
       end for
 
  end for
end selectionSort*/







function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  } 

