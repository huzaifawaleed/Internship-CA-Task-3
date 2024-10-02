// Typewriter

let title = document.querySelector('.main_heading');
let n = "Developer|"
let index = 1;

const typeWriter = () => {
    let new_title = n.slice(0, index);
    title.innerText = new_title;

    index > n.length ? index = 0 : index++;


    setTimeout(() => typeWriter(), 300)
}

typeWriter()

// Typewriter


// Form validation

function validform() {

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('subjectError').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').innerHTML = "Please Enter Your Name";
        isValid = false;
    }


    if (email === "") {
        document.getElementById('emailError').innerHTML = "Please Enter Valid Email";
        isValid = false;
    }

    if (subject === "") {
        document.getElementById('subjectError').innerHTML = "Please Enter a Subject";
        isValid = false;
    }


    if (message === "") {
        document.getElementById('messageError').innerHTML = "Please Enter a Message";
        isValid = false;

    }
    else if (message.length < 10) {
        document.getElementById('messageError').innerHTML = "Please Enter 10 Characters";
        isValid = false;
    }

    return isValid;

}
const form = document.getElementById('myForm');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validform()) {
        alert('Success! Your form has been submitted.');
        form.reset();
    }
});
// Form validation

// Bottom to to button
const bottomToTopBtn = document.getElementById("bottomToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        bottomToTopBtn.style.display = "block";
    } else {
        bottomToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Bottom to to button