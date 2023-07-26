import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = (props) => {
  const firstLogin = localStorage.getItem('firstLogin');
  const userRole = localStorage.getItem('role'); // Get the user's role from local storage
  return firstLogin ? (
    (userRole === 'admin' &&
      (props.path !== '/AdminHome' && props.path !== '/usermanagement' && props.path !== '/postmanagement')) || // Add 'postmanagement' check for admin
    (userRole !== 'admin' &&
      props.path !== '/AdminHome' &&
      props.path !== '/usermanagement' &&
      props.path !== '/postmanagement') ? ( // Add 'postmanagement' check for non-admin
      <Route {...props} />
    ) : (
      <Redirect to="/" />
    )
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRouter;
