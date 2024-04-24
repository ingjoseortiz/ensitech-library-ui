import * as React from "react";
import { useState, useEffect } from "react";
//mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
//custom components
import { ApiBookAdd } from "../../../services/ApiCall";
import { Typography } from "@mui/material";

export default function AddBooksForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    const data = {
      title: title,
      author: author,
      genre: genre,
      quantity,
    };
    if (title == "" || author == "" || quantity == "" || genre == "") {
    } else {
      const response = await ApiBookAdd(data).then((response) => {
        setData(response);
        setTitle("");
        setAuthor("");
        setGenre("");
        setQuantity("");
        setTimeout(() => {
          setData("");
        }, 3000);
      });
    }
  };
  // useEffect(() => {
  //   console.log(data.data);
  // }, [data]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Agregar nuevo libro</h2>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Titulo</InputLabel>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Autor</InputLabel>
        <Input
          type="text"
          name="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-disabled">Genero</InputLabel>
        <Input
          type="text"
          name="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Cantidad</InputLabel>
        <Input
          id="component-error"
          type="number"
          name="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </FormControl>
      <br />
      <FormControl variant="standard">
        <Button variant="contained" onClick={handleSubmit}>
          Guardar
        </Button>
      </FormControl>
      <br />
      {data.data?.title && (
        <FormControl variant="standard">
          <Typography id="message">
            Libro: {JSON.stringify(data.data.title)}
          </Typography>
          <Typography>ha sido creado con exito!</Typography>
        </FormControl>
      )}
    </Box>
  );
}
