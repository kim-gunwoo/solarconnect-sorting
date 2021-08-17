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
