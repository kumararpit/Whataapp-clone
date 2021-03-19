import React from "react";
import "../css/Register.css";
function Login() {
  var current_tab = 0;
  showtab(current_tab);
  function showtab(current_tab) {
    var x = document.getElementsByClassName("tab");
    console.log(x);
    x[current_tab].style.display = "block";
    if (current_tab === 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("nextBtn").style.display = "inline";
    }
    if (current_tab === x.length - 1) {
      document.getElementById("nextBtn").innerHTML = "SignUp";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
  }
  return (
    <div className="screen1">
      <div className="resigtration">
        <div className="left_form">
          <form
            className="form_upload"
            action="upload"
            method="post"
            encType="multipart/form-data"
          >
            <h1>Create Account</h1>
            <span id="tag_line">Let's come closer to your loved ones</span>
            <p className="tab">
              <input
                type="text"
                className="input_field"
                placeholder="name"
                onInput="this.className=''"
              />
              <input
                type="email"
                placeholder="email"
                className="input_field"
                onInput="this.className=''"
              />
              <input
                type="password"
                placeholder="password"
                className="input_field"
                onInput="this.className=''"
              />
            </p>
            <p className="tab">
              <input type="file" name="upfile" value="" />
              <input
                type="date"
                placeholder="DOB"
                className="input_field"
                onInput="this.className=''"
              />
              <select className="input_field">
                <option value="">Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>

              <textarea
                placeholder="Tell us about yourself"
                className="input_field"
                onInput="this.className=''"
              />
            </p>
            <div className="register_buttons">
              <button type="button" id="prevBtn" onclick="nextPrev(-1)">
                Previous
              </button>
              <button type="button" id="nextBtn" onclick="nextPrev(1)">
                Next
              </button>
            </div>
          </form>
        </div>
        <div className="right_form">
          <div className="login_prev">
            <span className="login_prev_info">already a member</span>
            <button>Login</button>
          </div>
          <div className="girl_png" />
        </div>
      </div>
    </div>
  );
}

export default Login;
