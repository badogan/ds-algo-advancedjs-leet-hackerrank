// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
  return false;
};

let nums = [2, 7, 11];
let target = 18;
// console.log(twoSum(nums, target));

const threeSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums.includes(target - nums[i] - nums[j])) {
        return [i, j, nums.indexOf(target - nums[i] - nums[j])];
      }
    }
  }
};

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8];
let target2 = 15;
// console.log(threeSum(nums2,target2))

// Given an array nums of integers, return how many of them contain an even number of digits.
// * @param {number[]} nums
// * @return {number}
// */
var findNumbers = function(nums) {
  let result = 0;
  nums.map(num => {
    if (num.toString().length % 2 == 0) {
      result += 1;
    }
  });
  return result;
};
let nums50 = [12, 345, 2, 6, 7896];

// console.log(findNumbers(nums50))
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
var addDigits = function(num) {
  const reducer = (sum, num) => sum + num;
  let operation = num
    .toString()
    .split("")
    .map(item => parseInt(item))
    .reduce(reducer);
  // console.log(operation)
  // debugger
  if (operation <= 9) {
    return operation;
  } else {
    return addDigits(operation);
  }
};

const addDigits2 = function(num) {
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((sum, num) => sum + parseInt(num), 0);
  }
  return num;
};

let input = 38;
// console.log(addDigits2(input));

var isHappy = function(n) {
  let counter = 0;
  while (counter < 100 && n != 1) {
    counter += 1;
    n = n
      .toString()
      .split("")
      .reduce((sum, num) => sum + parseInt(num) * parseInt(num), 0);
  }
  if (counter < 100) {
    return true;
  } else {
    return false;
  }
};

let testNum = 19;
// console.log(isHappy(testNum))

function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

var isUgly4 = function(num) {
  if (num === 1) {
    return true;
  }
  let arr = [...new Set(primeFactors(num))];
  if (
    (arr.length === 1 && arr[0] === 2) ||
    (arr.length === 2 && arr[0] === 2 && arr[1] === 3) ||
    (arr.length === 3 && arr[0] === 2 && arr[1] === 3 && arr[2] === 5)
  ) {
    return true;
  } else {
    return false;
  }
};

const isUgly = num => {
  for (const p of [2, 3, 5]) {
    while (num && num % p == 0) {
      num /= p;
    }
  }
  return num == 1;
};

let arr1 = [1, 2, 4, 7, 2, 3, 4, 9, 10, 2, 3];
const test = [...new Set(arr1)].sort((a, b) => (a > b ? 1 : -1));
// console.log(test)

var moveZeroes = function(nums) {
  let arrLength = nums.length;
  for (let i = 0; i < arrLength; i++) {
    console.log(`nums[${i}]: `, nums[i]);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
      arrLength -= 1;
    }
  }
  return nums;
};

let moveZerosInput = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
// console.log(moveZeroes(moveZerosInput))

const topKFrequent = function(nums, k) {
  let hashedNums = covertToHash(nums);
  //   console.log(hashedNums);
  let valuesSorted = Object.values(hashedNums).sort((a, b) => (a > b ? -1 : 1));
  //   console.log(valuesSorted);
  let targetValues = valuesSorted.slice(0, k);
  let result = [];
  //   console.log("inside for: ", valuesSorted[i]);
  //   console.log("inside for: ", hashedNums[valuesSorted[i]]);
  Object.keys(hashedNums).map(key => {
    if (targetValues.includes(hashedNums[key])) {
      result.push(key);
    }
  });
  return result;
};

const covertToHash = nums => {
  let hash = {};
  nums.forEach(num => {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  });
  return hash;
};
let InputKFrequent = [-1, -1];
let k = 1;
// Output: [1,2]
// console.log(topKFrequent(InputKFrequent, k));

const findKthLargest = function(nums, k) {
  return nums.sort((a, b) => (a > b ? -1 : 1))[k - 1];
};

let input203 = [3, 2, 1, 5, 6, 4];
let k204 = 2;
// Output: 5
// console.log(findKthLargest(input203, k204));

