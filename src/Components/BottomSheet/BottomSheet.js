import React from "react";
import GInput from "../GInput/GInput";
import "./BottomSheet.scss";

export default function BottomSheet({ setData, setIsOpen }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    majorAndYear: "1",
    answer: "",
  });
  return (
    <div className="BottomSheetWrapper">
      <form
        className="BottomSheetWrapper__form"
        onSubmit={(e) => {
          e.preventDefault();
          setData(formData);
          setIsOpen(false);
        }}
      >
        <div className="BottomSheetWrapper__form--top">
          <img src="/assets/gdscLogo.png" />
          <h3>Register</h3>
          <p>Use your Shiv Nadar University Account</p>
        </div>
        <div className="BottomSheetWrapper__form--inputs">
          <GInput
            id="name"
            label="Name"
            pattern="([\w\W])+"
            setValue={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <GInput
            id="snuId"
            type="email"
            label="SNU Email Id"
            pattern="[a-z0-9._%+-]+@snu.edu.in$"
            setValue={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <select
            onChange={(e) =>
              setFormData({ ...formData, majorAndYear: e.target.value })
            }
          >
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
        <p className="BottomSheetWrapper__form--terms">
          For more details on past and upcoming events by GDSC, Follow us on our
          &nbsp;
          <a href="https://www.instagram.com/gdsc.snioe/">Instagram!</a>
        </p>
        <div className="BottomSheetWrapper__form--buttonContainer">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}
