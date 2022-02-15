import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Routes } from './routes/routes';
import './index.css'


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
