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

var attempt = 3;

function checkAnswer10() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("4951", "4951".length)) {
        alert("Wow, that's great.......Jump on to the next one.");
        window.open("Page11.html", "_self");
    } else if (answer == "") {
        alert("Please type your response");
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempts;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("answer").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}