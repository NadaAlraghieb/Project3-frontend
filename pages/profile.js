import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Style from '../styles/profile.modules.css'
const profile = () => {
  const [users, setUser] = useState([]);
  useEffect(async () => {
    const resUsers = await fetch(
      "http://localhost:5000/users/show/" + "61c808d8a4fd492a64a313e6"
    );
    const users = await resUsers.json();
    setUser(users);
  }, []);
  return (
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle"
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Maxwell Admin"
            />
               <span class="font-weight-bold">basic information</span><span class="text-black-50">...</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label></div>
                    <h6 className="card-title"> {users.fullName} </h6>
                </div>
                <div class="row mt-3">
                    <div  class="col-md-12"><label class="labels">Email address:</label></div>
                    <h6 className="card-title"> {users.email} </h6>
                    <div class="col-md-12"><label class="labels">City:</label></div>
                    <h6 className="card-title"> {users.city} </h6>
                    <div class="col-md-12"><label class="labels">Education:</label></div>
                    <h6 className="card-title"> {users.education} </h6>
                    <div class="col-md-12"><label class="labels">phoneNumber:</label></div>
                    <h6 className="card-title"> {users.phoneNumber} </h6>
                    <Link href={``}>
                <a className="btn btn-dark">Save</a>
              </Link>
            </div>
            </div>
            </div>
            </div>
            </div>
  );
};
export default profile;