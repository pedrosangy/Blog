// src/components/HeroSection.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeroSection({ bgImage }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar transparente */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: '#fff', textTransform: 'none' }}
          >
            Jesus Blog
          </Typography>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Conteúdo central: texto de apresentação e botão */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          px: 2,
        }}
      >
          <Typography variant="h3" gutterBottom>
            Bem-vindo ao <span style={{color: 'red',}}>Jesus</span> Blog
          </Typography>
        <Typography variant="h6" gutterBottom>
          Compartilhe seus pensamentos e inspire outros com seus artigos.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#81689D',
            color: '#fff',
            '&:hover': { bgcolor: '#6f5490' },
            textTransform: 'none',
          }}
          href="/new-article"
        >
          Criar Novo Artigo
        </Button>
      </Box>
    </Box>
  );
}
