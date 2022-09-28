var nameError = document.getElementById("name-error");
var mailError = document.getElementById("mail-error");
var submitError = document.getElementById("submit-error");
function validateName() {
    // condition 1
    var name = document.getElementById("contact-name").value
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    // condition 2
    if (!name.match(/^[a-zA-Z ]+$/)) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    }
    // outboud of condition
    nameError.innerHTML = 'Validated';
    return true;
}
function validateMail() {
    // condition 1
    var mail = document.getElementById("contact-mail").value;
    if (mail.length == 0) {
        mailError.innerHTML = 'Mail is required';
        return false;
    }
    // condition 2
    if (!mail.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        mailError.innerHTML = 'Mail is not in correct format';
        return false;
    }
    mailError.innerHTML = 'Validated';
    return true;
}

function validateForm() {

    if (!validateName() || !validateMail()) {
        submitError.innerHTML.style.display = 'block';
        submitError.innerHTML = 'Please correct the form';
        setTimeout(function () { submitError.style.display = 'none' }, 3000);
    }
    submitError.innerHTML = 'Accepted'
    return true
}