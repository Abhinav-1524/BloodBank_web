import React, { useState } from 'react';
import axios from 'axios';
import Card from './card.jsx';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

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
    <div className='rec' style={{ 
      background:  'radial-gradient(circle, rgba(158,0,0,0.8883928571428571) 0%, rgba(0,0,0,0.9780287114845938) 90%)',
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <form onSubmit={handleSubmit} style={{ 
          backgroundColor: '#fff', 
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
          marginRight: '20px'
        }}>
          <FormControl>
            <FormLabel id="bloodGroup-label">Blood Group:</FormLabel>
            <RadioGroup 
              aria-labelledby="bloodGroup-label" 
              name="bloodGroup" 
              value={blood_group} 
              onChange={(event) => setblood_group(event.target.value)}
              style={{ display: 'flex', flexDirection: 'column' }}
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
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Locality:
              <input type="text" value={locality} onChange={(event) => setLocality(event.target.value)} />
            </label>
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
      <div style={{ display: 'grid', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {donors.map((donor) => (
          <Card
            key={donor.id}
            title={donor.name}
            description={`Blood Group: ${donor.blood_group}, Locality: ${donor.locality} , contact: ${donor.contact}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Receive;
