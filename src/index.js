// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let m = matrix.slice(); // copy array, so that dont correct array matrix
    let result = [];

    m.forEach((str, index) => {
        if (index % 2) {
            str.reverse();
        }
        str.forEach((val) => result.push(val));
    });

    return result;
};
