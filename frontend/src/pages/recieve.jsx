import React, { useState } from 'react';
import axios from 'axios';
import Card from './card.jsx';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import search from '../images/search-crowdfunder.svg'
import './recieve.css'
import { Typography } from '@material-ui/core';

function Receive() {
  const [blood_group, setblood_group] = useState('');
  const [locality, setLocality] = useState('');
  const [donors, setDonors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/donors/?blood_group=${blood_group}&locality=${locality}`);
      setDonors(response.data);
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };  

  return (
    <>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '93.2vh', 
        background: 'radial-gradient(circle, rgba(158,0,0,0.8883928571428571) 0%, rgba(0,0,0,0.9780287114845938) 90%)',
      }}>
        <h2>Search for the blood group required</h2>
        <div className='table'>
          <form onSubmit={handleSubmit} style={{ 
            backgroundColor: '#fff', 
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            marginRight: '20px',
            width: '400px',
            top: '50px',
          }}>
            <FormControl>
              <FormLabel id="bloodGroup-label">Blood Group:</FormLabel>
              <RadioGroup 
                aria-labelledby="bloodGroup-label" 
                name="bloodGroup" 
                value={blood_group} 
                onChange={(event) => setblood_group(event.target.value)}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value="A" control={<Radio size="large" />} label="A+" />
                <FormControlLabel value="B" control={<Radio size="large" />} label="B+" />
                <FormControlLabel value="AB" control={<Radio size="large" />} label="AB+" />
                <FormControlLabel value="O" control={<Radio size="large" />} label="O+" />
                <FormControlLabel value="a" control={<Radio size="large" />} label="A-" />
                <FormControlLabel value="b" control={<Radio size="large" />} label="B-" />
                <FormControlLabel value="ab" control={<Radio size="large" />} label="AB-" />
                <FormControlLabel value="o" control={<Radio size="large" />} label="O-" />

            </RadioGroup>
          </FormControl>
          <div style={{ margin: '20px 0' }}>
              Locality:
              <input type="text" value={locality} onChange={(event) => setLocality(event.target.value)} />
        
          </div>
          <button type="submit" style={{ 
            backgroundColor: '#4b6cb7', 
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',

        }}>Search</button>
      </form>
      <div className='cards'>
        {donors.map((donor) => (
          <Card
            key={donor.id}
            title={donor.name}
            bloodGroup={donor.blood_group}
            locality={donor.locality}
            contact={donor.contact}
          />


        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Receive;
