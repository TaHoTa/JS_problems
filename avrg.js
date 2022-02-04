let marks = [4, 4, 4, 4, 4, 4, 4, 5];

let sum = 0;
let element = 0;
function getAvrg(a) {
    for (i = 0; i < a.length; i++) {

        element = a[i];
        sum = sum + element
        // console.log(sum);
    }
    return sum / a.length;
}

console.log(getAvrg(marks));