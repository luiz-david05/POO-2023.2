const formatarArrayComDashes = (arr) => {
    let str = "";
    arr.forEach((num, index) => {
        if (index == arr.length - 1) {
            str += num;
        }
        else {
            str += num + "-";
        }
    });
    return str;
};
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(formatarArrayComDashes(numeros)); // 1-2-3-4-5-6-7-8-9
