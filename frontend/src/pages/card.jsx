import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, bloodGroup ,locality,contact}) => {


return (
    <Card sx={{ maxWidth: 345, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
      
    <CardContent sx={{ paddingBottom: '16px !important' }}>
    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
      {title}
    </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
      <span style={{ fontWeight: 'bold' }}>Blood Group:</span> {bloodGroup} <br />
      <span style={{ fontWeight: 'bold' }}>Locality:</span> {locality} <br />
      <span style={{ fontWeight: 'bold' }}>Contact:</span> {contact}
      </Typography>
    </CardContent>
    </Card>
);
};

export default CustomCard;