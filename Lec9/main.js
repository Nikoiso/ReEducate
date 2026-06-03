// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"
// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა
// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]

// let arr = [1, 2, 3, 4, 5, 6];

// function filterEvenNumbers(arr) {
//   const evenNumbers = arr.filter((arr) => arr % 2 === 0)

//   if (arr.length === 0) return 0

//   return evenNumbers.reduce((a, b) => a + b, 0) / evenNumbers.length
// }

// console.log(filterEvenNumbers(arr))

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში. let = "I love JavaScript"

// let sentence = "I love JavaScript"

// function countwords(str) {
//   return str.split(" ").length;
// }

// console.log(countwords(sentence))

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

// let num = 2

// function trueorFalse(num) {
//   if (num <= 1) {
//     return false
//   }

//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(trueorFalse(num))

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა

// let words = ["dog", "elephant", "cat", "hippopotamus"]

// let longestWord = words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest
// })

// console.log(longestWord)

// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ

// let arr = [3, 5, 3, 2, 5, 5, 3, 5]

// let doubleNum = arr.filter

// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// function numbers(arr) {
//   nums.forEach((num) => {
//     if (num % 2 === 0) {
//       console.log(`${num} Aris Luwi`);
//     } else {
//       console.log(`${num} Aris Kenti`);
//     }
//   });
// }

// numbers(nums);

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

let nums = [10, 2, 33, 5, 7]

function sortedArr(arr){
    arr.sort((a,b) => a-b)

    return nums[0]

}

console.log(sortedArr(nums))