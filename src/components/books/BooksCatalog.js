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
import { type } from "@testing-library/user-event/dist/type";

export default function MediaCard() {
  const [data, setData] = useState([]);

  const handleSubmitRent = (value) => {
    const data = {
      id: value,
    };
    console.log(value);
    ApiRentBook(data);
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
      setData(response.data);
      //setData(response.data["$values"]);
      return response;
    };

    fetchBooks();
    console.log(typeof data);
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
            <CardContent sx={{ height: 130 }}>
              <Typography gutterBottom variant="h5">
                {item.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Author: {item.Author}
                <br />
                Genero:{item.Genre}
                <br />
                Cantidad:{item.Quantity}
              </Typography>
            </CardContent>
            <CardActions>
              {!item.IsActive && (
                <Button
                  onClick={() => handleSubmitRent(item.Id)}
                  size="small"
                  variant="contained"
                >
                  Rentar
                </Button>
              )}
              {item.IsActive && (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleSubmitReturn(item.Id)}
                >
                  Devolver
                </Button>
              )}
            </CardActions>
          </Card>
          <br />
        </div>
      ))}
    </>
  );
}
