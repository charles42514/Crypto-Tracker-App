import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import Carousel from './Carousel';

const Banner = () => {
    const taglineSyles = {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }

    const containerStyle = {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    };

    const bannerStyle = {
        backgroundImage: 'url(./banner2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        textAlign: 'center',
        color: '#fff',
        height: '300px',
    };

    return (
        <Container style={containerStyle} >
            <Paper style={bannerStyle} >
                <div style={taglineSyles} >
                <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
                </div>
                <Carousel/>
            </Paper  >
        </Container>

    )
}

export default Banner