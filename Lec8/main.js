// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული




// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]


// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

// let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]
// let NewArry = []

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (Array.isArray(arr[i][j])) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//           NewArry.push(arr[i][j][k])
//         }
//       }
//     }
//   }
// }

// console.log(NewArry)


// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

// let products = [
//     { name:"Phone", price:1200, rating:4.5 },
//     { name:"Laptop", price:2500, rating:4.8 },
//     { name:"Book", price:30, rating:4.9 },
//     { name:"TV", price:800, rating:4.0 }
//   ]

//   let filteredProducts = products.filter ( product => product.price < 1000 && product.rating > 4.5 )

//   console.log(filteredProducts)



// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული



// let sentence = "dog cat dog bird cat dog fish bird"

// let splittedText = sentence.split(" ")

// let groued = splittedText.reduce((tot, curr) => {
//   if (tot[curr]) {
//     tot[curr] += 1
//   } else {
//     tot[curr] = 1
//   }
//   return tot
// }, {})

// console.log(groued)

// let maxCount = 0
// let maxWord = ""

// for(let word in groued){
//     if(groued[word]> maxCount){
//         maxCount = groued[word]
//         maxWord = word
//     }
// }

// console.log(`ყველაზე ხშირად მეორდება ${maxWord} ${maxCount}-ჯერ`)



// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 

// function countLetter(str, letter) {
//   let count = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++
//     }
//   }

//   return count
// }

// console.log(countLetter("hidroeleqtrosadguri","a"))


// 2)დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)

// ვერ გავიგე ეს კარგად.


// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.


// function sumArray(arr1, arr2) {
//   let sum = 0
//   let combinedArray = [...arr1, ...arr2]
//   let uniqueArray = combinedArray.filter((item, index, self) => self.indexOf(item) === index)
//   for (let i = 0; i < uniqueArray.length; i++) {
//     sum += uniqueArray[i]
//   }
//   return sum
// }

// console.log(sumArray([1,2,3,4,5],[6,7,8,9,10]))


//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(0))



// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]

// - 