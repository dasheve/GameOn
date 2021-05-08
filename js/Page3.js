function GuessIt(str, len) {
    var num = 0;
    var arr = [];
    var wrong;
    for (var i = 0; i < len; i++) {
        num = num * 10 + (str[i] - '0');
        if (num >= 32 && num <= 122) {
            var ch = String.fromCharCode(num);
            arr.push(ch);
            num = 0;
        }
    }
    wrong = arr.join("");
    return wrong;
}

function checkAnswer3() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("11511297102105101108100", "111511297102105101108100".length)) {
        alert("Cheers!........Moving on to the next.");
        window.open("Page4.html", "_self");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}