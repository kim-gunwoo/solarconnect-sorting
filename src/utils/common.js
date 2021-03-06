export const selectionSort = (nums) => {
  const length = nums.length;
  let minIndex, temp;

  for (let i = 0; i < length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
  return nums;
};

export const reverseSort = (nums) => {
  const length = nums.length - 1;
  const reverse = [];
  for (let i = length; i >= 0; i--) {
    reverse.push(nums[i]);
  }
  return reverse;
};

export const quickSort = (array, isDesc = false) => {
  if (array.length < 2) return array;

  const pivot = array[0];
  const small = [];
  const big = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      small.push(array[i]);
    } else {
      big.push(array[i]);
    }
  }

  if (isDesc) return quickSort(big, true).concat(pivot, quickSort(small, true));
  return quickSort(small).concat(pivot, quickSort(big));
};

const toNumber = (input) => {
  return Number(input);
};

const filterNaN = (item) => {
  return !isNaN(item);
};

export const convertStringToNumberArray = (string) => {
  const convertedArray = string
    .split(",")
    .filter((e) => e !== "")
    .map(toNumber)
    .filter(filterNaN);

  return convertedArray;
};

export const checkExecutionTime = (cb) => {
  const start = performance.now();
  const result = cb();
  const end = performance.now();
  return [result, end - start];
};
