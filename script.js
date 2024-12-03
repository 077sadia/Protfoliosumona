let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
}


// Typing effect for the "Web Developer" text
const options = {
    strings: ["Web Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"],
    typeSpeed: 80,         // Speed of typing
    backSpeed: 50,         // Speed of deleting
    backDelay: 1000,       // Delay before deleting
    loop: true             // Loop the typing effect
  };
  
  // Create a new Typed instance to apply the typing effect
  const typed = new Typed(".typed-text", options);
  




// Initialize EmailJS with your user ID
emailjs.init("siddiqua.cs@gmail.com"); // Replace with your EmailJS user ID

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Send the email using the EmailJS service
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
        .then(function(response) {
            console.log("Success", response);
            alert("Your message has been sent!");
        }, function(error) {
            console.log("Error", error);
            alert("Something went wrong. Please try again.");
        });
});
