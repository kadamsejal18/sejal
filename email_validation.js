let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#resultMessage").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Invalid email format";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }else {
                document.querySelector("#emailError").style.display = "none";
            }

    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "password must be at least 8 characters,include uppercase,lowercase,number,and symbol.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }else {
                document.querySelector("#passwordError").style.display = "none";
            }

    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is correct";
                          document.querySelector("#resultMessage").style.color = "green"; // Set success message color to green
            } else {
                document.querySelector("#resultMessage").textContent = "Please correct the errors above.";
                document.querySelector("#resultMessage").style.color = "red"; // Set error message color to red
            }


});