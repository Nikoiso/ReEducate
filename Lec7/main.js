// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: 
// getPerimeter(), getArea() , isRightTriangle().

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear
//გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა 
// და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).



// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: 
// getPerimeter(), getArea() , isRightTriangle().

// class Triangle{
//     constructor(a, b, c){

//         this.a = a
//         this.b = b
//         this.c = c
        
//     }

//     getPerimeter(){
//         return this.a + this.b + this.c
//     }

//     getArea(){
//         return 2*(this.a + this.b)
//     }
        
//     isRigthTriangle(){
//         if( this.a === this.b){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// let trian = new Triangle(4, 4, 10)

// console.log("პერიმეტრი:", trian.getPerimeter())
// console.log("ფართობი:", trian.getArea())
// console.log("აროს ტოლფერდა?", trian.isRigthTriangle())


// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear
//გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().


// class SmartPhone{
//     constructor(brand, model, relaseyear){
//         this.brand = brand
//         this.model = model
//         this.relaseyear = relaseyear
//     }
// }

// class GaimingPhone extends SmartPhone{
//     constructor(brand, model, relaseyear, gpuScore, batterycapacity){
//         super(brand, model, relaseyear)
//         this.gpuScore = gpuScore
//         this.batterycapacity = batterycapacity
//     }

//     performanceIndex(){
//         return this.gpuScore * this.batterycapacity
//     }
// }

// let  myGaimingPhone = new GaimingPhone("Asus", "ROG Phone 9", 2024, 95, 5500)
// let  mySmartPhone = new SmartPhone ("Iphone", "15 Pro", 2023)

// console.log(myGaimingPhone)
// console.log(myGaimingPhone.performanceIndex())
// console.log(mySmartPhone)


// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),


// ასე თუ ისე დავწერე, მაგრამ AI დახმარებით. არ ვიცი თუ სწორია ბოლომდე.

// class CryptoWallet{
//     constructor(ownerName, balance = 0){
//         this.ownerName = ownerName
//         this.balance = balance
//         this.history = []
//     }
//     deposit(amount){
//         this.balance = this.balance + amount
//         this.history.push(`Shemovida ${amount}`)
//         }


//     withdraw(amount){
//         if(amount > this.balance){
//             console.log("Arasakmarisi tanxa!")
//             return
//         }
//         this.balance = this.balance - amount
//         this.history.push(`Gamoitana ${amount}`)
//     }

//     transfer(receiver, amount){
//         if(amount > this.balance){
//             console.log("Arasakmarisi tanxa!")
//             return
//         }
//         this.balance = this.balance - amount
//         this.history.push(`Transferred to ${receiver.ownerName}-s: ${amount}`)
//     }

//     getHistory(){
//         return this.history
//     }
//     }
    
//     let myWallet = new CryptoWallet("Nick", 100)
//     let gioWallet = new CryptoWallet("Gio", 50)
    
//     myWallet.deposit(50)
//     myWallet.withdraw(20)
//     myWallet.transfer(gioWallet, 30)

// console.log(myWallet)
// console.log("Nikas istoria:", myWallet.getHistory())
// console.log("Gios istoria:", gioWallet.getHistory())



// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

// იგივე სიტუაცია, რაც მესამეში.

// class Wishlist{
//     constructor(){
//     this.items = []
//     }

//     addItem(id, name){
//         let newItem = { id: id, name: name}
//         this.items.push(newItem)
//     }

//     deleteItem(id){
//         this.items = this.items.filter(item => item.id !== id) 
//     }

//     updateItem(id, newName){
//         let item = this.items.find(item => item.id === id)
//         if(item){
//             item.name = newName
//         }
//     }
// }

// let myWishlist = new Wishlist();

// myWishlist.addItem(1, "BMW M5 Bumper")
// myWishlist.addItem(2, "BBS Wheels")

// myWishlist.updateItem(2, "Carbon BBS Wheels")
// myWishlist.deleteItem(1)

// console.log(myWishlist.items)