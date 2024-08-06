const inputBox = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const resultMsg = document.getElementById("output")


const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

convertBtn.addEventListener("click", romanNumeralConverter)


function romanNumeralConverter(){ //will convert input number to roman numeral letters

    let inputValue = parseInt(inputBox.value);
let result = '';

    if (isNaN(inputValue)){
        resultMsg.innerText = "Please enter a valid number"
    }

    if (parseInt(inputValue) < 1){
        resultMsg.innerText = "Please enter a number greater than or equal to 1"
    }

    if (parseInt(inputValue) >= 3999){
        resultMsg.innerText = "Please enter a number less than or equal to 3999"
    }


if (parseInt(inputValue) >= 1 && parseInt(inputValue) <= 3999) {
    for (let key in romanNumerals){
            while ( parseInt(inputValue) >= romanNumerals[key]){
                console.log(romanNumerals[key])
                result += key
                inputValue -= romanNumerals[key];
            }
        }

        resultMsg.innerText = result;
}

}
