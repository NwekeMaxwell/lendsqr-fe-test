import React from "react";
import "./FilterBox.scss";

const FilterBox = () => {
  return (
    <div className="filterBox">
      {/* organization */}
      <div className="tag">
        <label htmlFor="title" className="text">
          Organization
        </label>
        <input
          placeholder="Select"
          id="title"
          type="text"
          className="input iArrowDown"
        />
      </div>
      {/* username */}
      <div className="tag">
        <label htmlFor="title" className="text">
          Username
        </label>
        <input
          placeholder="User"
          name="title"
          id="title"
          type="text"
          className="input"
        />
      </div>
      {/* email */}
      <div className="tag">
        <label htmlFor="email" className="text">
          Email
        </label>
        <input placeholder="Email" id="email" type="email" className="input" />
      </div>
      {/* date */}
      <div className="tag">
        <label htmlFor="Date" className="text">
          Date
        </label>
        <input
          placeholder="Date"
          id="Date"
          type="text"
          className="input iCalender"
        />
      </div>
      {/* phone number */}
      <div className="tag">
        <label htmlFor="phone" className="text">
          Phone Number
        </label>
        <input
          placeholder="Phone Number"
          id="phone"
          type="number"
          className="input"
        />
      </div>
      {/* status */}
      <div className="tag">
        <label htmlFor="status" className="text">
          Status
        </label>
        <input
          placeholder="Select"
          id="status"
          type="text"
          className="input iArrowDown"
        />
      </div>
      {/* buttons */}
      <div>
        <button className="btn">Reset</button>
        <button className="btn blue">filter</button>
      </div>
    </div>
  );
};

export default FilterBox;
