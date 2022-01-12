import React from 'react';
import ExploreSearch from '../components/explore/ExploreSearch';
import ExploreResults from '../components/explore/ExploreResults';
import '../scss/pages/explore.scss';
import '../scss/utility/body.scss';

function Explore() {
  return (
  <div className="page flex-row">
    <ExploreSearch/>
    <ExploreResults/>    
  </div>
  )
}

export default Explore
