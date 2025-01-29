function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

function combineSafe<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const result = combine([1, 2], [3, 4, 5]);
console.log(result); // Output: [1, 2, 3, 4, 5]

const result2 = combineSafe([1, 2], ["a", "b"]);
console.log(result2); // Output: [1, 2, "a", "b"]

const result3 = combineSafe([true, false], [true]);
console.log(result3); //Output: [true, false, true] 