import React, { useState } from "react";

function Form() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isVisuble: true,
    mode: "",
    favCar: "",
  });
  function OnchangeHandler(event) {
    // console.log(event.target.name);
    // console.log(event.target.value)
    const { value, type, checked, name } = event.target;
    setformdata((previesdata) => ({
      ...previesdata,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(formdata);
  }

  function submitHandler(event){
     event.preventDefault();
      console.log("final data printing .............")
      console.log(formdata);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstname"
          onChange={OnchangeHandler}
          placeholder="First Name "
          value={formdata.firstname}
        />
        <br />

        <input
          type="text"
          name="lastname"
          onChange={OnchangeHandler}
          placeholder="Last Name "
          value={formdata.lastname}
        />

        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={OnchangeHandler}
          value={formdata.email}
        />
        <br />
        <textarea
          placeholder="Enter you comments"
          onChange={OnchangeHandler}
          value={formdata.comments}
          name="comments"
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={OnchangeHandler}
          name="isVisuble"
          checked={formdata.isVisuble}
          id="isVisuble"
        />
        <label htmlFor="isVisuble">Accept terms and conditions...</label>
        {/* <p>isVisuble:{formdata.isVisuble.toString()}</p> */}

        <input
          type="radio"
          onChange={OnchangeHandler}
          name="mode"
          value="online-mode"
          id="online-mode"
          checked={formdata.mode === "online-mode"}
        />
        <label htmlFor="online-mode">online mode</label>
        <input
          type="radio"
          onChange={OnchangeHandler}
          name="mode"
          value="offline-mode"
          id="offline-mode"
          checked={formdata.mode === "offline-mode"}
        />
        <label htmlFor="offline-mode">offline-mode</label>

        <select
          name="favCar"
          id="favCar"
          onChange={OnchangeHandler}
          value={formdata.value}
        >
          <option value="bugati">bugati</option>
          <option value="farari">farari</option>
          <option value="Nano">Nano</option>
          <option value="Tharrr">Tharrr</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
