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
  ApiDeleteBook,
} from "../../../services/ApiCall";
import { type } from "@testing-library/user-event/dist/type";

export default function MediaCard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = "";

  const handleSubmitRent = async (value) => {
    const data = {
      id: value,
    };
    console.log(value);
    const response = await ApiRentBook(data).then(() => {
      setIsLoading(true);
    });
  };

  const handleSubmitDelete = async (value) => {
    const data = {
      id: value,
    };
    const resp = await ApiDeleteBook(data).then((resp) => {
      setIsLoading(true);
      alert("libro eliminado con ID:" + data.id);
      console.log(resp);
    });
  };

  useEffect(() => {
    if (isLoading) {
      const fetchBooks = async () => {
        const apiCall = await ApiBookCatalog();
        const response = await apiCall;
        // setData(response.data);
        setData(response.data["$values"]);
        return response;
      };
      fetchBooks();
      setIsLoading(false);
    }
    console.log(typeof data);
  }, [isLoading]);

  return (
    <>
      <h2>Catalogo de Libros</h2>
      {data.map((item, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg"
              title="green iguana"
            />
            <CardContent sx={{ height: 130 }}>
              <Typography gutterBottom variant="h5">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Author: {item.author}
                <br />
                Genero:{item.genre}
                <br />
                {item.inventory.quantity == 0 ? (
                  <span style={{ color: "red" }}>Agotado</span>
                ) : (
                  `Cantidad: ${item.inventory.quantity}`
                )}
              </Typography>
            </CardContent>
            <CardActions>
              {!item.IsActive && (
                <Button
                  onClick={() => handleSubmitRent(item.id)}
                  size="small"
                  variant="contained"
                >
                  Rentar
                </Button>
              )}
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleSubmitDelete(item.id)}
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
          <br />
        </div>
      ))}
    </>
  );
}
