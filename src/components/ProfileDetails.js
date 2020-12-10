  
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const ProfileDetails = (props) => {
  console.log(props.match.params.userID);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${props.match.params.userID}`
    )
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }, [props.match.params.userID]);

  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center", margin: "5rem auto" }}>
        <Spinner animation="border" />{" "}
      </div>
    );
  }

  return (
    <div>
      <h1> {user.name} </h1>
      <h1> {user.email} </h1>
      <h1> {user.phone} </h1>
      <h1> {user.address.city} </h1>
      <h1> {user && user.address && user.address.city} </h1>
    </div>
  );
};

export default ProfileDetails;
