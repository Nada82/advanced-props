import React from 'react'; 

 
function FullName(props) {
    return (
      <div >
        Full Name : {props.name}
      </div>
    );
  }
FullName.defaultProps={
    name:"HARRY POTTER",}

export default FullName;
