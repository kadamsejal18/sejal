let n=document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let feedback = document.querySelector("#feedback");
let form = document.querySelector("form");
const stars = document.querySelectorAll('.star');
const ratingValue = document.querySelector("#rating-feedback");


//form.addEventListener("submit", function (dets) {
    //dets.preventDefault();

    document.querySelector("#nameError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#feedbackError").textContent="";
    document.querySelector("#resultMessage").textContent = "";

    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const feedbackRegex=/^(\b\w+\b[\s\r\n]*){5,}$/;

    let nameans = nameRegex.test(n.value);
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    let feedbackans= feedbackRegex.test(feedback.value);

    let isValid = true;
    if(!nameans){
        document.querySelector("#nameError").textContent="Name should be at least 2 characters";
        document.querySelector("#nameError").style.display = "initial";
        isValid =false;
    }

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
            if (!passwordans) {
        document.querySelector("#passwordError").textContent = "password must be at least 8 characters,include uppercase,lowercase,number,and symbol.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }else {
                document.querySelector("#passwordError").style.display = "none";
            }
            if(!feedbackans){
                document.querySelector("#feedbackError").textContent="Feedback has  at least 5 separate words";
                document.querySelector("#feedbackError").style.display="initial";
                isValid=false;
            }

            stars.forEach(star => {
  star.addEventListener('click', function () {
    const rating = this.getAttribute('data-value');
    ratingValue.value = rating;

    stars.forEach(s => s.classList.remove('selected'));

    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

            if (ratingValue.value === '') {
  isValid = false;
  document.querySelector("#resultMessage").textContent = "Please provide a rating.";
}


        
    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is correct";
                          document.querySelector("#resultMessage").style.color = "green"; // Set success message color to green
            } else {
                document.querySelector("#resultMessage").textContent = "Please correct the errors above.";
                document.querySelector("#resultMessage").style.color = "red"; // Set error message color to red
            }

//});