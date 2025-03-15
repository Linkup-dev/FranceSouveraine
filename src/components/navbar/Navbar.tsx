'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>France Souveraine</div>
            <ul className={styles.navLinks}>
                <li><a href="#home">Acceuil</a></li>
                <li><a href="#services">Archives</a></li>
                <li className={styles.dropdown}>
                    <a href="#journal" onClick={toggleDropdown}>Journal Officiel</a>
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li><a href="#nomination">Nomination</a></li>
                        </ul>
                    )}
                </li>
            </ul>
            <div className={styles.burger}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>

        </nav>
    );
};

export default Navbar;
