//1
function convertToNumber(str) {
    try {
      const num = Number(str);
      
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      
      return num;
    } catch (error) {
      return "Invalid number";
    }
  }
  //console.log(convertToNumber("123"));       // Output: 123
  //console.log(convertToNumber("3.14"));      // Output: 3.14
  //console.log(convertToNumber("Hello"));     // Output: Invalid number
  //console.log(convertToNumber("123abc"));    // Output: Invalid number



  //2
  function getPerson(person){
  try{
    if(typeof person!=='object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')){
        throw new Error("Invalid parameter type")
    }
    const name = person.name
    const age = person.age

    //return 'name: ${name}, Age: ${age}'
  }catch(error){
     
  }
}
    

//3
class Car{
  constructor(company, model, year){
    this.company = company;
    this.model = model;
    this.year = year;
  };

  getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}
const myCar = new Car("Maruti 800","ZX",2001)

const description = myCar.getDescription()
//console.log(description);

//4
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee("John Doe", "Manager", 5000);
const salary = employee.getSalary();
//console.log(salary);

//5
class Person{
  constructor(name = 'Unknow', age =0){
    this.name=name;
    this.age=age;
  };

  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("Harshil Choudhary",19)
const details1 = person1.getDetails()
//console.log(details1);

const person2 = new Person()
const details2 = person2.getDetails()
//console.log(details2);


//6
class Calculator{
  static add(num1, num2){
    return num1 + num2;
  }
}
const result = Calculator.add(5,3)
//console.log(result);

//7
class User{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
  get password(){
    //return this._password.replace(/./g,"*")
  }
  set password(newPassword){
    if(newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)){
      //this._password = newPassword;
    }
    else {
      //console.log("Invalid password. Password should be at least 8 characters long, and contain at least one number and one uppercase letter.");
    }
  }
}

const user = new User("john_doe", "Password123")
//console.log(user.password);

user.password = "newpassword";
//console.log(user.password);

user.password = "weak";
//console.log(user.password);


//8
function Student(name) {
  this.name = name;
}
Student.prototype.printDetails = function() {
  //console.log(`Hello, my name is ${this.name}`);
};
const student = new Student("Harshil");
//student.printDetails();

//9
function numberChecker(number){
  return function(num){
    return number.includes(num)
  }
}
const numberArray = [1,2,3,4,5]
const checkNumber = numberChecker(numberArray)
//console.log(checkNumber(3)); 
//console.log(checkNumber(6));


//10
function filterProductByCategory(){
  return function(category){
    return Product.filter(Product => Product.category === category)
  };
}
const productsArray = [
  { name: 'Product 1', category: 'Electronics' },
  { name: 'Product 2', category: 'Clothing' },
  { name: 'Product 3', category: 'Electronics' },
  { name: 'Product 4', category: 'Books' }
];

//const filterByCategory = filterProductByCategory(productsArray);
//console.log(filterByCategory('Electronics'));
//console.log(filterByCategory('Books'));
