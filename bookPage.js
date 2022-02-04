const book1Qty = 5;
const book2Qty = 10;
const book3Qty = 10;

function pageRequirements(a, b, c) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;

    return (book1Page * a + book2Page * b + book3Page * c);

}

console.log(pageRequirements(book1Qty, book2Qty, book3Qty));