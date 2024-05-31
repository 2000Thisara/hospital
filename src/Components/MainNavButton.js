// src/components/MainNavButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import './MainNavButton.css';

const MainNavButton = ({ label, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default MainNavButton;