function validMountainArray(arr) {
  const arrLength = arr.length;
  if (arr.length <= 2 || arr[1] < arr[0]) {
    return false;
  }
  let i = 1;
  let peak = true;
  while (arr[i] > arr[i - 1] && i < arrLength) {
    i += 1;
  }
  if (i - 1 === arr.length - 1) {
    peak = false;
  }
  while (arr[i] < arr[i - 1] && i < arrLength) {
    i += 1;
  }
  return i === arr.length && peak;
}

let validMountainArrTest1 = [2, 0, 2];
let validMountainArrTest2 = [0, 1, 3, 2, 1, 0];
let validMountainArrTest3 = [3, 5, 5];
// Output: false
// console.log(validMountainArray(validMountainArrTest3));

var subsetsWithDup = function(arr) {
  //there will be sets with 0,1,2,..n elements
  let maxLength = arr.length;
  let originalArr = [...arr];
  let temp;
  let solution = [];
  for (let head = 0; head < maxLength + 1; head++) {
    for (let j = 1; j < maxLength - head + 1; j++) {
      temp = [...originalArr];
      solution.push(temp.slice(head, head + j));
    }
  }
  solution.push([]);
  return [...new Set(solution)];
  //   return solution
  // each set will not have any duplicates
};

let InputForSubSetsWithDup1 = [1, 2, 3, 4];
// console.log(subsetsWithDup(InputForSubSetsWithDup1));

const permute = nums => {
  if (nums.length < 1) {
    return [[]];
  } else if (nums.length == 1) {
    return [[nums[0]]];
  }

  let solution = [];

  for (let i = 0; i < nums.length; i++) {
    let numsCopy = [...nums];
    numsCopy.splice(i, 1);
    let rtnVal = permute(numsCopy);
    for (let j = 0; j < rtnVal.length; j++) {
      solution.push([nums[i], ...rtnVal[j]]);
    }
  }
  return solution;
};

let permuteInput = [1, 2, 3];
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ];
// console.log(permute(permuteInput));

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.wordList = [];
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.wordList.push(word);
  //   return true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.wordList.includes(word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let result = this.wordList.filter(item => item.startsWith(prefix));
  return result.length !== 0;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// let objTrie = new Trie();
// objTrie.insert("apple");
// console.log(objTrie.search("apple"));
// console.log(objTrie.search("app"));
// console.log(objTrie.startsWith("app"));
// objTrie.insert("app");
// console.log(objTrie.search("app"));
const replaceWords = function(dict, sentence) {
  //convert the sentence to an array
  let sentenceArr = sentence.split(" ");
  //for each word in sentence, find out if any root in dictionary exist. if exist replace it with the root
  let resultArr = [];
  let currentRoot;
  sentenceArr.map((word, index) => {
    currentRoot = checkWordInDict(dict, word);
    if (currentRoot.length > 0) {
      resultArr[index] = currentRoot;
    } else {
      resultArr[index] = word;
    }
  });
  return resultArr.join(" ");
};

const checkWordInDict = function(dict, word) {
  let rootsArr = dict.filter(
    dictWord => word.slice(0, dictWord.length) === dictWord
  );
  if (rootsArr.length <= 1) {
    return rootsArr;
  } else {
    return rootsArr.sort((a, b) => (a.length > b.length ? 1 : -1))[0];
  }
};

let InputDict = ["cat", "pbat", "rat", "batte"];
let InputSentence = "the cattle was rattled by the battery";
// Output: "the cat was rat by the bat"
// console.log(replaceWords(InputDict, InputSentence));

const isPalindrome = function(word) {
  console.log(
    word
      .split("")
      .reverse()
      .join("")
  );
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
};

let palindromeTest1 = "madam";
let palindromeTest2 = "nurses run";
// console.log(isPalindrome(palindromeTest1))
// console.log(isPalindrome(palindromeTest2))

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(numsArr) {
  let arrLength = numsArr.length;
  let previousValue = numsArr[0];
  for (let i = 1; i < arrLength; i++) {
    if (numsArr[i] === previousValue) {
      numsArr.splice(i, 1);
      i -= 1;
      arrLength = numsArr.length;
    }
    previousValue = numsArr[i];
  }
  return numsArr.length;
};

let removeDuplicatesTestArr2 = [1, 1, 2];
let removeDuplicatesTestArr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(removeDuplicatesTestArr1));
// console.log(removeDuplicates(removeDuplicatesTestArr2));

var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};
let maxProfitTestCase1 = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(maxProfitTestCase1));

