<<<<<<< HEAD
// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];



// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// function timer(sec){
//     let interval = setInterval(() => {
//         console.log(sec)
//         sec--
//         if(sec < 0){
//             clearInterval(interval)
//         }
//     },1000)
// }

// timer(5)

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// let random = Math.floor(Math.random())

// console.log(random)

// function randomCompare(n){
//     let inteval = setInterval(() => {
//         let random = Math.floor(Math.random() *11)
//     console.log(random)
//     if(n === random){
//         clearInterval(inteval)
//         console.log("გაჩერდა")
//     }
//     },1000)
// }
// randomCompare(10) 


// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function test(n,callback){
//     if(n > 27){
//         callback()
//     }else{
//         console.log("არარის მეტი")
//     }
// }

// function CallbackFn(){
//     console.log("მეტია 27-ზე")
// }

// test(80,CallbackFn)


// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// დღეს ვნახე თუ როგორ უნდა დამწერეა, მაგრამ გადაწერით არ მინდოდა ამიტომაც ისე დავტოვებ.


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];


// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// let grouped = people.reduce((tot,curr) => {
//     let age =curr.age
//     if(age > 10) tot.moreThanTen++
//     if(age<20) tot.lessThankTwenty++
//     return tot
// },{moreThanTen:0,lessThankTwenty:0})

// console.log(grouped)


// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".


// function number(num1, num2, callback){
//     if(num1 > num2){
//         callback("მეტია")
//     }else{
//         callback("ნაკლებია ან ტოლია")
//     }
// }

// number(1,5,console.log)




// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];



// - 
=======
// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად




// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }



// let myPromise = new Promise((res, rej) => {
//     res("resolve");
//   });

// function block(){
//     for(let i = 1 ;i <10000000000;i++){

//     }
//     console.log("ფუნქცია გაეშვა ბოლოს");
//   }
  
//   console.log("one");
//   myPromise.then(res => block());
//   console.log("two")



// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

// let myPromise = new Promise ((res,rej) => {
//     res("Resolved")
// })

// let myPromise2 = new Promise ((res,rej) =>{
//     rej("Rejected")
// })

// myPromise.then ( res => console.log(res))

// myPromise2.catch ( rej => console.log(rej))

// Promise.allSettled([myPromise, myPromise2]).then(result => {
//     console.log(result)
// })

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// let myPromise = new Promise(( res,rej ) => {
//     res("Resolved")
// })

// let myPromise2 = new Promise(( res,rej ) => {
//     rej("Rejected")
// })

// let myPromise3 = new Promise(( res,rej ) => {
//     rej("Rejected")
// })

// let myPromise4 = new Promise(( res,rej ) => {
//     res("Resolved")
// })

// let race = Promise.race([myPromise, myPromise2, myPromise3, myPromise4])

// race.then(console.log).catch(console.log)


// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

// let myPromise = new Promise(( res,rej ) => {
//     res("Resolved")
// })

// let myPromise2 = new Promise(( res,rej ) => {
//     rej("Rejected")
// })

// let myPromise3 = new Promise(( res,rej ) => {
//     rej("Rejected")
// })

// let myPromise4 = new Promise(( res,rej ) => {
//     res("Resolved")
// })

// Promise.allSettled([myPromise, myPromise2, myPromise3, myPromise4]).then(result => {
//     let value = { yes: 0, no: 0}

//     let total = result.reduce((acc, item)=> {
//         if( item.status === "fulfilled") {
//             acc.yes = acc.yes + 1
//         }else{
//             acc.no = acc.no + 1
//         }
//         return acc
//      }, value)

//     console.log("Shedegi:", total)
// })


// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები


    // let myPromise = new Promise(( res,rej ) => {
    //     res("Resolved")
    // })
    
    // let myPromise2 = new Promise(( res,rej ) => {
    //     rej("Rejected")
    // })
    
    // let myPromise3 = new Promise(( res,rej ) => {
    //     rej("Rejected")
    // })
    
    // let myPromise4 = new Promise(( res,rej ) => {
    //     res("Resolved")
    // })

    // let myPromise5 = new Promise(( res,rej ) => {
    //     res("Resolved")
    // })

    // Promise.allSettled([myPromise, myPromise2, myPromise3, myPromise4, myPromise5]).then(result => {
    //     failedPromises = result.filter(item => item.status === "rejected")
    
    //     console.log(failedPromises)
    
    // })
    
    

    // 6)api1 = https://jsonplaceholder.typicode.com/users
    // api2 = https://jsonplaceholder.typicode.com/posts
    // გაუშვი ეს ორი API ერთდროულად


//     async function fetchUsers(API) {
//  try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data[0]
//  } catch (error) {
//     console.log(error)
//  }   
// }

// async function fetchPosts(API) {   
//  try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     return data[0]
//  } catch (error) {
//     console.log(error)
//  }   
// }

// Promise.all([fetchUsers(),fetchPosts()]).then(res => console.log(res))
>>>>>>> 6865e5f6dab88c0afbe2874ec94d92e795cb793f
