// 一个完全二叉树数组
const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

// 中序遍历二叉树
const traverse = (array, fn) => {
	if (!array || !array.length) return
	let current = 0
	let before = 0

	while (true) {
		let left = 2 * current + 1
		let right = 2 * current + 2

		if (array[left] !== undefined && before !== left && before !== right) {
			current = left
			continue
		}

		if (array[left] === undefined || before === left) {
			fn(array[current])
		}

		if (array[right] !== undefined && before !== right) {
			current = right
			continue
		}
		if (current === 0) break
		before = current
		current = Math.floor((current - 1) / 2)
	}

}

// 运行测试
traverse(array, (item)=>console.log(item))
// H D I B J E A F C G