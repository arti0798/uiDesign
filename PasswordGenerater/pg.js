let result = document.getElementById("generated");
let myLength = document.getElementById("length");
let myLower = document.getElementById("lowercase");
let myUpper = document.getElementById("uppercase");
let myNumber = document.getElementById("number");
let mySymbol = document.getElementById("symbol");
let clipboard = document.getElementById("clipboard");

let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Clipbord
clipboard.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = result.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    var input = $("<input>");
    var color = $(this).children(".color-hex").text();
    $("body").append(input);
    input.val(color).select();
    document.execCommand("copy");
    generated.innerText = "";
    $(".copied").fadeIn().delay(2000).fadeOut();
});

//Generate Button
generate.addEventListener("click", () => {
    const length = +myLength.value;
    const hasLower = myLower.checked;
    const hasUpper = myUpper.checked;
    const hasNumber = myNumber.checked;
    const hasSymbol = mySymbol.checked;

    result.innerText = generatePsd(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePsd(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{
            lower
        },
        {
            upper
        },
        {
            number
        },
        {
            symbol
        }
    ].filter((item) => Object.values(item)[0]);

    if (typesCount === 0) {
        return "";
    }

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}