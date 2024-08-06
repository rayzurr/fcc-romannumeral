const inputBox = document.getElementById("number") // .value converts only into STRING.
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

console.log(roman)

convertBtn.addEventListener("click", (num)=>{
    let result = '';
    let num = parseInT(inputBox.value); // parseInt converts string to number

    // the for loop with itierate over the key of the roman numerals
    for (let   
 key in romanNumerals) {


// this check itierate over object and stop when value is greater or equal to the 116
// a while loop is great for this task because it checks for the first true condition
        while (num >= romanNumerals[key]) {
            // will add the key 'C' to the 'result' (which is a string variable)
            result += key;
            // originally the value was 116, now it will subtract 100 (the value of C 100) and the continue for the for loop
            num -= romanNumerals[key];
        }
    }

    console.log(result);
})





