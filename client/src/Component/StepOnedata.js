import React from "react";
import "../css/Register.css";
export default function StepOnedata({ name, email, password, step }) {
  return (
    <div className="steponeform">
      <h1>Create Account</h1>
      <span id="tag_line">Let's come closer to your loved ones</span>
      <div className="tab">
        <input
          type="text"
          className="input_field"
          placeholder="name"
          value={name}
        />
        <input type="email" placeholder="email" className="input_field" />
        <input type="password" placeholder="password" className="input_field" />
      </div>
    </div>
  );
}
