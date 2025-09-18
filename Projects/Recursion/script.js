function fibonacci(num) {
    if(num == 0)
        return 0;
        else if(num <= 1)
            return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function mergeSort(array) {
    // Base case
    if(array.length <= 1) {
        return array;
    }

    // Spliting the halves
    const sorted_array = [];
    const half = Math.ceil(array.length / 2);
    const left_array = mergeSort(array.slice(0, half));
    const right_array = mergeSort(array.slice(half));

    // Sorting the array
    return merge(left_array, right_array);

    // let left_idx = 0;
    // let right_idx = 0;
    // for(let i = 0; i < array.length; i++) {
    //     if(left_idx >= left_array.length && right_idx >= right_array.length) {
    //         break;
    //     }
    //     else if(left_idx >= left_array.length) {
    //         sorted_array.push(right_array[right_idx++]);
    //         continue;
    //     }
    //     else if(right_idx >= right_array.length) {
    //         sorted_array.push(left_array[left_idx++]);
    //         continue;
    //     }

    //     if(left_array[left_idx] < right_array[right_idx]) {
    //         sorted_array.push(left_array[left_idx++]);
    //     }
    //     else if(right_array[right_idx] < left_array[left_idx]) {
    //         sorted_array.push(right_array[right_idx++]);
    //     }
    //     else {
    //         sorted_array.push(right_array[right_idx++]);
    //         sorted_array.push(left_array[left_idx++]);
    //     }
    // }
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(19) + '\n\n');

console.log(mergeSort([5, 4, 1, 6, 2, 8, 10, 0]));
