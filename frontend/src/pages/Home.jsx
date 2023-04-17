import React from 'react';
import bloodLogo from '../images/hosp.svg';
import bloodBag from '../images/blood.jpg';
import donor from '../images/blood1.jpg';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BloodtypeSharpIcon from '@mui/icons-material/BloodtypeSharp';

const BloodDonation = () => {
  return (
    <>
      <div className='blood-donation-container' style={{ background: 'radial-gradient(circle, rgba(158,0,0,0.8883928571428571) 0%, rgba(0,0,0,0.9780287114845938) 90%)', paddingTop: '50px' ,height: '874px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: '64px', color: '#fff' }}>Blood Donation</h1>
          <BloodtypeSharpIcon sx={{ fontSize: 40, color: '#fff' }} />
        </div>
          <p style={{ color: '#fff', fontSize: '24px', lineHeight: '40px', textAlign: 'center' }}>
          Blood donation is a voluntary procedure that can help save the lives of others. Donated blood is used to help people who have lost blood due to injury or surgery, people with blood disorders such as anemia or sickle cell disease, and those undergoing cancer treatments. One donation can save up to three lives.
          </p>
           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', alignContent: "center ", margin: '50px 0' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={bloodBag}
              title="Donate"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Donate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By donating blood, you can help save up to three lives. Your blood can be used to help people who have lost blood due to injury or surgery, people with blood disorders such as anemia or sickle cell disease, and those undergoing cancer treatments
              </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to='/Donate'><Button size="large" variant="contained">Donate</Button></Link>
            </CardActions>
          </Card>
          <div style={{ width: '450px', height: '450px' }}>
            <img src={bloodLogo} alt='Blood logo' style={{ width: '100%', height: '100%' }} />
          </div>
          <Card sx={{ maxWidth: 345 }}>
         `` <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={bloodBag}
              title="Donate"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Receive
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A blood transfusion is a routine medical procedure in which donated blood is provided to you through a narrow tube placed within a vein in your arm. This potentially life-saving procedure can help replace blood lost due to surgery or injury.
              </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to='/Receive'><Button size="large" variant="contained">Recieve</Button></Link>
            </CardActions>
          </Card>
          </Card>
          </div>
          </div>
          </>
  )
};
          
export default BloodDonation;