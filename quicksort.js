const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
const quickSort = (arr, start = 0, end = arr.length) => {
	if (end - start <= 1) return arr
	let pivot = arr[start]
	let indexLeft = start + 1
	let indexRight = end - 1
	while (indexRight - indexLeft > 0) {
		if (arr[indexLeft] < pivot) {
			indexLeft++
		} else {
			swap(arr, indexLeft, indexRight)
			indexRight--
		}
	}
	if (arr[indexLeft] < pivot) {
		swap(arr, start, indexLeft)
	} else {
		swap(arr, start, indexLeft - 1)
	}
	quickSort(arr, start, indexLeft)
	quickSort(arr, indexRight, end)
	return arr
}
console.log(quickSort([1, 2, 9, 4, 10, 20, 12]))
// [1, 2, 4, 9, 10, 12, 20]
console.log(quickSort([11, 2, 39, 24, 1, 2, 9]))
//  [1, 2, 2, 9, 11, 24, 39]
console.log(quickSort([]))
// []
console.log(quickSort([1, 1, 1, 1, 1]))
// [1, 1, 1, 1, 1]