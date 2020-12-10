import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const avatar = {
  background: "blue",
  borderRadius: "50%",
  color: "white",
  padding: "1rem",
  margin: "30px",
  textAlign: "center",
};

function toInitials(str) {
  return str
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: "100%", margin: "15px" }}>
      <div className="text-center m-4">
        <span style={avatar}> {toInitials(user.name)} </span>
      </div>

      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.address.city}</Card.Text>
        <Card.Text className="text-muted">{"@" + user.username}</Card.Text>
        <Button variant="secondary">
          <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
            Go To Profile
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
