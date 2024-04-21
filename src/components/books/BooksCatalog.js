import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  ApiRentBook,
  ApiBookCatalog,
  ApiReturnBook,
} from "../../services/ApiCall";

export default function MediaCard() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const handleSubmitRent = (value) => {
    const data = {
      id: value,
    };
    ApiRentBook(data);
    console.log(value);
  };

  const handleSubmitReturn = (value) => {
    const data = {
      id: value,
    };
    ApiReturnBook(data);
    console.log(value);
  };
  useEffect(() => {
    const fetchBooks = async () => {
      const apiCall = await ApiBookCatalog();
      const response = await apiCall;
      setData(response.data["$values"]);
      return response;
    };

    fetchBooks();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg"
              title="green iguana"
            />
            <CardContent sx={{ height: 180 }}>
              <Typography gutterBottom variant="h5" component="div">
                <p>{item.title}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* <p>id: {item.id}</p> */}
                <p>Author: {item.author}</p>
                <p>Genero:{item.genre}</p>
                <p>Cantidad:{item.inventory.quantity}</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleSubmitRent(item.id)}
                size="small"
                variant="contained"
              >
                Rentar
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleSubmitReturn(item.id)}
              >
                Devolver
              </Button>
            </CardActions>
          </Card>
          <br />
        </div>
      ))}
    </>
  );
}
