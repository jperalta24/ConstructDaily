import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import ProjectList from '../Projects/ProjectList';

const UserProfile = () => {
  const { name: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { name: userParam },
    onCompleted: (queryData) => {
      console.log("Query result:", queryData);
    }
  });

  const user = data?.me || data?.user || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center mb-3 profile-page">
        <Col xs={12} className="text-center p-3 mb-5">
          <h2>{Auth.getProfile().data.name}'s Profile</h2>
        </Col>
      </Row>
      {user._id && <ProjectList userId={user._id} />}
    </Container>
  );
};


export default UserProfile;
