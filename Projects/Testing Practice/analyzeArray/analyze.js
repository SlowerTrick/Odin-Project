export function analyze(array) {
    let obj = {avg: 0, min: 0, max: 0, length: 0};

    array.sort((a, b) => a - b);

    let avg = array.reduce((acc, curr) => acc + curr) / array.length;
    if(!Number.isInteger(avg))
        avg = parseFloat(avg.toFixed(2));

    obj.avg = avg;
    obj.min = array[0];
    obj.max = array[array.length - 1];
    obj.length = array.length;

    return obj;
}