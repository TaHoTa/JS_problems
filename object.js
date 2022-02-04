var mobile = {
    color: 'black',
    price: 33000,
    memory: 128,
    camera: '12mp',
}

console.log(mobile);
console.log(mobile.color);

var comPrice = mobile.price;
console.log(comPrice);

mobile.color = 'Orange';
console.log(mobile.color);

mobile['camera'] = '33mp';
console.log(mobile.camera);
