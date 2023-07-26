import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import { useSelector } from 'react-redux';

const generatePage = (pageName, userRole) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    if (
      (userRole === 'admin' &&
        (pageName === 'AdminHome' ||
          pageName === 'usermanagement' ||
          pageName === 'postmanagement')) || // Add 'postmanagement' check for admin
      (userRole !== 'admin' &&
        pageName !== 'AdminHome' &&
        pageName !== 'usermanagement' &&
        pageName !== 'postmanagement') // Add 'postmanagement' check for non-admin
    ) {
      return React.createElement(component());
    } else {
      return <NotFound />;
    }
  } catch (error) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, id } = useParams();
  const { auth } = useSelector((state) => state);

  let pageName = '';

  if (auth.token) {
    if (id) {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}`;
    }
  }

  return generatePage(pageName, localStorage.getItem('role')); // Pass the user's role to generatePage
};

export default PageRender;
