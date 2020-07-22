import React from 'react'; 

 
function Bio(props) {
    return (
      <div >
       Bio: {props.bio}
      </div>
    );
  }
  Bio.defaultProps={
    bio:"' I solemnly swear that i am up to no good'",}
export default Bio;
