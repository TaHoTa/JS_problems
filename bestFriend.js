let friends = ['aaa', 'bbb', 'ccc', 'dddd', 'eeeee', 'ffffff', 'ggggggg', 'hh'];
let maxLength = 0;

function largestName(a) {
    for (i = 0; i < a.length; i++) {

        let lengthCh = a[i].length;
        if (maxLength < lengthCh) {
            maxLength = lengthCh;
        }
    }
    return maxLength;
}

console.log(largestName(friends));