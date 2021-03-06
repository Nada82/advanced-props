import React from 'react'; 
import FullName from './FullName.js';
import Bio from './Bio.js';
import Profession from './Profession.js';



const Picture = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Profile() {
return (
  <div>
      <Picture> 
        <img src="https://i.pinimg.com/originals/a1/a1/a4/a1a1a43bded2719e539f73cbe87ebe50.jpg" width="400px" height="300px" 
        className="img" alt="hp">
        </img>
      </Picture>
      <FullName> </FullName>
      <Bio></Bio>
      <Profession></Profession>
  </div>
  );
}

export default Profile;
