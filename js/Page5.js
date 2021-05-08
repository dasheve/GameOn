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

function checkAnswer5() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("9911111011810112032108101110115", "9911111011810112032108101110115".length)) {
        alert("You got it........Proceeding to next question");
        window.open("Page6.html", "_self");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}