import React, { useState } from "react";

function Homework() {
  const [formdata, setFormdata] = useState({
    first: "",
    last: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    checkbox: true,
    candidate: true,
    offers: true,
    mode: "",
  });

  function changeHandler(event) {
    const { value, name, type, checked } = event.target;
    console.log(formdata);
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="bg-white flex justify-center items-center px-36 py-10">
      <form
        action=""
        className="text-black py-7 shadow-xl border-white rounded-xl px-4 w-dvh"
      >
        {/* First Name */}
        <label htmlFor="first" className="cursor-pointer">
          First Name
        </label>
        <br />
        <input
          type="text"
          placeholder="Primary"
          onChange={changeHandler}
          name="first"
          id="first"
          value={formdata.first}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* Last Name */}
        <label htmlFor="last" className="cursor-pointer">
          Last Name
        </label>
        <br />
        <input
          type="text"
          placeholder="Gupta"
          onChange={changeHandler}
          name="last"
          id="last"
          value={formdata.last}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* Email */}
        <label htmlFor="email" className="cursor-pointer">
          Email
        </label>
        <br />
        <input
          type="email"
          placeholder="gupta@gmail.com"
          onChange={changeHandler}
          name="email"
          id="email"
          value={formdata.email}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* Country */}
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={formdata.country}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Pak">Pak</option>
        </select>
        <br />

        {/* Address */}
        <label htmlFor="address">Street Address</label>
        <br />
        <input
          type="text"
          placeholder="124 Rajiv Chowk"
          onChange={changeHandler}
          name="address"
          id="address"
          value={formdata.address}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* City */}
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          placeholder="City"
          onChange={changeHandler}
          name="city"
          id="city"
          value={formdata.city}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* State */}
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          placeholder="State"
          onChange={changeHandler}
          name="state"
          id="state"
          value={formdata.state}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        {/* Postcode */}
        <label htmlFor="postcode">Postcode</label>
        <br />
        <input
          type="number"
          placeholder="824103"
          onChange={changeHandler}
          name="postcode"
          id="postcode"
          value={formdata.postcode}
          className="w-full border border-gray-300 focus:border-blue-500 outline-none px-2 py-1.5 rounded"
        />
        <br />

        <p className="font-bold mb-2">By Email</p>

        <input
          type="checkbox"
          id="checkbox"
          checked={formdata.checkbox}
          name="checkbox"
          onChange={changeHandler}
          className="m-2"
        />
        <label htmlFor="checkbox">comments</label>
        <p className="text-gray-400 opacity-80 ml-2">
          get notifi when someone posts a comments on a posting{" "}
        </p>
        <br />
        <input
          type="checkbox"
          id="candidate"
          checked={formdata.candidate}
          name="candidate"
          onChange={changeHandler}
          className="m-2"
        />
        <label htmlFor="candidate">candidate</label>
        <p className="text-gray-400 opacity-80 ml-2">
          get notifi when someone posts a comments on a posting{" "}
        </p>
        <br />
        <input
          type="checkbox"
          id="offers"
          checked={formdata.offers}
          name="offers"
          onChange={changeHandler}
          className="m-2"
        />
        <label htmlFor="offers">offers</label>
        <p className="text-gray-400 opacity-80 ml-2">
          get notifi when someone posts a comments on a posting{" "}
        </p>
        <br />
        <p className="font-bold">Push Notifications</p>
        <p className="text-gray-400 opacity-80">
          These are deliverd via smas you mobile phone{" "}
        </p>
        <br />
        <input
          type="radio"
          name="mode"
          id="Everything"
          value="Everything"
          onChange={changeHandler}
          checked={formdata.mode === "Everything"}
        />
        <label htmlFor="Everything">Everything</label>
        <br />
        <input
          type="radio"
          name="mode"
          id="same as email"
          value="same as email"
          onChange={changeHandler}
          checked={formdata.mode === "same as email"}
        />
        <label htmlFor="same as email">same as email</label>
        <br />
        <input
          type="radio"
          name="mode"
          id="notification"
          value="notification"
          onChange={changeHandler}
          checked={formdata.mode === "notification "}
        />
        <label htmlFor="notification">No push notification</label>
      </form>
    </div>
  );
}

export default Homework;
