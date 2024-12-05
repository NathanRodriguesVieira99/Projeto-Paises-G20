import React from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import './styles.css';

export const HamburguerMenu = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div>
      <button className="hamburger-menu" onClick={toggleSidebar}>
        {isSidebarOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
    </div>
  );
};
