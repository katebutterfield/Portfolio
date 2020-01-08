import React from "react";

function validatePass(){
  var password = document.getElementById("pswd").value;
  var value = "rockandscroll";
  var url = "http://www.katebutterfield.com";

    if(password==value)
    {
      window.location.replace("http://katebutterfield.com/entelo-conveyiq");
    } else {
      alert("Oops, wrong password! Contact me to view this project.");
    }
}


const Password = () => (
  <div className="passform">
    <h3>Enter a Password</h3>
    <input id="pswd" type="text" placeholder="Enter Password"/>
      <button id="enter" type="submit" onClick={validatePass}>SUBMIT</button>
  </div>
)


export default Password
