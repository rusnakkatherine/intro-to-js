var str1 = 'Hello World!';
console.log(str1);

var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!')[0]);

// charAt
console.log(str1.charAt(0));
// returns value at index 0
console.log(str1.charAt(str1.length - 1));

// substring
console.log(str1.substring(0));
console.log(str1.substring(0,5));
console.log(6, str1.length-1);

// substr
console.log(str1.substr(0));
console.log(str1.substr(0,5));
console.log(str1.substr(0, 6));
console.log(str1.substr(6, str1.length-1));

// text transform to uppercase
console.log(str1.toUpperCase());
// to lowercase
console.log(str1.toLowerCase());