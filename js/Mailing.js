function sendmail() {

    var email = document.getElementById("receiver").value;

    // var body = $('#body').val();
    //console.log(name, phone, email, message);

    if (email == "") {
        alert("Please enter your email")
    } else {

        Email.send({
            SecureToken: "33b41a3a-f097-4a27-a7e5-c3c42cd7709e",
            To: email,
            From: "dasheve171230@gmail.com",
            Subject: "Javascript Email",
            Body: "Hii Bro! this is Sam, your guide for the treasure hunt game. Hope you will co-operate with me."
        }).then(
            message => {
                //console.log (message);
                if (message == 'OK') {
                    alert('Your mail has been sent. Check for a mail from dasheve171230@gmail.com in your inbox or spam.');
                } else {
                    console.error(message);
                    alert('There is error at sending message. ')

                }

            }
        );



    }
}