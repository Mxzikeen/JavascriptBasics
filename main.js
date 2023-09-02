//PUNTO 1 VARIABLES
let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
const PI = 3.14159;
console.log(PI);

//PUNTO 2 FUNCION
const name = "Agustin";
function greet(name) {
  console.log("Hi " + name + " how are you?");
}
greet(name);
function isEven(number) {
  return number % 2 == 0 ? true : false;
}
console.log(isEven(2));
console.log(isEven(5));

let arr = [15, 1564, 231, 54, 63584, 34, 684, 63, 54654, 2, 88, 1, 87, 0, 98];
function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((total, element) => total + element, 0);
  return sum;
}
console.log(sumArray(arr));

///PUNTO 3 OBJECT LITERALS AND CONSTRUCTORS

const person = {
  name: "agustin",
  age: 23, //OBJECT LITERALS
  profession: "student",
};
console.log(person);

function myPerson(name, age, profession) {
  this.age = age;
  this.name = name; //CONSTRUCTOR WITH PARAMETERS
  this.profession = profession;
}

const person2 = new myPerson("Juan", 24, "thief");
console.log(person2);

function myMovie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
}

const movie = new myMovie("Titanic", "James Cameron", 2011);
console.log(movie);

/*Arrays
10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
un nuevo array solo con los números pares.*/

const fruits = ["Apple", "Orange", "Pinapple", "Banana", "Mango", "Kiwi"];
console.log(fruits[3]);

fruits.push("Strawberry");
console.log(fruits);

function evenFilter(arr) {
  const array2return = arr.filter((number) => number % 2 === 0);
  return array2return;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(evenFilter(numbers));

/*15. Crear una función `duplicarArray` que tome un array de números como parámetro y
retorne un nuevo array con cada elemento duplicado.
16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la
cadena invertida.
17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como
parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al
número.*/

function duplicatedArray(arr) {
  const duplicated = arr.map((number) => number * 2); // CONSIDERO QUE LA CONSIGNA ES MULTIPLICAR X2 CADA ELEMENTO
  return duplicated;
}

function duplicatedArrayV2(arr) {
  const duplicated = [];
  for (const number of arr) {
    duplicated.push(number, number); // PREGUNTAR SI SE REFERIA A ESO
  }
  return duplicated;
}
console.log(duplicatedArrayV2(numbers));

function reverseString(string) {
  const reversed = string.split("").reverse("").join("");
  return reversed;
}
console.log(reverseString("AGUSTIN"));

function lengthFilter(arr, num) {
  const filteredArr = [];

  arr.forEach((string) => {
    if (string.length > num) {
      filteredArr.push(string);
    }
  });
  return filteredArr;
}
console.log(lengthFilter(fruits, 7));

/*18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como
`nombre`, `edad` y `promedio`.
19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y
retorne el objeto del estudiante con ese nombre.
20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio
de sus promedios.
*/

function Student(name, age, gpa) {
  this.name = name;
  this.age = age;
  this.gpa = gpa;
}
const s1 = new Student("Agustin", 23, 10);
const s2 = new Student("Alejandra", 49, 8);
const s3 = new Student("Guido", 16, 9);
const s4 = new Student("Jorge", 48, 8);

let studentsArray = [s1, s2, s3, s4];
console.log(studentsArray);

function searchStudent(arr, name) {
  return arr.find((element) => element.name === name);
}
console.log(searchStudent(studentsArray, "Guido"));
console.log(searchStudent(studentsArray, "Pepe"));

function gpaOfTheClass(arr) {
  const grades = arr.reduce((total, student) => total + student.gpa, 0);
  const students = arr.length;
  return grades / students;
}
console.log(gpaOfTheClass(studentsArray));

function orderNumbers(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
console.log(arr);
console.log(arr.sort((a, b) => b - a));
console.log(arr);

function deleteStudent(arr, name) {
  arr = arr.filter((student) => student.name != name);
  return arr;
}
console.log(studentsArray);
studentsArray = deleteStudent(studentsArray, "Jorge");
console.log(studentsArray);

// 21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como
// `arrancar` y `detener`.
// 22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar`
// que imprima un saludo personalizado.
// 23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un
// producto al carrito.
class Vehicle {
  #brand;
  #model;
  #year;

  constructor(brand, model, year) {
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }
  go() {
    console.log("The car is moving");
  }
  stop() {
    console.log("The car stopped");
  }
  set setBrand(brand) {
    this.#brand = brand;
  }
  set setModel(model) {
    this.#model = model;
  }
  set setYear(year) {
    this.#year = year;
  }
  get getBrand() {
    return this.#brand;
  }

  get getModel() {
    return this.#model;
  }
  get getYear() {
    return this.#year;
  }
}
const car1 = new Vehicle("Dodge", "Charger", 2023);
console.log(car1.getBrand);
console.log(car1.getModel);
console.log(car1.getYear);
car1.go();
car1.stop();

class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  set setAge(age) {
    this.#age = age;
  }
  set setName(name) {
    this.#name = name;
  }
  get getName() {
    return this.#name;
  }
  get getAge() {
    return this.#age;
  }
  saludar() {
    console.log("Hi, my name is " + this.#name);
  }
}
const person1 = new Person("Juancho", 23);
console.log(person1.getName);
console.log(person1.getAge);
person1.saludar();

class myBag {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

// Ejemplo de uso:
const bag = new myBag();

const product1 = {
  name: "T-Shirt",
  price: 20,
};

const product2 = {
  name: "Pant",
  price: 30,
};
const product3 = {
  name: "Socks",
  price: 10.5,
};

bag.addProduct(product1);
bag.addProduct(product2);
bag.addProduct(product3);

console.log(bag.products);

function sumTotalMyBag(arr) {
  const sum = arr.reduce((acc, element) => acc + element.price, 0);
  return sum;
}
console.log(sumTotalMyBag(bag.products));

function createCalculator() {
  return {
    add: function (a, b) {
      return a + b;
    },
    substract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return b === 0 ? "Cannot divide by zero" : a / b;
    },
  };
}
const calculator = createCalculator();
console.log(calculator.add(5, 7));
console.log(calculator.substract(10, 20));
console.log(calculator.multiply(8, 5));
console.log(calculator.divide(14, 2));
console.log(calculator.divide(14, 0));
