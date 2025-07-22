var carObject = {
    name : "Volvo",
    model : "X40",
    petrol : true,
    km : 1000,
    owner : ["Rafael"]
};
carObject.petrol = false //Change property of petrol
delete carObject.km; //Delete the property km
//console.log(carObject)

var testObject = {
    "my name": "Rafael"
};
testObject["my name"] = "Luis"; //Change the property "my name"
//console.log(testObject)

//Check if the property exist
if (carObject.hasOwnProperty("name")){
    //console.log(true)
}

var stringJson = JSON.stringify(carObject); //Create a json string of object
//console.log(stringJson);
var parseJson = JSON.parse(stringJson); //Create a json object of json string

