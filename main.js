;(function () {
  "use strict"
  const forms = document.querySelectorAll(".requires-validation")
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()

// function validation() {
//   if (document.myform.email.value == "") {
//     //checking if the form is empty
//     document.getElementById("errors").innerHTML =
//       "Please enter a valid email address."
//     document.getElementById("email").style.border = "2px solid #D02035"
//     //displaying a message if the form is empty
//   } else {
//     //write to the browser console & simulate loading
//     console.log(document.myform.email.value)
//     document.getElementById("submit").value = "Submitting"
//     setTimeout("", 2000)
//     document.getElementById("thanks").style.display = "block"
//     document.getElementById("form").style.display = "none"
//   }
// }
// function update_status(interest) {
//   console.log(interest.value)
// }
