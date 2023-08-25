function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = {};
  let result = false;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    const neededValue = target - currentValue;
    if (seen[neededValue]) {
      result = true;
    } else {
      seen[currentValue] = currentValue;
    }
  }
  return result;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  seen {}
  result = false
  for each element in array {
    currentValue = elelemet
    neededvValue = target - currentValue
    if seen has the neededvValue return true
    else add currentValue to seen
  }
  return result
  */

/*
  Add written explanation of your solution here
  cheack weather there is a pair of elements in the array that could add up to the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 4, 2, 0], 3));
}

module.exports = hasTargetSum;
