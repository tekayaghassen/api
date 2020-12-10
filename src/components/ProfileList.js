
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";

const ProfileList = ({ users }) => {
  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileList;