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
            <h1>France Souveraine : Document Fondateur</h1>
            <p className={styles.p}>Prenez connaissance des documents officiels de France souveraine</p>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.flexContainer}>
          <h2>Document Fondateur</h2>

          <p>Le document fondateur de France souveraine est le document officiel qui a été signé par les membres fondateurs de France souveraine. Ce document est la base de la constitution de France souveraine.</p>
        </div>
        <iframe className={styles.pdf} src={"https://www.france-souveraine.fr/assets/proclamation-et-ordonnance.pdf"} width="100%" height="600px"></iframe>
      </main>
    </div>
  );
}
