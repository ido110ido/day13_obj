//EX0
//1
const student = {
    name:'ido',
    age:23,
    grade:100,
    classes:['math','sport','art']
}
console.log(student.name);
//2
const book = {
    title : 'the best book',
    author: 'ido atias',
    year: 1999,
    genre: 'business',
    publisher: 'dad publisher',
    pages: 123,
    isbn :'fsdfddfgdf',
}
book['rating'] = 10
console.log(book);
//3
const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
};
console.log(car.features[1]);
//4
const store ={
    name:'the store',
    location: 'haoren 15,hadera',
    categories:['art','sport','business'],
    products:[
        {
            name:'the book',
            price: 10,
            quantity: 5,

        },
        
        {
            name:'the book:2',
            price: 15,
            quantity: 1,

        },
        
        {
            name:'the book:3',
            price: 30,
            quantity: 25,

        }
    ]

}
function pricing(name){
    for (let index = 0; index < store.products.length; index++) {
        let tempBook = store.products[index]
        if(tempBook.name === name){
            return `the book: ${name} total value of product:${tempBook.price*tempBook.quantity}`
        }
 }
 return 'no book found'
}
console.log(pricing('the book:3'));

//EX1

//3
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//3.1
function displayGroceries(){
    let tempFruits = groceries.fruits
    for (let index = 0; index < tempFruits.length; index++) {
        console.log(`fruits: ${tempFruits[index]}`);
    }
}
displayGroceries()
//3.2
function cloneGroceries(){
    let user = client;
    user = 'betty'

    let shopping = groceries
    shopping.totalPrice = '35$'

    shopping.other.paid = false
}
cloneGroceries()

//EX2
//1
const books = [
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      alreadyRead: true
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      alreadyRead: false
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      alreadyRead: true
    }
  ];

for (let index = 0; index < books.length; index++) {
    let sentens =  `${books[index].title} by ${books[index].author}`;
    books[index].alreadyRead?
        console.log('You already read '+ sentens):
        console.log('You still need to read '+ sentens);
}  
//EX3
//1
const myPenguin = {
    name: 'Pingu',
    origin: 'Pingu',
    author: 'Peter Harrap and David Bell',
    type: 'Stop-motion animated children\'s television series'
  };
//2
console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`);
//3
myPenguin['canFly'] = false
//4
myPenguin['chirp'] = function(){
    console.log('CHIRP CHIRP! Is this what penguins sound like?');
}
myPenguin.chirp()
//5
myPenguin['sayHello'] = function(){
    console.log(`Hello, I'm a penguin and my name is ${this.name}!`);
}
//6
myPenguin.sayHello()
//7
myPenguin.name = 'Penguin McPenguinFace'
myPenguin.sayHello()
//8
myPenguin['fly'] = function(){
    this.canFly? 
    console.log('I can fly!'):
    console.log('No flying for me!');
}
//10
myPenguin.fly()
//11
myPenguin.canFly = true
myPenguin.fly()

//EX4
//1
myPenguin['favoriteFoods'] = ['burger','weet','banana']
//2
console.log(myPenguin.favoriteFoods[1]);
//3
myPenguin['firstFavFood'] = myPenguin.favoriteFoods[0]
//4
myPenguin.favoriteFoods.push('pizza')
//5
console.log(myPenguin.favoriteFoods.length);
//6
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = 'pineapples'
console.log(myPenguin.favoriteFoods);
//7
myPenguin['lastFavFood'] = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1]
//8
for (let index = 0; index < myPenguin.favoriteFoods.length; index++) {
    console.log(myPenguin.favoriteFoods[index]);    
}
//EX5
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };
  //1
  let penguins = [gunter,ramon,fred]
  //2
  console.log(penguins[0]);
  //3
  let secondPenguin = penguins[1]
  //4
  console.log(penguins[penguins.length - 1]);
  //5
  penguins.push(myPenguin)
  //6
  console.log(penguins.length);
  //7
  penguins[0].canFly = true
  //8
  penguins[0].sayHello()
  //9
  for (let index = 0; index < penguins.length; index++) {
    console.log(penguins[index].name);
  }
  //10
  for (let index = 0; index < penguins.length; index++) {
    penguins[index].sayHello();
  }
  //11
  for (let index = 0; index < penguins.length; index++) {
    penguins[index].numberOfFeet = 2;
  }
  //12
  for (let index = 0; index < penguins.length; index++) {
    penguins[index].canFly? 
    console.log(`${penguins[index].name} can fly!`):
    console.log('No flying for me!');
  }

  //EX6
  //alrady had it!!!!!!

  //EX7
  const school = {
    name:"My School",
    location: "New York",
    students: [
        {
            name:"Alice",
            age: 15,
            grade: 10,
            classes: ["math", "english"]
        },
        {
            name:"Bob",
            age: 11,
            grade: 5,
            classes: ["sport", "english"]
        }
    ],
    teachers:[
        {
            name:"Carol",
            subject: "math",
            gradeLevels:[9, 10, 11]

        },
        {
            name:"avi",
            subject: "sport",
            gradeLevels:[10, 11, 12]
        }
    ]
  }

  function isInClass(teacher,student) {
    let studentIndex = school.students.indexOf(student)
    let teacherIndex = school.teachers.indexOf(teacher)
    for (let index = 0; index < school.teachers[teacherIndex].classes.length; index++) {
        if(school.students[studentIndex].grade === school.teachers[teacherIndex].classes[index]){
            return true
        }
    }
    return false
  }

  //EX8
  const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };
  
  function genreTitle(genre){
    let titles = []
    let books = library.books
    for(let i = 0 ; i < books.length; i++){
        if(books[i].genre = genre){
            titles.push(books[i].title)
        }
    }
    return titles
  }