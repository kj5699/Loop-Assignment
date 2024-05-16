import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';


const LazyEndorsemnetOverview = React.lazy(() => import('./sections/Endorsements'));
const RoutesWrapper = () => {
  return (
    <Routes>
      <Route exact  path="/" element={<Dashboard />} >
          <Route path="" element={ <LazyEndorsemnetOverview />} />       
      </Route>
  </Routes>
  )
};
export default RoutesWrapper;