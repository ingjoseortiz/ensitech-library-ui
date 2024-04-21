import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem title="Books Catalog" />
      <MenuItem title="Books Rented" />
    </div>
  );
};

export default Menu;
