import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    blood_group: '',
    locality: '',
    contact: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8000/api/user/donors/';
    try {
      const response = await axios.post(url, formData);
      console.log('Form data submitted:', response.data);
      
    } catch (error) {
      console.error('Error submitting form data:', error);
      
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box
      component='form'
      noValidate
      sx={{
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'radial-gradient(circle, rgba(158,0,0,0.8883928571428571) 0%, rgba(0,0,0,0.9780287114845938) 90%)'
      }}
      id='registration-form'
      onSubmit={handleSubmit}
    >
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' value={formData.name} onChange={handleChange} />
      <TextField margin='normal' required fullWidth id='age' name='age' label='Age' value={formData.age} onChange={handleChange} />
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' value={formData.email} onChange={handleChange} />
      <TextField margin='normal' required fullWidth id='locality' name='locality' label='Locality' value={formData.locality} onChange={handleChange} />
      <FormControl component="fieldset" margin='normal' required fullWidth>
        <FormLabel component="legend">Blood Group</FormLabel>
        <RadioGroup
          row
          aria-label="blood-group"
          name="blood_group"
          value={formData.blood_group}  
          onChange={handleChange}
        >
          <FormControlLabel value="A" control={<Radio />} label="A+" />
          <FormControlLabel value="a" control={<Radio />} label="A-" />
          <FormControlLabel value="B" control={<Radio />} label="B+" />
          <FormControlLabel value="b" control={<Radio />} label="B-" />
          <FormControlLabel value="AB" control={<Radio />} label="AB+" />
          <FormControlLabel value="ab" control={<Radio />} label="AB-" />
          <FormControlLabel value="O" control={<Radio />} label="O+" />
          <FormControlLabel value="o" control={<Radio />} label="O-" />
        </RadioGroup>
      </FormControl>
      <TextField margin='normal' required fullWidth id='contact' name='contact' label='Contact' value={formData.contact} onChange={handleChange} />
      <Box textAlign='center'>  
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
    </Box>
  );
};

export default MyForm;
