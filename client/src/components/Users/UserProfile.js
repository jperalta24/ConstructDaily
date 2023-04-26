import React, { useState } from 'react';
// import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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
  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
  //   return <Navigate to="/profile"/>;
  // }

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
    <div>
    <div className="flex-row justify-center mb-3">
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Viewing {Auth.getProfile().data.name}'s Profile
      </h2>
      </div>
      {user._id && <ProjectList userId={user._id} />}
    </div>
  );
};

export default UserProfile;
