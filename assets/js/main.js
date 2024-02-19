/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== DYNAMIC TEXT CHANGE =====*/
const dynamicText = document.getElementById('dynamicText');
const roles = ["FullStack Developer", "Mobile App Developer", "Freelancer"];
let roleIndex = 0;

// Initialize dynamicText with the first role
dynamicText.innerHTML = roles[roleIndex];

function changeRole() {
  const currentText = roles[roleIndex];
  dynamicText.style.transition = "opacity 0.5s ease-in-out"; // Adjust the transition duration

  // Skip transition for the first role change
  if (roleIndex > 0) {
    dynamicText.style.opacity = 0;
  }

  setTimeout(() => {
    dynamicText.innerHTML = currentText;

    setTimeout(() => {
      dynamicText.style.opacity = 1;

      setTimeout(() => {
        dynamicText.style.opacity = 0;
        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(() => {
          changeRole();
        }, 500); // Adjust the delay after the word is fully visible
      }, 1500); // Adjust the delay before transitioning out
    }, 500); // Adjust the delay before transitioning in
  }, 500); // Adjust the delay before transitioning in
}

// Start dynamic text rotation after a delay
setTimeout(() => {
  changeRole();
}, 1000); // Adjust the initial delay as needed



emailjs.init("user_your_emailjs_user_id");

$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault();

        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        emailjs.send("service_your_emailjs_service_id", "template_your_emailjs_template_id", formData)
            .then(function (response) {
                // Display success message to the user
                alert("Message sent successfully!");

                // Optionally reset the form
                $("#contactForm")[0].reset();
            }, function (error) {
                // Display error message to the user
                alert("Error sending message. Please try again later.");
            });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle the visibility of a category
  window.toggleCategory = function(categoryId) {
      const category = document.getElementById(categoryId);
      category.style.display = (category.style.display === 'none' || !category.style.display) ? 'block' : 'none';
  };
});

 // Get the current page hash
 const currentPageHash = window.location.hash;

 // Remove the "active-link" class from all links
 document.querySelectorAll('.nav__link1').forEach(link => {
     link.classList.remove('active-link1');
 });

 // Add the "active-link" class to the link corresponding to the current page
 const activeLink = document.getElementById(`${currentPageHash.substring(1)}-link`);
 if (activeLink) {
     activeLink.classList.add('active-link1');
 }

 function handleFormSubmission() {
  // You can add your logic here, for example, displaying a success message
  document.getElementById('submittedInfo').innerHTML = 'Form submitted successfully!';
}