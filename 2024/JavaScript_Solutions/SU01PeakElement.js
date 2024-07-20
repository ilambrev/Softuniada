function peakElement(numsString) {
    const nums = numsString[0].split(' ').map(Number);

    if (nums.length == 1) {
        return nums[0];
    }

    let peakElement = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < nums.length; i++) {
        if (i == 0 && nums[i] > nums[i + 1] && nums[i] > peakElement) {
            peakElement = nums[i];
        } else if (i == nums.length - 1 && nums[nums.length - 1] > nums[nums.length - 2] && nums[nums.length - 1] > peakElement) {
            peakElement = nums[1];
        } else {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1] && nums[i] > peakElement) {
                peakElement = nums[i];
            }
        }
    }

    return peakElement;
}

// console.log(peakElement(['1 4 2 4 5 6 1']));
// console.log(peakElement(['13 17 12 3 5']));
// console.log(peakElement(['2 3 5 18 7 11 13']));