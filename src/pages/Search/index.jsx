import React from "react";
import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");

  const handleInputSearch = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <h1>Filtra tu Usuario</h1>
        <Grid item xs={12}>
          <TextField
            label="Busca tu usuario"
            fullWidth
            onChange={handleInputSearch}
            value={username}
          />
        </Grid>
        <Grid item xs={12}>
          <Link to={`/users/${username}`}>
            <Button variant="contained" fullWidth>
              Buscar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
