import React from "react";
import "../css/Register.css";
export default function StepTwodata() {
  function getFile() {
    document.getElementById("upfile").click();
  }
  return (
    <div className="tab">
      <div className="profilepic">
        <input id="profilepic" type="file" name="upfile" value="" />
      </div>
      <input type="date" placeholder="DOB" className="input_field" />
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
    </div>
  );
}
