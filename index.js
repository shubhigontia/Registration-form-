function validateForm() {
    var x = document.forms["email"]["psw"]["psw-repeat"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
