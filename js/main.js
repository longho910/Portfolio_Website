// INDEX (HOME)

// Skill/Experience/Education tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// RESUME
// toggle icon action
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".toggleIcon").forEach(function(toggleIcon) {
        toggleIcon.addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var additionalInfo = document.querySelector(targetId);
            additionalInfo.classList.toggle('open');
            this.classList.toggle('fa-chevron-up');
            this.classList.toggle('fa-chevron-down');
        });
    });
});

// side menu on small screen
var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxEqBqNIKLf-UOSr3FdJxgcU-rWcEJOEYhIQfA9PoIbnqw18IHDG0j9WncvjvcviBDOvw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})