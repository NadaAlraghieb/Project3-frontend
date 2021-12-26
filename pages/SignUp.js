import Head from "next/head";
import Link from "next/link";
import axios from "axios"
import { useState } from "react";

// export async function getStaticProps(context){
//   const res = await fetch("/register")
//   const data = await res.json()

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [cf_password, setConfirmPassword] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      city: city,
      phoneNumber: phoneNumber,
      education: education,
      cf_password: cf_password,
     // courses: courses,
    };
    axios
      .post("http://localhost:5000/users/register", data)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("users", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //axios or fetch post call to backend

  return (
    <div class="signUp container"  style={{margin:"60px"}}>
      <div class="row gutters">
      <div class="col-xl-4 " style={{margin:"60px"}}>
      <div class="card h-100">
	<div class="card-body">
      {/* <Head>
        <title>Register Page</title>
      </Head> */}
      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">FullName</label>
          <input
          className="form-control"
            type="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
          className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf_password">Confirm Password</label>
          <input
          className="form-control"
            type="password"
            name="confirmPassword"
            value={cf_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">City</label>
          <input
          className="form-control"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone Number</label>
          <input
          className="form-control"
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Education</label>
          <input
          className="form-control"
            type="text"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        
        <div class="form-check">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                             Teacher
                     </label>
                  </div>
               <div class="form-check">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                     Student
                  </label>
              </div>
           
        
              <a href="/signin">
        <button type="submit" className="btn btn-dark w-100">
        
          Register
          
        </button>
        </a>
        <p className="my-2">
          Already have an account?
          <Link href="/signin"><a style={{color: 'crimson'}}>Login Now</a></Link>
        </p>
      </form>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}
export default Register;
