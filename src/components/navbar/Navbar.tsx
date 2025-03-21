'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>France Souveraine</div>
            <ul className={styles.navLinks}>
                <li><Link href={"/"}>Acceuil</Link></li>
                <li><Link href={"/archives"}>Archives</Link></li>
                <li className={styles.dropdown}>
                    <a href="#journal" onClick={toggleDropdown}>Journal Officiel</a>
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li><a href="#nomination">Nominations</a></li>
                        </ul>
                    )}
                </li>
            </ul>
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            {isMenuOpen && (
                <div className={styles.fullscreenMenu}>
                    <div className={styles.closeButton} onClick={toggleMenu}>×</div>
                    <ul className={styles.menuLinks}>
                        <li><Link href={"/"}>Acceuil</Link></li>
                        <li><Link href={"/archives"}>Archives</Link></li>
                        <li className={styles.dropdown}>
                            <a href="#journal" onClick={toggleDropdown}>Journal Officiel</a>
                            {isDropdownOpen && (
                                <ul className={styles.dropdownMenu}>
                                    <li><a href="#nomination">Nominations</a></li>
                                </ul>
                            )}
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
