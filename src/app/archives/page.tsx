'use client'
import React from 'react';

import styles from './Archives.module.css';
import Navbar from '@/components/navbar/Navbar';

const Archives = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.title}>Archives</h1>
                <p className={styles.description}>
                    Bienvenue dans les archives de France Souveraine.
                </p>
                {/* Ajoutez ici le contenu spécifique aux archives */}
            </main>
        </div>
    );
};

export default Archives;