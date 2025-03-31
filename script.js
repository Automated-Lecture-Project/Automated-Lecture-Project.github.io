function sendMail(){
    let params ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_qm1cdrl","template_isy0jjo",params).then(alert("Email Sent."));
}