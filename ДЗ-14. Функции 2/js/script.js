let a = prompt('Type a word')
let b = prompt('Type a word length')

function padString(word, num, symbol = '*', bool = true){

    if (word === null || word === '') return 'some error in text value'

    else if (typeof num !== 'number' || num === '' || num === null) return 'some error in number value';

    let result = '';
    if (word.length < num && bool === true) {
        for (i = 0; i < num - word.length; i++) {
        result += symbol
        }
        return word + result
    }

    else if (word.length < num && bool === false) {
        for (i = 0; i < num - word.length; i++) {
        result += symbol
        }
        return result + word
    }

    if (word.length > num){
        return word.substr(0, num)
    }
}

let result = padString(a, b)
console.log(result)
