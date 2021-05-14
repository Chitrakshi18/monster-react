import React from "react";
import "./search.css";
import Form from "react-bootstrap/Form";

export const Search = ({ placeholder, handleChange }) => (
  // <input
  //   className="search"
  //   type="search"
  //   placeholder={placeholder}
  //   onChange={handleChange}
  // />
  <div className="search" style={{ width: "150px" }}>
    <Form.Control
      size="sm"
      onChange={handleChange}
      type="text"
      placeholder="Search monsters"
    />
  </div>
);

// And then as far as place holder goes we might want this to be dynamic because maybe another place that
// wants to use search box doesn't want the place holder to say search monsters let's say they want to
// search people or anything else we want places to be a prop that gets passed in and as we learn with
// our de structure we can d structure that prop off of the props object because all the props come in
// as one big objects.
// So let's D structure it off and then pass it into our place holder and then on change can be another
// prop that gets passed in which is a function under the name of handle change and we'll do structure
