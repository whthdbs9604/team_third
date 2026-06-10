import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      style={{ 
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out"
      }}
    >
      <h1>
        <Link to="/" className="header_link">
          <img className="logo_img" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="로고이미지" />
        </Link>
      </h1>
    </header>
  );
}