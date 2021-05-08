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

var check = GuessIt("52100", "52100".length);

function checkAnswer9() {
    var answer = document.getElementById("answer").value;
    if (answer == check) {
        alert("You are a genius........Let's solve the next one");
        window.open("Page10.html");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}