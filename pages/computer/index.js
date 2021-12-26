import React, {useState, useEffect } from "react";







const computerCourse = () => {

  const [users, setUser] = useState([]);

      useEffect(async () => {
        const resUsers = await fetch("http://localhost:5000/users/teacher/Computer");
        const users = await resUsers.json();
        setUser(users);
      }, []);
    
  return (

	<div className="math container">
	<div className="row gutters">
	{users.map((post) => (
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" key={post._id}>
	<div className="mathCard card h-100">
		<div className="card-body">
			<div className="account-settings">
				<div className="user-profile">
					<div className="user-avatar">
					<img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" height={100} width={100} alt="Maxwell Admin"/>
					</div>
					<h5 className="user"><b>Name:</b><br/> {post.fullName}</h5>
					<h6 className="user"><b>Email:</b><br/> {post.email}</h6>
					<h6 className="user"><b>phoneNumber:</b><br/> {post.phoneNumber}</h6>
					<h6 className="user"><b>City:</b><br/> {post.city}</h6>
					<h6 className="user"><b>Education:</b><br/> {post.education}</h6>
				</div>
				
			</div>
		</div>
	</div>
	</div>))}
	</div>
	</div>
  );
};

export default computerCourse;