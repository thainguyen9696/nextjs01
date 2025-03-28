import React from "react";
import Link from "next/link";
import "../styles/menu.scss"; // Import SCSS file

const Menu: React.FC = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <Link href="/">Home</Link>
                </li>
                <li className="menu__item">
                    <Link href="/products">3D Products</Link>
                </li>
                <li className="menu__item">
                    <Link href="/services">3D Printing Services</Link>
                </li>
                <li className="menu__item">
                    <Link href="/recommendations">Recommendations</Link>
                </li>
                <li className="menu__item">
                    <Link href="/contact">Contact</Link>
                </li>
                <li className="menu__item">
                    <Link href="/about">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
