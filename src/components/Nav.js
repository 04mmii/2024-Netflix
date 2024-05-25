import React, { useEffect, useState } from 'react';
import "./Nav.css";

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

  return (
    <nav className={`nav ${show && "nav__block"}`}>
        <img
            alt='Netflix logo'
            src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
            className='nav__logo'
            onClick={() => window.location.reload()} 
        />
        <img 
            alt="User logged"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            className='nav__avatar'
        />
    </nav>
    )
}