var rotate = function(numsArr, k) {
  for (let i = 0; i < k; i++) {
    numsArr.unshift(numsArr.pop());
  }
  return numsArr;
};
let rotateNumsTestCase1 = [1, 2, 3, 4, 5, 6, 7];
let rotateNumsK = 3;
// console.log(rotate(rotateNumsTestCase1, rotateNumsK));

const containsDuplicate = nums => nums.length !== [...new Set(nums)].length;

let containsDuplicateTest1 = [1, 2, 3, 1];
let containsDuplicateTest2 = [1, 2, 3, 4];
// console.log(containsDuplicate(containsDuplicateTest1))
// console.log(containsDuplicate(containsDuplicateTest2))

const singleNumber = function(numsArr) {
  let targetValue;
  while (numsArr.length !== 0) {
    targetValue = numsArr.shift();
    if (numsArr.includes(targetValue)) {
      numsArr.splice(numsArr.indexOf(targetValue), 1);
    } else {
      return targetValue;
    }
  }
  return false;
};
let singleNumberTest1 = [2, 2, 1];
let singleNumberTest2 = [7, 7, 4, 4, 1, 6, 2, 1, 2];
// console.log(singleNumber(singleNumberTest1))
// console.log(singleNumber(singleNumberTest2))

const intersect2 = function(nums1Arr, nums2Arr) {
  let sorted1, sorted2;
  let intersectionArr = [];
  let j;

  if (nums1Arr.length >= nums2Arr.length) {
    sorted1 = nums1Arr.sort((a, b) => (a > b ? -1 : 1));
    sorted2 = nums2Arr.sort((a, b) => (a > b ? -1 : 1));
  } else {
    sorted2 = nums1Arr.sort((a, b) => (a > b ? -1 : 1));
    sorted1 = nums2Arr.sort((a, b) => (a > b ? -1 : 1));
  }

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted2.includes(sorted1[i])) {
      j = sorted2.indexOf(sorted1[i]);
      while (sorted1[i] === sorted2[j]) {
        intersectionArr.push(sorted1[i]);
        i += 1;
        j += 1;
      }
      return intersectionArr;
    }
  }
};

const intersect = function(nums1Arr, nums2Arr) {
  let intersectionArr = [];
  //assume nums1Arr is longer
  if (nums1Arr.length >= nums2Arr.length) {
    for (let i = 0; i < nums2Arr.length; i++) {
      if (nums1Arr.includes(nums2Arr[i])) {
        intersectionArr.push(nums2Arr[i]);
        let targetIndexToRemove = nums1Arr.indexOf(nums2Arr[i]);
        nums1Arr.splice(targetIndexToRemove, 1);
      }
    }
  } else {
    for (let i = 0; i < nums1Arr.length; i++) {
      if (nums2Arr.includes(nums1Arr[i])) {
        intersectionArr.push(nums1Arr[i]);
        let targetIndexToRemove = nums2Arr.indexOf(nums1Arr[i]);
        nums2Arr.splice(targetIndexToRemove, 1);
      }
    }
  }
  return intersectionArr;
};

let intersectTest1 = [1, 2];
let intersectTest2 = [1, 1];
// console.log(intersect(intersectTest1, intersectTest2));

const plusOneHelper = digits => {
  return (parseInt(digits.reduce((sum, num) => sum + num, "")) + 1)
    .toString()
    .split("")
    .map(s => parseInt(s));
};

const plusOne = digits => {
  let solution = [];
  let carryOver = 1;
  for (let i = digits.length - 1; i > -1; i--) {
    if (i === digits.length - 1 || carryOver === 1) {
      if (carryOver + digits[i] <= 9) {
        solution.unshift(carryOver + digits[i]);
        carryOver = 0;
      } else {
        solution.unshift(0);
        carryOver = 1;
      }
    } else {
      solution.unshift(digits[i]);
    }
  }
  if (carryOver === 1) {
    solution.unshift(1);
  }
  return solution;
};

let plusOneInput1 = [1, 2, 3];
let plusOneInput2 = [9];
let plusOneInput3 = [9, 9, 9];
let plusOneInput4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 9, 9];
let plusOneInput5 = [8, 9, 9, 9];
// console.log(plusOne(plusOneInput1));
// console.log(plusOne(plusOneInput2));
// console.log(plusOne(plusOneInput3));
// console.log(plusOne(plusOneInput4));
// console.log(plusOne(plusOneInput5));

