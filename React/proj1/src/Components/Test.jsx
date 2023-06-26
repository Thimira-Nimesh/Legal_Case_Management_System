import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [listofclients, setlistofclients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/clients").then((response) => {
      setlistofclients(response.data);
    });
  }, []);

  return (
    <div>
      {listofclients.map((value, key) => {
        return (
          <div className="client">
            <div className="title">{value.Name}</div>
            <div className="body">{value.Address}</div>
            <div className="body1">{value.Contact}</div>
            <div className="body2">{value.Email}</div>
            <div className="body3">{value.Password}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
