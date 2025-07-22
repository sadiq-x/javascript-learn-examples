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

function lessOrEqual (num) {
    if (num < 10) {
        console.log("Less 10");
    }

    if (num == 10) {
        console.log("Equal 10");
    }
}
//console.log(lessOrEqual(1))

