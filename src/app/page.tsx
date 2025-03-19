import styles from "./page.module.css";
import Navbar from "../components/navbar/Navbar";
// Utilisez un chemin relatif correct

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Navbar />
        <div className={styles.hero}>


          <div className={styles.content}>
            <h1>La France Souveraine : Document Fondateur</h1>
            <p className={styles.p}>Prenez connaissance des documents officiels de La France souveraine</p>
            <div className={styles.flexContainer}>


              <p className={styles.p}>Le document fondateur de La France souveraine est le document officiel qui a été signé par les membres fondateurs de La France souveraine. Ce document est la base de la constitution de La France souveraine.</p>
              <button className={styles.downloadButton}><a href="https://www.france-souveraine.fr/assets/proclamation-et-ordonnance.pdf">Acceder au document</a></button>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}
