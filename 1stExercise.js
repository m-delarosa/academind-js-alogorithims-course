//If we knew it would only supply three elements w ecan make it constant
//O(1)
function sumNumbersConstant(numbers) {
    return numbers[0] + numbers[1] + numbers[2]
}

//O(n), because T = N, Linear Time Complexity
function sumNumbers(numbers) {
    return numbers.reduce((sum, currentValue) => sum + currentValue)
}

console.log("Should reutrn 14", sumNumbers([1, 3, 10])) // Yields 14