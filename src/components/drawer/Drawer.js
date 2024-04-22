//React
import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
//Material ui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

//custom components
import LoginForm from "../login/login";
import BooksCatalog from "../books/Catalog/BooksCatalog.js";
import AddBooksForm from "../books/Create/AddForm.js";
import RentedBooks from "../books/rented/RentedBooks.js";

const drawerWidth = 200;

const DrawerLeft = () => {
  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      alert("Has cerrado la session.");
      window.location.href = "/";
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx="background-color: rgb(16, 20, 24);">
          <Typography variant="h6" noWrap component="div">
            Libreria Ensitech
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {/* <List>
          {["Login", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<AddRoundedIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AddRoundedIcon />}</ListItemIcon>
              <ListItemText>
                {localStorage.getItem("token") && (
                  <a onClick={handleLogout}>logout</a>
                )}
                {/* {!localStorage.getItem("token") && <a>login</a>} */}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AddRoundedIcon />}</ListItemIcon>
              <ListItemText>
                <a href="addbooksform">Agregar Libro</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AddRoundedIcon />}</ListItemIcon>
              <ListItemText>
                <a href="bookscatalog">Catalogo Libros</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AddRoundedIcon />}</ListItemIcon>
              <ListItemText>
                <a href="rentedbooks">Libros Rentados</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* <AddBooksForm></AddBooksForm> */}

        {/* <LoginForm></LoginForm> */}
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="bookscatalog" element={<BooksCatalog />} />
              <Route path="rentedbooks" element={<RentedBooks />} />
              <Route path="addbooksform" element={<AddBooksForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* <BooksCatalog></BooksCatalog> */}
      </Box>
    </Box>
  );
};

export default DrawerLeft;
