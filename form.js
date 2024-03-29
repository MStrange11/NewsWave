document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // enable_links()
    var modal = new bootstrap.Modal(document.getElementById("signupModal"), {
      keyboard: false,
      backdrop: "static",
    });
    if (!localStorage.getItem("formSubmitted")) {
      modal.show();
    }
  }, 1000);

  var signupForm = document.getElementById("signupForm");

  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var contact = document.getElementById("contactNumber").value;
      var email = document.getElementById("email").value;
      var agreeCheckbox = document.getElementById("agree");

      if (!isValidUsername(username)) {
        showModalAlert(
          "Invalid Username. Please remove any special characters."
        );
        return;
      }
      if (!isValidPassword(password)) {
        showModalAlert(
          "Invalid Password. It must be 8 characters long, with at least one number, one special character, and one capital letter."
        );
        return;
      }
      if (!isValidEmail(email)) {
        showModalAlert("Invalid Email Address.");
        return;
      }
      if (!isValidContact(contact)) {
        showModalAlert("Invalid Contact Number.");
        return;
      }
      if (!agreeCheckbox.checked) {
        showModalAlert(
          "Please agree to the privacy policy and terms of conditions."
        );
        return;
      }

      // If all validations pass, submit the form
      localStorage.setItem("formSubmitted", true);
      dismissModal("signupModal");
      enable_links();
    });
});

function isValidUsername(username) {
  return /^[a-zA-Z0-9]+$/.test(username);
}

function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(password);
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isValidContact(contact) {
  return contact.length != 10;
}

function dismissModal(modalId) {
  var modal = document.getElementById(modalId);
  var bootstrapModal = bootstrap.Modal.getInstance(modal);
  if (bootstrapModal) {
    bootstrapModal.hide();
  }
}

function showModalAlert(message) {
  // Find the existing modal with id "error"
  var errorModal = document.getElementById("error");

  if (errorModal) {
    // Update the modal body text with the new message
    var modalBody = errorModal.querySelector(".modal-body");
    modalBody.textContent = message;

    // Show the modal
    var modalInstance = new bootstrap.Modal(document.getElementById("error"));
    modalInstance.show();
  } else {
    console.error("Error modal not found.");
  }
}

function enable_links() {
  const links = document.querySelectorAll(".links_enabled");

  for (let i of links) {
    i.classList.toggle("links_disabled");
  }
}
