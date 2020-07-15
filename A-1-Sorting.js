//Only a few items and mostly sorted data: INSERTION SORT
// Educational: BUBBLE SORT
// Educational: SELECTION SORT
// MOSTLY: Worst case scenarios - MERGE SORT - O(nlogN). Space complexity great
// MOSTLY: If you pick good pivot => QUICK SORT
// 
// Non-Comparison Sort: Counting Sort, Radix Sort [Works ONLY with numbers! or a short range]

//#1 - Sort 10 schools around your house by distance:
// Small input. INSERTION SORT. 

//#2 - eBay sorts listings by the current Bid amount:
// Radix or counting sort: NUMBERS and fixed range 

//#3 - Sport scores on ESPN
// QUICK SORT 

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// MERGE SORT

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// INSERTION SORT

//#6 - Temperature Records for the past 50 years in Canada
// Radix or counting sort: NUMBERS and fixed range OR Quick sort

//#7 - Large user name database needs to be sorted. Data is very random.
// MERGE SORT OR QUICK SORT

//#8 - You want to teach sorting for the first time
//BUBBLE and SELECTION SORT

// MERGESORT: Stable


let numbers1 = [1, 2, 3, 6, 7, 8, 1, 5, 8, 9, 10];
// console.log(numbers.sort((a, b) => (a > b ? 0.001 : -1)));

function bubbleSortBasri(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let numbers2 = [1, 2, 3, 6, 7, 8, 1, 5, 8, 9, 10];
// console.log(bubbleSortBasri(numbers2));

function selectionSortBasri(arr) {
  //O(n^2) - there are 2 loops
  //handle edge cases, limitations
  //iterate thru the array i=0 to i<length
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let indexOfCurrentMin = i; //to have a starting point
    for (j = i + 1; j < arrLength; j++) {
      // for each iteration find the minimum in between index i and end of array
      if (arr[j] < arr[indexOfCurrentMin]) {
        indexOfCurrentMin = j;
      }
    }
    // when the end is reached swap that min value with arr[i]
    let currentItem = arr[i];
    arr[i] = arr[indexOfCurrentMin];
    arr[indexOfCurrentMin] = currentItem;
  }
  return arr;
}
let numbers3 = [1, 2, 3, 6, 7, 8, 1, 5, 8, 9, 10];
// console.log(selectionSortBasri(numbers3));

function insertionSortBasri(arr) {
  const arrLength = arr.length;
  //iterate thru the array.
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < 1; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  //in every iteration find out if there is any value smaller than the current value
  return arr;
}
let numbers4 = [1, 2, 3, 6, 7, 8, 1, 5, 8, 9, 10];
// console.log(insertionSortBasri(numbers4));

function mergeSortBasri(arr) {
    //O(nlogN)
  console.log("arr:", arr);
  if (arr.length === 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  return merge(mergeSortBasri(left), mergeSortBasri(right));
}

function merge(left, right) {
  console.log("running - left:", left);
  console.log("running - right:", right);
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)

  let resultFinal = result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
    console.log(resultFinal)
  return resultFinal;
}
let numbers5 = [1, 2, 3, 6, 7, 8, 1, 5, 8, 9, 10];
console.log(mergeSortBasri(numbers5));

//QUICK SORT - "Starts with pivot"
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);