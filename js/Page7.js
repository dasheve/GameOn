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

function checkAnswer7() {
    var answer = document.getElementById("answer").value;
    if (answer == GuessIt("11610511697110", "11610511697110".length)) {
        alert("Whoa.....Move on..");
        window.open("Page8.html");
    } else if (answer == "") {
        alert("Please type your response", "_self");
    } else {
        alert("Your answer is wrong");
        return false;
    }
}