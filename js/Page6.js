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

var check = GuessIt("49575255", "949575255".length);

function checkAnswer6() {
    var answer = document.getElementById("answer").value;
    if (answer == check) {
        alert("You are doing great........Lets see the next one");
        window.open("Page7.html");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}