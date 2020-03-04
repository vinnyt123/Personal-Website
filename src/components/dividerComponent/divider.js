import React from 'react';

//Includes
import './divider.css';

function Divider(props) {
  return (
    <header className='divider'>
        {props.text}
    </header>
  );
}

export default Divider;