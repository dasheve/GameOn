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
            Subject: "Hello! Its Luna",
            Body: "<html><body><h2><a href='https://drive.google.com/file/d/1_r8kOXW14C0JG8IM4tkzxklwPoj3hO0D/view'>Click this link.</a></h2></body></html>"
        }).then(
            message => {
                //console.log (message);
                if (message == 'OK') {
                    alert('Now check for a mail from dasheve171230@gmail.com in your inbox or spam.');
                } else {
                    console.error(message);
                    alert('There is error at sending message. ')

                }

            }
        );



    }
}