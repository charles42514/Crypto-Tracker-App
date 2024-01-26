import { ThemeProvider } from '@emotion/react';
import { AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const Header = () => {

    const { currency, setCurrency } = CryptoState();

    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark'
        }
    });

    return (
        <ThemeProvider theme={darkTheme} >
            <>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Link to='/' style={{ textDecoration: 'none' }} >
                            <Typography variant="h6" style={{
                                flex: 1,
                                color: "gold",
                                fontFamily: "Montserrat",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }} >
                                Crypto Hunter 
                            </Typography>
                        </Link>

                        <Select
                            variant="outlined"
                            style={{ width: 100, height: 40, marginLeft: 630 }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"} >USD</MenuItem>
                            <MenuItem value={"INR"} >INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
            </>
        </ThemeProvider>

    )
}

export default Header;
