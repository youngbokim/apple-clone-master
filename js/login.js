function idFocus() {
  document.querySelector(".login_id").style =
    "border:1px solid rgb(0, 113, 227); background-color: white;";

  document.querySelector(".login_id p").style = "font-size: 12px; top: 8px; ";

  document.getElementById("login_id").style =
    "opacity: 1; width: 370px; height: 24px; top: 24px; left: 20px; ";
}

function idBlur() {
  var inputValue = document.getElementById("login_id").value;

  if (inputValue == "") {
    // inputValue에 아무것도 넣지 않았을때
    document.querySelector(".login_id p").style =
      "font-size: 17px; top: 18px; color: rgb(227,0,0);";

    document.querySelector(".id_alert").style = "display:block;";

    document.querySelector(".login_id").style =
      "border:1px solid rgb(227,0,0); background-color: rgb(255,242,244)";

    document.getElementById("login_id").style =
      "opacity: 0; width: 100%; top: 0px; left: 0px; background-color: rgb(255,242,244)";
  } else {
    document.querySelector(".id_alert").style = "display:none;";

    document.querySelector(".login_id").style =
      "border: 1px solid rgb(210, 210, 215); background-color: white; ";
  }
}

function pwFocus() {
  document.querySelector(".login_pw").style =
    "border:1px solid rgb(0, 113, 227); background-color: white;";

  document.querySelector(".login_pw p").style = "font-size: 12px; top: 8px; ";

  document.getElementById("login_pw").style =
    "opacity: 1; width: 370px; height: 24px; top: 24px; left: 20px; ";
}

function pwBlur() {
  var inputValue = document.getElementById("login_pw").value;

  if (inputValue == "") {
    // inputValue에 아무것도 넣지 않았을때
    document.querySelector(".login_pw p").style =
      "font-size: 17px; top: 18px; color: rgb(227,0,0);";

    document.querySelector(".pw_alert").style = "display:block;";

    document.querySelector(".login_pw").style =
      "border:1px solid rgb(227,0,0); background-color: rgb(255,242,244)";

    document.getElementById("login_pw").style =
      "opacity: 0; width: 100%; top: 0px; left: 0px; background-color: rgb(255,242,244)";
  } else {
    document.querySelector(".pw_alert").style = "display:none;";

    document.querySelector(".login_pw").style =
      "border: 1px solid rgb(210, 210, 215); background-color: white; ";
  }
}
