import React from "react";
import { useParams } from "react-router-dom";

const MyProfile = () => {
  let { id } = useParams();
  return (
    <div className="profilepagecontainer">
      <div className="basicinfo">
        {" "}
        <h1>Username: {}</h1>
      </div>
      <div className="listofcases"></div>
    </div>
  );
};

export default MyProfile;
