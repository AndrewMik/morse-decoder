const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedExpression = "";
    const result = expr.match(/.{1,10}/g);
    for (let i = 0; i < result.length; i++) {
        if(result[i] === "**********"){
            decodedExpression += " ";
        } else {
            let decodedSymbol = result[i].replace(/10/g, ".");
            decodedSymbol = decodedSymbol.replace(/11/g, "-");
            decodedSymbol = decodedSymbol.replace(/0/g, "");
            decodedExpression += MORSE_TABLE[decodedSymbol];
        }
    }
    return decodedExpression;
}

module.exports = {
    decode
}