import React from "react";
import MenuItems from "./MenuItems";
import './Menu.css'
function Menu() {
  const items = ["Home", "All jobs", "Add jobs"];
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="row justify-content-center ">
          <ul className="menu d-flex justify-content-center ">
            {items.map((item) => (
              <MenuItems caption={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