const twoSumA = (nums, target) => {
  for (const num of nums) {
    console.log(num);
    if (nums.includes(target - num)) {
      if (num === target - num) {
        if (nums.filter(n => n === num).length % 2 === 0) {
          const first = nums.indexOf(num);
          let second;
          for (let i = first + 1; i < nums.length; i++) {
            if (num === nums[i]) {
              second = i;
            }
          }
          return [first, second];
        }
      } else {
        return [nums.indexOf(num), nums.indexOf(target - num)];
      }
    }
  }
  return false;
};

let twoSumsTest1 = [3, 3];
let twoSumsTarget1 = 6;
// console.log(twoSumA(twoSumsTest1, twoSumsTarget1));

const checkRow = rowArr => {
  let hash = {};
  for (let i = 0; i < rowArr.length; i++) {
    if (hash[rowArr[i]]) {
      if (rowArr[i] !== ".") {
        return false;
      } else {
        hash[rowArr[i]] += 1;
      }
    } else {
      hash[rowArr[i]] = 1;
    }
  }
  for (const key of Object.keys(hash)) {
    if (hash[key] > 1 && key !== ".") {
      return false;
    }
  }
  return true;
};

const isValidSudoku = function(board) {
  for (const row of board) {
    if (!checkRow(row)) {
      return false;
    }
  }

  let currentTarget = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      currentTarget.push(board[j][i]);
    }
    if (!checkRow(currentTarget)) {
      return false;
    }
    currentTarget = [];
  }
  currentTarget = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      for (let k = i; k < i + 3; k++) {
        for (let t = j; t < j + 3; t++) {
          currentTarget.push(board[t][k]);
        }
      }
      if (!checkRow(currentTarget)) {
        return false;
      }
      currentTarget = [];
    }
  }
  return true;
};
let isValidSudokuTest1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", "5", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// Output: true
// console.log(isValidSudoku(isValidSudokuTest1));

const reverse = function(num) {
  if (num === 0) {
    return num;
  }
  while (num % 10 === 0) {
    num = num / 10;
  }

  let result =
    Math.sign(num) *
    parseInt(
      Math.abs(num)
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  return result <= 0x7fffffff && result >= -0x80000000 ? result : 0;
};

let reverseTest1 = 123;
let reverseTest2 = -123;
let reverseTest3 = 120;
// console.log(reverse(reverseTest1));
// console.log(reverse(reverseTest2));
// console.log(reverse(reverseTest3));

const firstUniqChar = function(arr) {
  if (arr.length === 1) {
    return 0;
  }
  let indicator = true;
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      continue;
    } else {
      hash[arr[i]] = 1;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (indicator) {
        if (arr[i] === arr[j]) {
          indicator = false;
        }
      }
    }
    if (indicator && hash[arr[i]] !== null) {
      return i;
    }
    indicator = true;
  }
  return -1;
};

let firstUniqCharTest1 = "leetcode";
// return 0.
let firstUniqCharTest2 = "loveleetcode";
// return 2.
let firstUniqCharTest3 = "cc";
// return -1.
let firstUniqCharTest4 = "dddccdbba";
// 8
// console.log(firstUniqChar(firstUniqCharTest1));
// console.log(firstUniqChar(firstUniqCharTest2));
// console.log(firstUniqChar(firstUniqCharTest3));
// console.log(firstUniqChar(firstUniqCharTest4));

const isAnagram = function(firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) {
    return false;
  }
  let targetIndex;
  let firstStrArr = firstStr.split("");
  let secondStrArr = secondStr.split("");
  console.log(firstStr);
  console.log(secondStr);
  for (let i = 0; i < firstStrArr.length; i++) {
    if (secondStrArr.includes(firstStr[i])) {
      targetIndex = secondStrArr.indexOf(firstStrArr[i]);
      secondStrArr.splice(targetIndex, 1);
    } else {
      console.log(firstStr);
      console.log(secondStr);
      return false;
    }
  }
  console.log(firstStr);
  console.log(secondStr);
  return true;
};

