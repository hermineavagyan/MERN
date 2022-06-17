//brute Force approach
const maxArea = function (array) {
    let area = 0
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const height = Math.min(array[i], array[j])
            const width = j - i
            area = Math.max(area, height * width)
        }

    }
    return area

}

const maxAreaOptimized = function (array) {
    let area = 0;
    let i = 0
    let j = array.length - 1
    while (i < j) {
        const height = Math.min(array[i], array[j])
        const width = j - i
        area = Math.max(area, height * width)
        if (array[i] < array[j]) {
            i++
        } else {
            j--
        }
    }
    return area
}
a = [3, 7, 5, 6, 8, 4]
b = [9, 1, 2, 4, 10]
console.log(maxAreaOptimized(a))
console.log(maxAreaOptimized(b))