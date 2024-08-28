import React from "react";
import ConnectWalletButton from "./components/ConnectWalletButton";
import TeamBuildingPage from "./pages/TeamBuildingPage";
import Hero from "./components/Hero";
import Features from "./components/Features";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      {/* <Features></Features> */}
      {/* <Hero></Hero> */}
      <Button>YD</Button>
      <Button>YD</Button>
      <Button>YD</Button>
      <Button>YD</Button>
      <h1>Blockchain Team Building Platform</h1>
      <ConnectWalletButton />
      <TeamBuildingPage />
    </div>
  );
}

export default App;