let isAnagramS1 = "anagram";
let isAnagramS2 = "rat";
let isAnagramS3 = "aacc";
let isAnalgramK1 = "nagaram";
let isAnalgramK2 = "car";
let isAnalgramK3 = "ccac";
// Output: true
// console.log(isAnagram(isAnagramS1, isAnalgramK1));
// console.log(isAnagram(isAnagramS2, isAnalgramK2));
// console.log(isAnagram(isAnagramS3, isAnalgramK3));

const anyCommon = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true;
    }
  }
  return false;
};

const isThereAPair = (arr, targetValue) => {
  let keepTrack = {};
  keepTrack[arr[0]] = 1;
  for (let i = 1; i < arr.length; i++) {
    //check if the targetValue-curentValue is in the keepTrack hash
    if (keepTrack[targetValue - arr[i]]) {
      // if yes return true
      return true;
    } else {
      //iterate thru the array and add complement to the keepTrack hash
      keepTrack[targetValue - arr[i]] = 1;
    }
  }
  // if you reach to the end of the array and still no - return false
  return false;
};

let isThereAPairTestCase1 = [1, 2, 3, 5, 6];
let isThereAPairTargetValue1 = 22;
//true
// console.log(isThereAPair(isThereAPairTestCase1, isThereAPairTargetValue1));

class Bottle {
  constructor() {
    this.length = 0;
    this.data = [];
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    const lastItem = this.data[this.length - 1];
    delete this.data[this];
  }
}

//input: string
//input edge cases
//limitations/priorities: time complexity?
//primitive or JS-specific
//output: string

function reverseThisString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not good";
  }
  return str
    .split("")
    .reverse()
    .join("");
}
// console.log(reverseThisString('Basriiii 3   4  5'))
// console.log(reverseThisString('B'))
// console.log(reverseThisString(7))
// console.log(reverseThisString())

function arrAyCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  return true;
}

function mergeSort(ar1, ar2) {
  //inputs are arrays of integers? real numbers?
  //inputs - are they really sorted? yes
  //input checks/edge cases - empty, includes arrays within?
  //output merged array - a new array or a modify one of them? space complexity?
  if (ar2.length === 0) {
    return ar1;
  }
  if (ar1.length === 0) {
    return ar2;
  }
  if (!arrAyCheck(ar1) || !arrAyCheck(ar1)) {
    console.log("one of the arrays is not as expected");
    return false;
  }
  let resultsArr = [];
  // later: should we consider iterating thru the shorter length array?
  let arr1 = ar1.sort((a, b) => (a > b ? 1 : -1));
  let arr2 = ar2.sort((a, b) => (a > b ? 1 : -1));
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      resultsArr.push(arr1.shift());
    } else if (arr2[0] < arr1[0]) {
      resultsArr.push(arr2.shift());
    } else {
      resultsArr.push(arr2.shift());
      arr1.shift();
    }
  }
  resultsArr = resultsArr.concat(arr1);
  resultsArr = resultsArr.concat(arr2);
  return resultsArr;
}
let mergeSortTestArr1 = [8];
let mergeSortTestArr2 = [9, "p"];
// console.log(mergeSort(mergeSortTestArr1, mergeSortTestArr2));

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let current = this.head;
    let next = this.head.next;
    this.head.next = null;
    this.tail = this.head;
    while (next) {
      let temp = next.next;
      next.next = current;
      current = next;
      next = temp;
    }
    this.head = current;
    return this;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    // return this;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    let currentTail = this.head.next;
    let previous = null;
    for (let i = 1; i <= index - 1; i++) {
      previous = currentTail;
      currentTail = currentTail.next;
    }
    previous.next = newNode;
    newNode.next = currentTail;
    return this;
  }
  remove(index) {
    if (index >= this.length || index < 0) {
      return;
    }
    let currentTail = this.head.next;
    let previous = null;
    for (let i = 1; i <= index - 1; i++) {
      previous = currentTail;
      currentTail = currentTail.next;
    }
    previous.next = currentTail.next;
    this.length -= 1;
    return this;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

// const myLinkedList2 = new LinkedList(2);
// myLinkedList2.append(3);
// myLinkedList2.append(17);
// myLinkedList2.prepend(1);
// myLinkedList2.prepend(100);
// myLinkedList2.insert(200, 99);
// // myLinkedList2.printList();
// myLinkedList2.remove(3);
// myLinkedList2.remove(300);
// myLinkedList2.remove(-8);
// myLinkedList2.printList();
// myLinkedList2.reverse();
// myLinkedList2.printList();

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // this.head = {
    //   value: value,
    //   next: null,
    //   prev: null
    // };
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null,
    //   prev: null
    // };
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    // return this;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    let currentTail = this.head.next;
    let previous = null;
    for (let i = 1; i <= index - 1; i++) {
      previous = currentTail;
      currentTail = currentTail.next;
    }
    newNode.prev = previous;
    previous.next = newNode;
    newNode.next = currentTail;
    return this;
  }
  remove(index) {
    if (index >= this.length || index < 0) {
      return;
    }
    let currentTail = this.head.next;
    let previous = null;
    for (let i = 1; i <= index - 1; i++) {
      previous = currentTail;
      currentTail = currentTail.next;
    }
    previous.next = currentTail.next;
    this.length -= 1;
    return this;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

// const myDoublyLinkedList = new DoublyLinkedList(2);
// myDoublyLinkedList.append(3)
// myDoublyLinkedList.append(4)
// myDoublyLinkedList.printList()
// myDoublyLinkedList.prepend(1)
// myDoublyLinkedList.printList()
// myDoublyLinkedList.insert(200, 99);
// myDoublyLinkedList.printList()
// myDoublyLinkedList.insert(2, 999);
// myDoublyLinkedList.printList()
// myDoublyLinkedList.remove(300)
// myDoublyLinkedList.printList()
// myDoublyLinkedList.remove(-6)
// myDoublyLinkedList.printList()
// myDoublyLinkedList.remove(3)
// myDoublyLinkedList.printList()

class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node2(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    const topToGetRidOf = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return topToGetRidOf;
  }
  //isEmpty
}

