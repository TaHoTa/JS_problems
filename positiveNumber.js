const numbers = ['20', '31', '22', '34', '25', '-37', '250', '330', '-210', '380', '-460'];
let b = [];
function posNumber(a) {
    for (i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
            b.push(a[i]);
        }
        else {
            break;
        }
    }
    return b;
}

console.log(posNumber(numbers));