console.log("hola mundo!");
var myString = "Hola Mundo";
myString = 22 + "";
var myNumber = 33;
var myVar = "helllo";
myVar = 66;
//Arrays
var StringArray = ["item1", "item2", "item3"];
var StringNumber = [1, 2, 3];
//tuple
var strNumTuple;
strNumTuple = ["hola", 22];
//void, undefined, null
/* let myVoid: void=undefined;
let myNull: null=null;
let myUndefined:undefined=undefined; */
//functions
function getSum(num1, num2) {
    return num1 + num1;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showToDo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Eat Diner', text: 'ASAP2' };
showToDo(myTodo);
document.write;
//Clases
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    return User;
}());
var John = new User('John');
console.log(John.register());
document.write();
