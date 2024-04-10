let submit= document.getElementById("submit")
document.getElementById("submit")
.addEventListner("onclick", function(event){event.preventDefault()
    alert("please fill all correctly")});
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    let isValid = true;

    // Validate name
     if (name.length<=2){
        name.Error.textContent = "invalid name";
        isValid= false;
    }else if (name == "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }else {
        nameError.textContent = "";
    }

    // Validate email
    if (email == "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate phone
    if (phone == "") {
        phoneError.textContent = "Phone is required";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // If form is valid, submit the form
    if (isValid) {
        document.getElementById("applicationForm").submit();
    }
}