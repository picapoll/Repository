console.log("hola mundo!");
var myString:string = "Hola Mundo";
myString = 22 + "";

var myNumber = 33;
var myVar:any= "helllo";
myVar = 66;

//Arrays
var StringArray:string[]=["item1","item2","item3"]
var StringNumber:number[]=[1,2,3]

//tuple
var strNumTuple :[string, number];
strNumTuple=["hola",22];

//void, undefined, null
/* let myVoid: void=undefined;
let myNull: null=null;
let myUndefined:undefined=undefined; */


//functions
function getSum(num1:number, num2:number):number{
    return num1+num1
}

let mySum= function(
    num1: number | string ,
    num2: number | string):number {
         if(typeof(num1)=== 'string'){
             num1= parseInt(num1)
         }
         if(typeof(num2)=== 'string'){
            num2= parseInt(num2)
         }
         return num1 +num2
    }
/* 
function getName(
    firstName:string, 
    lastName?:string):string{
        if(lastName==undefined){
            return firstName;
        }
            return'${firstName} ${lastName}';
}
document.write(getName("jesus","Calleja")) */

/* 

document.write(getName("jesus","calleja")); */

interface ITodo {
    title:string;
    text:string;
}

function showToDo(todo){
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo: ITodo ={title:'Eat Diner', text:'ASAP2'}
showToDo(myTodo);
document.write

//Clases

class User{
    private name:string;
    email:string;
    age:number;

    constructor(name){
        this.name = name;
    }
    
    register(){
        console.log(`${this.name} is registered`);
    }
    showMeAge(){
        return this.age;
    }
}

var John = new User ('John');
console.log(John.register())
document.write();    