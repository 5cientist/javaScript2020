// + - / * %

var num1 = 100;
var num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

var answer = num1 > num2;
console.log(answer);

// d = (L-S)/L * 100
// a + b * c / d *  e
// a + ((b * c )/ d) * e

var sellingPrice = 799;
var listingPrice = 199;

var discountPercentage = ((sellingPrice - listingPrice) / sellingPrice) * 100;
console.log("Discount persentage is : " + discountPercentage);

displayDiscountPersentage = Math.round(discountPercentage);
console.log(displayDiscountPersentage + "% OFF");

var result = listingPrice > sellingPrice ;
console.log(result);
console.log(typeof result);
