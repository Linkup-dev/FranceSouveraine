'use client'
import React from 'react';

import styles from './page.module.css';
import Navbar from '@/components/navbar/Navbar';
import Head from 'next/head';
import Image from 'next/image';

const Archives = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Archives - France Souveraine</title>
                <meta name="description" content="Bienvenue dans les archives de France Souveraine." />
                <meta name="keywords" content="France, Souveraine, Archives, Histoire" />
                <meta name="author" content="France Souveraine" />
            </Head>
            <header>
                <Navbar />
                <div className={styles.hero}>


                    <div className={styles.content}>
                        <h1>La France Souveraine : Document Historique</h1>
                        <p className={styles.p}>Prenez connaissance des documents historiques de France souveraine</p>
                    </div>
                </div>
            </header>
            <main>
                <div className={styles.flexContainer}>
                    <h2>Document Historique</h2>

                    <p className={styles.p}>Le document fondateur de France souveraine est le document officiel qui a été signé par les membres fondateurs de France souveraine. Ce document est la base de la constitution de France souveraine.</p>
                    <p className={styles.p}>Vous pouvez consulter le document historique de France souveraine en cliquant sur le lien suivant : <a href="https://www.france-souveraine.fr/assets/proclamation-et-ordonnance.pdf">Proclamation et Ordonnance</a></p>
                    <Image src="/assets/Proclamation et Ordonnance1.jpg" alt="Proclamation et Ordonnance" width={800} height={1200} />
                    <Image src="/assets/b.jpg" alt="Proclamation et Ordonnance" width={800} height={1200} />
                    <Image src="/assets/c.jpg" alt="Proclamation et Ordonnance" width={800} height={1200} />
                    <Image src="/assets/d.jpg" alt="Proclamation et Ordonnance" width={800} height={1200} />
                </div>
            </main>
        </div>
    );

};

export default Archives;