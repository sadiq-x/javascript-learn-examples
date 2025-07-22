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

async function getBoolean() {
    return true;
}
var getCar = await getBoolean();


