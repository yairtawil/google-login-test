import * as React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <ul>
        <li><NavLink exact={true} to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>
);