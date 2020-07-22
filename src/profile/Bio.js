import React from 'react'; 
ReactHeader.defaultProps = {
  bio:  "Auror",
};

function Bio(props) {
    return (
      <div >
        {props.bio}
      </div>
    );
  }

export default Bio;
