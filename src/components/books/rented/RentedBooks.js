import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import {
  ApiRentedBooks,
  ApiBookCatalog,
  ApiReturnBook,
} from "../../../services/ApiCall";

export default function RentedBooks() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmitReturn = (value) => {
    const data = {
      id: value,
    };
    ApiReturnBook(data);
    setIsLoading(true);
    console.log(value);
  };

  useEffect(() => {
    if (isLoading) {
      const fetchBooks = async () => {
        const apiCall = await ApiRentedBooks();
        const response = await apiCall;
        setData(response.data);
        //setData(response.data["$values"]);
        return response;
      };
      fetchBooks();
      setIsLoading(false);
    }
    console.log(typeof data);
  }, [isLoading]);

  return (
    <>
      <h2>Libros rentados</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell align="right">Autor</TableCell>
              <TableCell align="right">Genero</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell align="right">{item.author}</TableCell>
                <TableCell align="right">{item.genre}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">
                  {/* {item.isActive ? "devolver" : "entregado"} */}

                  {!item.isReturned ? (
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleSubmitReturn(item.id)}
                    >
                      Devolver
                    </Button>
                  ) : (
                    "Entregado"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
