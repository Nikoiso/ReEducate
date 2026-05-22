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