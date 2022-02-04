let marks = [70, 30, 36, 34, 22, 56, 24, 53];

let smallestNumber = marks[0];

function getSmalletNumber(a) {
    for (i = 1; i < a.length; i++) {

        let element = a[i];
        if (smallestNumber > element) {
            smallestNumber = element;
        }
        else {
            smallestNumber = smallestNumber;
        }
    }
    return smallestNumber;
}

console.log(getSmalletNumber(marks));