// const myStack = new Stack();
// myStack.push("a");
// myStack.push("b");
// myStack.push("c");
// console.log(myStack);
// console.log("last item poped:", myStack.pop());
// console.log(myStack);

class StackWithArrays {
  constructor() {
    this.holdingStack = [];
  }
  peek() {
    return this.holdingStack[-1];
  }
  push(value) {
    this.holdingStack.push(value);
    return this;
  }
  pop() {
    const topToGetRidOf = this.holdingStack.pop();
    return topToGetRidOf;
  }
  //isEmpty
}

// const myStack2 = new StackWithArrays();
// myStack2.push("a");
// myStack2.push("b");
// myStack2.push("c");
// console.log(myStack2);
// console.log("last item poped:", myStack2.pop());
// console.log(myStack2);

class NodeForQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new NodeForQueue(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const nextItemToProcess = this.first;
    const newFirstToBe = this.first.next;
    this.first = newFirstToBe;
    this.length -= 1;
    return nextItemToProcess;
  }
  listQueue() {
    let listArray = [];
    let next = this.first;
    while (next) {
      listArray.push(next.value);
      next = next.next;
    }
    return listArray;
  }
  //isEmpty;
}

// const myQueue = new Queue();
// myQueue.enqueue("Joy");
// console.log(myQueue.peek());
// myQueue.enqueue("Matt");
// console.log(myQueue.peek());
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// myQueue.enqueue("Samir");
// console.log(myQueue.listQueue());
// console.log(myQueue.dequeue());
// console.log(myQueue.listQueue());
// console.log(myQueue.peek());

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

// const myQueue = new CrazyQueue();
// myQueue.peek();
// console.log(myQueue.peek())
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// console.log(myQueue.peek())
// myQueue.peek();
// myQueue.dequeue();
// console.log(myQueue.peek())
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();
// console.log(myQueue.peek())

