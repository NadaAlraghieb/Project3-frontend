import {Nav,NavDropdown} from 'react-bootstrap'
import Layout from './Layout';
import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <>
    
    <nav className="navbar navbar-expand-lg ">
      <div className=" container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <span className="nav1 ms-2"> My teacher </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="nav1 navbar-nav ms-auto">
         
           

            <li className="nav-item">
              <Link href="/teachers">
                <a
                  className={
                    "nav1 nav-link " + `${router.pathname === "/teachers" ? "active" : ""}`
                  }
                  aria-current="page"
                >
               Teachers
                </a>
              </Link>
            </li>


            <li className="nav-item">
              <Link href="/signin">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/signin" ? "active" : ""}`
                  }
                >
                  SignIn
                </a>
              </Link>
            </li>

            
           
           
           
            <li className="nav1 nav-item">
            <NavDropdown className="nav1 nav-item" title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item  eventKey="4.1">
          <Link href="/profile">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/profile" ? "active" : ""}`
                  }
                >
              profile
                </a>
              </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
          <Link href="/signin">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/signin" ? "active" : ""}`
                  }
                >
              Log Out
                </a>
              </Link>
          </NavDropdown.Item>
         
         </NavDropdown>   
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;