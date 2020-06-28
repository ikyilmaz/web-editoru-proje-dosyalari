const findDuplicate = (nums) => {
    const sortedNums = nums.sort()
    for (let i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] == sortedNums[i-1]) return sortedNums[i];
    }
  
    return -1;
}


console.log("Sonuç --> ", findDuplicate([1, 2, 2, 3]))