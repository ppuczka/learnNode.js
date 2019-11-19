var person = {
    name: "Przemek",
    age: 34,
    introduce() {console.log("Hello, my name is " + this.name + " I am " + this.age + " yers old");
}


};

person.introduce();

var Student = function(name, age) {
    this.name = name;
    this.age = age;

};

Student.prototype.introduce = function(name, age){
    console.log("Hello, my name is " + this.name + " I am " + this.age + " yers old");
};

const getName = ({ name }) => console.log(name); 

getName(person);


var Angelika = new Student("Angelika", 34);
console.log(Angelika);
Angelika.introduce();

var Wiki = new Student("Wiki", 6);
console.log(Wiki);
Wiki.introduce();

getName(Wiki);

let testArray = ["Pies", "Kot", "Koń"];
let [pet1, pet2, pet3] = testArray;
console.log(pet1);
console.log(pet2);
console.log(pet3);

const getAge = ({ age }) => console.log(age);
getAge(Wiki);

