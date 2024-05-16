import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { connect } from 'react-redux';
import Enrollment from './sections/Endorsements';
import Dashboard from './pages/dashboard';



const RoutesWrapper = () => {
  return (
    <Routes>
      <Route exact  path="/" element={<Dashboard />} >
          <Route path="" element={ <Enrollment/>} />       
      </Route>
  </Routes>
  )
};
export default RoutesWrapper;
// const mapStateToProps = (state) => {
//   return {
//     user: state.auth.user,
//     isAuthenticated: state.auth.isAuthenticated,
//   };
// };

// export default connect(mapStateToProps)( RoutesWrapper)