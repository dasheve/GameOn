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

function checkAnswer1() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("11910111511632107105110103115100111119110", "11910111511632107105110103115100111119110".length)) {
        alert("You got it........Click OK for the next.");
        window.open("Page2.html", "_self");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}