import React from "react";
import MenuItems from "./MenuItems";
import './Menu.css'
function Menu() {
  const items = [
    {label : "Home" , link : "/" },
    {label : "All jobs" , link : "/all-jobs" },
    {label : "Add job" , link : "/add-job" }
  ];
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="row justify-content-center ">
          <ul className="menu d-flex justify-content-center align-items-center">
            {items.map((item) => (
              <MenuItems caption={item.label} link={item.link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
