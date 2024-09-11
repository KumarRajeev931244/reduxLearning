import { compose } from "redux";
function removeString(string){
    return string.split(" ").join("")
}

function repeatString(string){
    return string.repeat(2)
}

function convertToUpper(string){
    return string.toUpperCase();
}
const input = "abc def ghi"
const composeFunction = compose(removeString,repeatString, convertToUpper)
console.log(composeFunction(input))