class NodeA {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class BasriDoublyLinked {
  constructor(value) {
    this.head = new NodeA(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new NodeA(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
  listAll() {
    let result = [];
    let target = this.head;
    while (target) {
      result.push(target.value);
      target = target.next;
    }
    return result;
  }
  isBalanced() {
    if (this.length % 2 !== 0 || this.length < 2) {
      return "NO";
    }
    //get head and tail
    //merge them and see if it has one of the 3 pairs
    let currentMergedValue = `${this.head.value}${this.tail.value}`;
    let counter = parseInt(this.length / 2);
    while (
      (currentMergedValue === "{}" ||
        currentMergedValue === "()" ||
        currentMergedValue === "[]") &&
      counter > 0
    ) {
      counter -= 1;
      this.head = this.head.next;
      this.tail = this.tail.prev;
      currentMergedValue = `${this.head.value}${this.tail.value}`;
    }
    if (counter === 0) {
      return "YES";
    } else {
      return "NO";
    }
    //if yes move head 1 forward, move tail one backward. if midpoint reached return true
    //at any point, if no return false
  }
}

// const myDoublyLinkedMagic = new BasriDoublyLinked("[");
// myDoublyLinkedMagic.append("(");
// myDoublyLinkedMagic.append("{");
// myDoublyLinkedMagic.append("{");
// myDoublyLinkedMagic.append("{");
// myDoublyLinkedMagic.append("{");
// myDoublyLinkedMagic.append("}");
// myDoublyLinkedMagic.append("}");
// myDoublyLinkedMagic.append("}");
// myDoublyLinkedMagic.append("}");
// myDoublyLinkedMagic.append(")");
// myDoublyLinkedMagic.append("]");
// console.log(myDoublyLinkedMagic.listAll());
// console.log(myDoublyLinkedMagic.isBalanced());

class NodeTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new NodeTree(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
  }
  // remove
}

// const tree = new BinarySearchTree();
// tree.insert(9);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(4);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(6);
// tree.insert(20);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(9))
// console.log(tree.lookup(1500))

//     9
//  4     20
//1  6  15  170

class BasriBSTNodeClass {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BasriBSTCodeClass {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new BasriBSTNodeClass(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }
  search(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value === value) {
          return currentNode;
        } else if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            return false;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            return false;
          }
        }
      }
    }
  }
  length() {
    //TBD
  }
}

// const BasriBSTTestTree = new BasriBSTCodeClass();
// BasriBSTTestTree.insert(4);
// BasriBSTTestTree.insert(5);
// BasriBSTTestTree.insert(3);
// BasriBSTTestTree.insert(6);
// BasriBSTTestTree.insert(7);
// console.log(JSON.stringify(traverse(BasriBSTTestTree.root)));
// console.log(BasriBSTTestTree.search(9))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//Edge List
const graphEdgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];
//Adjecent List - index is the node, value is the nodes neighbours
const graphAdjecentList = [[2], [2, 3], [0, 1, 3], [1, 2]];
//Adjacent MAtrix
const graphAdjacentMatrix = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1]
};

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes += 1;
    return this;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");

// myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  answer = number * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  if (number === 1) {
    return number;
  }
  let answer = number;
  for (let i = number - 1; i > 0; i -= 1) {
    answer *= i;
  }
  return answer;
}
// console.log(findFactorialRecursive(5))
// console.log(findFactorialIterative(5))

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //O(n)
  if (n == 0 || n === 1) {
    return n;
  }
  let fibFirst = 0;
  let fibSecond = 1;
  let currentValue;
  for (let i = 2; i <= n; i++) {
    currentValue = fibFirst + fibSecond;
    fibFirst = fibSecond;
    fibSecond = currentValue;
  }
  return currentValue;
}
// console.log(fibonacciIterative(6));
// console.log(fibonacciIterative(0));
// console.log(fibonacciIterative(1));

function fibonacciRecursive(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(3))
// console.log(fibonacciRecursive(4))
// console.log(fibonacciRecursive(6))

function reverseStringWithRecursion(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverseStringWithRecursion(str.slice(0, -1));
}

// console.log(reverseStringWithRecursion("Basri1234567890"));
function solution1(A) {
  //OPTION-1: start with basic solution
  //check if the input is as provided by the assumptions
  if (A.length < 1 || A.length > 100000) {
    return;
  }
  //sort the array and get rid of duplicates
  const AProcessedStep1 = [...new Set(A)].sort((a, b) => (a > b ? 1 : -1));
  //filter our negative values
  const AProcessedStep2 = AProcessedStep1.filter(item => item > 0);
  if (AProcessedStep2.length === 0) {
    return 1;
  }
  //make a linear check to find out the first "missing one"
  const potentialLength = AProcessedStep2.length;
  for (let i = 0; i < potentialLength; i++) {
    //EDGE Case: first value expected is 1 NOT 0
    if (i + 1 !== AProcessedStep2[i]) {
      // return the missing one
      return i + 1;
    }
  }
  //return false if there isn't such a case
  return AProcessedStep2.length + 1;
}

