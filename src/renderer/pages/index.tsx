import React from 'react';
import icon from '../../../assets/icon.svg';
import './index.css';

 const Index:React.FC<any> = (props) =>{

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>hhahhaha</h1>
      <textarea name="" id="" cols={30} rows={30}></textarea>
    </div>
  );
}

export default Index;

