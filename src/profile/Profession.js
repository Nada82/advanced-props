import React from 'react'; 

 
function Profession(props) {
    return (
      <div>
        Profession: {props.profession}
      </div>
    );
  }
Profession.defaultProps={
    profession:"Wizard",}

    
export default Profession;
