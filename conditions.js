function trueOrFalse(num) {
    if (typeof num == "number") {
        console.log(true);
    } else {
        console.log(false);
    }
}
//console.log(trueOrFalse(2))

function testEqual(val) {
    if (val = 12) {
        console.log(true);
    } else {
        console.log(false);
    }
}
//console.log(testEqual(1))

function testEqualEqual(val) {
    if (val === "12") {
        console.log(true);
    } else {
        console.log(false);
    }
}
//console.log(testEqualEqual(12))

function lessOrEqual(num) {
    if (num < 10) {
        console.log("Less 10");
    }

    if (num == 10) {
        console.log("Equal 10");
    }
}
//console.log(lessOrEqual(1))


function switchCases(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "true";
            break;
        case 2:
            answer = "false";
            break;
    }
    return answer;
}
//console.log(switchCases(1))

function doWhile(arg) {
    while (arg <= 10) {
        console.log(arg);
        arg++;

    }
}
//doWhile(3)

function forAny(arg) {
    for (var i = 1; i < arg; i++) {
        console.log(i + " " + arg);
    }
}
//forAny(10);

function forString (str) {
    for (let i = 0; i < str.length; i++){
        console.log(str[i])
    }
}
//forString("Rafael")