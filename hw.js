// E1
console.log("----------------------------------");
let length = 6;
let width = 4;
let rectangle = length * width;
console.log("The area of the rectangle is:" + rectangle);
console.log("----------------------------------");
// E2let Fahrenheit=0;
// Convert it to celsius and output "NN°F is NN°C."
let Fahrenheit = 45;
let Celcius = (Fahrenheit - 32) / 1.8;
console.log(Fahrenheit + "°F  is " + Celcius + "°C");
// Convert it to fahrenheit and output "NN°C is NN°F"
Celcius = 45;
Fahrenheit = Celcius * 1.8 + 32;
console.log(Celcius + "°C is " + Fahrenheit + "°F");
console.log("----------------------------------");
// E3
let Numbers = [23, 54, 32, 87, 47];
let result = 0;
for (let i = 0; i < Numbers.length; i++) {
  result += Numbers[i];
}
console.log(result);
console.log("----------------------------------");
// E4
let a = [16, 4, 2, 0, 19, 6];
let max = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
console.log(max);
console.log("----------------------------------");
// E4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let b;
    b = arr[i];
    arr[i] = arr[j];
    arr[j] = b;
  }
}
console.log(arr);

console.log("----------------------------------");
// E5
let element = "",
  n = 5;
for (let index = 1; index <= n; index++) {
  for (let index2 = 1; index2 <= index; index2++) {}
  element += "*";
  console.log(element);
}
