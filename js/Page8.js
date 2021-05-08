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

function checkAnswer8() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("1161011151151011149799116", "1161011151151011149799116".length)) {
        alert("You got it........Proceed to next question");
        window.open("Page9.html");
    } else if (answer == "") {
        alert("Please type your response", "_self");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}