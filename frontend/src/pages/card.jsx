import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './cards.css'

const CustomCard = ({ title, bloodGroup, locality, contact }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(contact);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 2000);
  };

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
          <button onClick={handleCopyClick} style={{ marginLeft: '8px' }}>
            Copy
          </button>
        </Typography>
      </CardContent>
      {showSnackbar && (
        <div className="snackbar">Text copied!</div>
      )}
    </Card>
  );
};

export default CustomCard;
