import React, { useState } from 'react';
import vinAPI from './api/vinfetch';
import './App.css';

const Info = (props) => {
  return (
    <div>
      <p>
        {props.info}
      </p>
    </div>
  );
};

function App() {
  const [vin, setVin] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const _handleOnChange = (e) => {
    setVin(e.target.value);
  }

  const _handleKeyDown = (e) => {  
    if (e.key === 'Enter') {
      vinAPI.getVinById(vin).then(data => {
        setData(data);
      })
      .catch(err => {
        setData('');
        setError(err);
      });
    }
  }

  return (
    <div className="App">
      <div>
        <label style={{paddingRight: 20}}>Enter your VIN number:</label>
        <input type="text" value={vin} onChange={_handleOnChange} onKeyDown={_handleKeyDown}/>
      </div>
      <div>
        <Info info={data}/>
      </div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default App;