let testArr1 = [1, 2, 3];
// console.log(solution1(testArr1));

function solutionTask1(T) {
  //check if the given integer is in the range
  if (T < 0 || T > 86399 || typeof T !== "number") {
    return false;
  }
  const oneHour = 60 * 60; //in sec
  const oneMinute = 60; //in sec
  //step1: find modulo of the given seconds to find out the remainder - r
  let remainderInSeconds = T % oneHour;
  //step2: reduce the given seconds by r and divide the outcome by (60x60) - this is h
  const hours = (T - remainderInSeconds) / oneHour;
  // repeat step1 & step2 to find m
  let seconds = remainderInSeconds % oneMinute;
  const minutes = (remainderInSeconds - seconds) / oneMinute;
  // remainder will be s - OK
  // format the return value as expected
  return `${hours}h${minutes}m${seconds}s`;
}

// console.log(10 % 6);
// console.log(solutionTask1(7500));
// console.log(solutionTask1(83643));
// console.log(solutionTask1("A"));

function solutionTask2(S, K) {
  // check boundaries [0,500]
  if (K < 0 || K > 500) {
    return;
  }
  //Objective will be to find the day number of the week - Mon:0, Tue:1,Wed:2,Thu:3,Fri:4,Sat:5,Sun:6 and map it back. I can use an array for string values and use the index as modulo comparison
  const weekArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  //check if S is really one of the expected day names
  if (!weekArr.includes(S)) {
    return;
  }

  //Use % 7 to assess the day number of the week. Assess starting day and ending day
  let startingDayIndex = weekArr.indexOf(S);
  let endingDayIndex = (K + startingDayIndex) % 7;
  //Use the array to assess the day name
  // return it
  return weekArr[endingDayIndex];
}

// console.log(solutionTask2("Wed", 2));
// console.log(solutionTask2("Sat", 23));
// console.log(solutionTask2("Sata", 23));
// console.log(solutionTask2("Sat", 2300));

function solutionTask3(X, Y, A) {
  var N = A.length;
  var result = -1;
  var nX = 0;
  var nY = 0;
  for (var i = 0; i < N; i++) {
    if (A[i] == X) nX += 1;
    //else if w/o else did not make sense. I "converted" it to a proper if statement by removing the word else
    if (A[i] == Y) nY += 1;
    //Code was not handling the case when neither X nor Y existed in the array. Now it does.
    if (nX == nY && nX != 0 && nY != 0) result = i;
  }
  return result;
}

// console.log(solutionTask3(7, 42, [6, 42, 11, 7, 1, 42]) === 4);
// console.log(solutionTask3(6, 13, [13, 13, 1, 6]) === -1);
// console.log(solutionTask3(100, 63, [100, 63, 1, 6, 2, 13]) === 5);
// console.log(solutionTask3(100, 63, [100, 63, 1, 6, 2, 13, 100]) === 5);
// console.log(solutionTask3(100, 63, [100, 63, 1, 6, 2, 13, 0, 5, 9, 10, 100]) === 9);
// console.log(solutionTask3(10, 3, [100, 63, 1, 6, 2, 13]) === -1);

let mondayArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// mondayArr.splice(4, 1);
// mondayArr.splice(4, 0, "value");
// console.log(mondayArr);

function searchInASortedArray(arr, value) {
  if (arr[0] > value || arr[arr.length - 1] < value) {
    return false;
  }
  let midIndex = Math.floor(arr.length / 2);
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (arr[midIndex] !== value && firstIndex < lastIndex) {
    if (value < arr[midIndex]) {
      lastIndex = midIndex - 1;
    } else if (value > midIndex) {
      firstIndex = midIndex + 1;
    }
    midIndex = Math.floor((lastIndex + firstIndex) / 2);
  }
  return arr[midIndex] !== value ? false : midIndex;
}

// console.log(searchInASortedArray(mondayArr, -5));
// console.log(searchInASortedArray(mondayArr, 55));
// console.log(searchInASortedArray(mondayArr, 6.5));
// console.log(searchInASortedArray(mondayArr, 6));
