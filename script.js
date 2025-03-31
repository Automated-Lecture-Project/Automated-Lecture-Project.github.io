function sendMail(){
    let params ={
        name : document.getElementById("name").value
        email : document.getElementById("email").value
        message : document.getElementById("message").value
    }

    emailjs.sendMail("service_qm1cdrl","template_95m0uiq",params).then(alert("Email Sent."))
}