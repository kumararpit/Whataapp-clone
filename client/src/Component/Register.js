import React, { useState } from "react";
import axios from "axios";
// import StepOnedata from "./StepOnedata";
// import StepTwodata from "./StepTwodata";
import "../css/Register.css";
export default function Register() {
  // const [step, setstep] = useState(1);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const nextstep = (step) => {
  //   console.log(step);
  //   setstep(++step);
  //   if (step === 2) {
  //     document.getElementById("nextBtn").innerHTML = "Sign Up";
  //   }
  // };
  // const prevstep = (step) => {
  //   setstep(--step);
  //   if (step === 1) document.getElementById("nextBtn").innerHTML = "Next";
  //   console.log(step);
  // };
  // function Switchcase(step) {
  //   switch (step) {
  //     case 1:
  //       return <StepOnedata name={name} email={email} password={password} />;
  //     case 2:
  //       return (
  //         <StepTwodata
  //         // nextstep={step}
  //         //  prevstep={step}
  //         />
  //       );
  //     default:
  //       return null;
  //   }
  // }
  async function handleSubmit(event) {
    event.preventDefault();
    // const user = {
    //   name: { name },
    //   email: { email },
    //   password: { password },
    // };
    await axios
      .post("http://localhost:5000/api/user", { name, email, password })
      .then((res) => console.log(name));
  }
  return (
    <div className="screen1">
      <div className="resigtration">
        <div className="left_form">
          {/* {Switchcase(step)} */}
          <div className="steponeform">
            <h1>Create Account</h1>
            <span id="tag_line">Let's come closer to your loved ones</span>
            <form className="formdata" onSubmit={handleSubmit}>
              <div className="tab">
                <input
                  type="text"
                  className="input_field"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="email"
                  className="input_field"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  className="input_field"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="register_buttons">
                {/* <button type="button" id="prevBtn">
              Previous
            </button> */}
                <button type="button" type="submit" id="nextBtn">
                  Next
                </button>
              </div>
            </form>
          </div>
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
