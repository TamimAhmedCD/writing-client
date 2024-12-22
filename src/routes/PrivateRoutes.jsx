import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Home/Loading';
import { useContext } from 'react';
import authContext from '../context/AuthContext';
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation()
  
    if (loading) {
      return <Loading></Loading>
    }
    if (user && user?.email) {
      return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.any,
  }
export default PrivateRoutes;