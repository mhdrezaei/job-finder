import React, { useContext, useEffect } from "react";
import MenuItems from "./MenuItems";
import './Menu.css'
import Context from "../../../context/context";
function Menu() {
  const {dark} = useContext(Context)
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.menu-div');
            const scrollTop = window.scrollY;
            scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  const items = [
    {label : "Home" , link : "/" },
    {label : "All jobs" , link : "/all-jobs" },
    {label : "Add job" , link : "/add-job" }
  ];
  return (
    <div className={!dark ? "menu-div col-md-12  light" : "menu-div col-md-12"}>
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
