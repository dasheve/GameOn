function sendmail() {

    var name = document.getElementById("namestudent").value;
    var current = new Date();

    // var body = $('#body').val();
    //console.log(name, phone, email, message);

    if (name == "") {
        alert("Please enter your name");
        return true;
    } else {

        Email.send({
            SecureToken: "33b41a3a-f097-4a27-a7e5-c3c42cd7709e",
            To: 'deveshy269@gmail.com',
            From: "dasheve171230@gmail.com",
            Subject: "Game Started By: " + name,
            Body: name + " has started the game at: " + current.toLocaleTimeString(),
        })
        window.open("Page1.html", "_self");

    }
}