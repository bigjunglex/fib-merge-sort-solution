const mergeSort = (arr) => {

    if (arr.length>1) {
		let mid = Math.floor(arr.length/2),
		left = arr.slice(0,mid),
		right = arr.slice(mid);
		mergeSort(left)
		mergeSort(right)

		let i = j = k = 0
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				arr[k] = left[i]
				i++;
			} else {
				arr[k] = right[j]
				j++
			}
			k++
		}
		while (i < left.length) {
			arr[k] = left[i]
			i++
			k++
		}
		while( j < right.length) {
			arr[k] = right[j]
			j++
			k++
		}
	}
	return arr
} 



const x = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(x))