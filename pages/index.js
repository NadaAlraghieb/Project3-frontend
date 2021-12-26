import { Card } from "react-bootstrap";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Photo from './image/te1.jpeg'

import { Carousel,CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useRouter } from "next/router";

// import Image from "next/image";
export default function Home() {
  const router = useRouter();
  return (
    <div className="container pt-4" style={{backgroundColor:"#3b4757"}}>
      <div className="row">
        <hr />
 <Carousel className="homepage">
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Photo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dedicated experts</h3>
      <p>We have professional experts who are ready to help you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Variety of subjects</h3>
      <p>We offer over 150 subjects and skills to choose from.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Good fit or refund</h3>
      <p>We guarantee that you will find the right teacher otherwise we’ll refund you..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<CardGroup >
  <Card style={{marginTop:"40px"}}>
    <Card.Img variant="top" src="https://www.modarby.com/content/images/home/meetonetoone.svg" style={{width:"300px", height:"300px"}}/>
    <Card.Body>
      <Card.Title>Real results</Card.Title>
      <Card.Text>
      Private lessons with expert tutors give you the opportunity to improve your skills faster and get better results.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{marginTop:"40px"}}>
    <Card.Img variant="top" src="https://www.modarby.com/content/images/home/savetime.svg" style={{width:"300px", height:"300px"}}/>
    <Card.Body>
      <Card.Title>Technology helps</Card.Title>
      <Card.Text>
      Find experts of your choice online, meet anywhere in the country, online or in-person whenever it suits you.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{marginTop:"40px"}}>
    <Card.Img variant="top" src="https://www.modarby.com/content/images/home/stressless.svg" style={{width:"300px", height:"300px"}} />
    <Card.Body>
      <Card.Title>The right fit</Card.Title>
      <Card.Text>
      More qualified tutors than anywhere else, ready to help.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
<br/>
  
<br/>
    <div class="container">
<div class="row gutters">

<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" >
<div class="card h-100" style={{marginTop:"40px"}}>
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
          
                <img className="rounded" src="https://tse1.mm.bing.net/th?id=OIP.N_tr8AaSDfpkRXVHQK_h_wHaD1&pid=Api&P=0&w=357&h=186" height={250} width={250} alt="Maxwell Admin"/>
          
      	</div>
        <Link href="/math">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/math" ? "active" : ""}`
                  }
                >
             
              
				<h5 class="user-name">Math Course</h5>
        </a>
              </Link>
			
			</div>
		
		</div>
	</div>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" >
<div class="card h-100" style={{marginTop:"40px"}}>
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
                <img className="rounded" src="https://tse1.mm.bing.net/th?id=OIP.o3SNlN8iT1zUWzUNmLKDIQHaE8&pid=Api&P=0&w=264&h=177" height={250} width={250} alt="Maxwell Admin"/>
				</div>
        <Link href="/computer">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/computer" ? "active" : ""}`
                  }
                >
             
              
				<h5 class="user-name">Computer science Course</h5>
        </a>
              </Link>
			</div>
		
		</div>
	</div>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" >
<div class="card h-100" style={{marginTop:"40px"}}>
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
                <img className="rounded" src="https://tse3.mm.bing.net/th?id=OIP.cDG83KlbI1kDKvPWIPK7EAHaE8&pid=Api&P=0&w=241&h=162" height={250} width={250} alt="Maxwell Admin"/>
				</div>
        <Link href="/electrical_engineering">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/electrical_engineering" ? "active" : ""}`
                  }
                >
             
              
				<h5 class="user-name">Electrical Engineering Course</h5>
        </a>
              </Link>
			
			</div>
		
		</div>
	</div>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" >
<div class="card h-100" style={{marginTop:"40px"}}>
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
                <img className="rounded" src="https://tse2.mm.bing.net/th?id=OIP.KPOTlvIBSi3Hc311zI7sHQHaEK&pid=Api&P=0&w=313&h=177" height={250} width={250} alt="Maxwell Admin"/>
				</div>
				<Link href="/english">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/english" ? "active" : ""}`
                  }
                >
             
              
				<h5 class="user-name">English Course</h5>
        </a>
              </Link>
			
			</div>
		
		</div>
	</div>
</div>
</div>
</div>
</div>

</div>
    </div>

  );
}