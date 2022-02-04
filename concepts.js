let a = ['aaa', 'bbb', 'ccc', 'ddd', 'aaa', 'bbb', 'ccc', 'ddd'];

a[3] = 'Taz';
a.push('Nazifa');
a.push('Rimi');
a.push('Tarin');
a.push('Fahmida');
for (i = 0; i < a.length; i++) {

    console.log(a[i]);
}


console.log(a.indexOf('Tarin'));
console.log(a.indexOf('Fahmida'));
console.log(a.indexOf('Aroni'));
console.log(a.indexOf('aaa'));