const inputs = document.querySelectorAll(".input");

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : 'robertwburke@icloud.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}



function focusFunc() {
    
    let parent = this.parentNode;
    parent.classList.add("focus");
    
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    alert("jeff")
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });