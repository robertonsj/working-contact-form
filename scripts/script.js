//Selecting elements
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

//Handling form submission
form.onsubmit = (e) => {
  e.preventDefault();

  //Updating status text
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");


  // === Sending a Form Submission Asynchronously to a PHP File ===

  //This object is used to send HTTP requests and receive responses from a server
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;

      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
        statusTxt.style.color = "red";

      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}