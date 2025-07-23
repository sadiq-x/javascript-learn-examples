//Specific function
function helloWorld () {
    console.log("Hello Word")
}

function getPI () {
    return  3.14;
}

//Reusable function
function returnName(name) {
    var myName = name;

    return myName;
}

function consoleName(name) {
    var myName = name;

    console.log(myName);
}

function sumNumbers(num1, num2) {
    var sum = num1 + num2;

    return sum;
}

export async function getBoolean() {
    return true;
}
var getCar = await getBoolean();

export default function argEmpty (arg = 1) {
    return arg;
}
//console.log(argEmpty()) //Print the default number "1" or the argument passed