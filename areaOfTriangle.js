const first = 6;
const second = 7;
const third = 8;

function area(a, b, c) {
    const s = (a + b + c) / 2;
    const finalArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return finalArea;
}

console.log(area(first, second, third));