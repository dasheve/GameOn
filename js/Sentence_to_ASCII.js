function ASCIISentence(str) {
    let l = str.length;
    let convert;
    var ascii;
    var arr = [];
    for (let i = 0; i < l; i++) {
        convert = str[i].charCodeAt(0);
        arr.push(convert);
    }
    ascii = arr.join("");
    console.log(ascii);
    return ascii
}

// Driver function
let str = "laser";
var asc = ASCIISentence(str);