import React, { useState, useEffect } from "react";
// import {
//   Navbar,
//   Container,
//   Brand,
//   Nav,
//   Image,
//   Col,
//   InputGroup,
//   FormControl,
//   Table,
//   Card,
// } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import {useLocation} from "react-dom";

import axios from "axios";

export default function Search() {
  //const { state } = useLocation();

  const [SearchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/users/teacher", {
        city:city,
        
      })
      .then((res) => {
        if (res.data.length > 0) setSearchData(res.data);
        else setSearchData([]);
        if (res.data !== "User not found") {
        }
      })
      .catch((err) => {});
  }, []);

  return SearchData.length > 0 ? (
    <div>
      <Card striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>fullName</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {SearchData.map((item) => {
            return (
              <tr key={item._id}>
                <td> </td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
               
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </Card>
    </div>
  ) : (
    <span className="spanPeople">No People Found</span>
  );
}
