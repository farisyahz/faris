import React from 'react';
import './Pictures.css';
import changeTitle from '../../changeTitle';

const Pictures = () => {
  changeTitle("Pictures | Faris Syahzani")
  return (
    <div className='pictures'>
      <h1>Pictures</h1>
      <div className="picture-list">
        <h2>Oops.. There is no pictures yet</h2>
      </div>
    </div>
  )
}

export default Pictures