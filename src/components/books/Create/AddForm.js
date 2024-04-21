import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { ApiBookAdd } from "../../../services/ApiCall";

export default function AddBooksForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    const data = {
      title: title,
      author: author,
      genre: genre,
      quantity,
      quantity,
    };
    ApiBookAdd(data);
  };
  //   useEffect(() => {
  //     console.log(title);
  //     console.log(author);
  //     console.log(genre);
  //     console.log(quantity);
  //   }, [title, author, genre, quantity]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Titulo</InputLabel>
        <Input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Autor</InputLabel>
        <Input
          type="text"
          name="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-disabled">Genero</InputLabel>
        <Input
          type="text"
          name="Genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <FormHelperText>required</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Cantidad</InputLabel>
        <Input
          id="component-error"
          type="text"
          name="Genre"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Guardar
      </Button>
    </Box>
  );
}
