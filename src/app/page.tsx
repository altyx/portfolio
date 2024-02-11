import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const imageStyle = {
  borderRadius: '12px',
  width: '100%',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <Image src="/banniere3.jpg" alt="banniere" width={1000} height={500} priority={false} style={imageStyle} />
        <div className={styles.name}>
          <h1>Je suis Samir</h1>
          <div>I&apos;m a full stack web and mobile developer based in Lille, France. I have a passion for creating scallable, robust and fast applications.</div>
        </div>
      </section>

      <section className={styles.projects_section}>
        <h2>Derniers projets</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <Image src="/wpc.png" alt="weplaycircular" width={480} height={300} style={imageStyle} />
            <div className={styles.title}>Décathlon - We Play Circular</div>
            <div>Une application web permettant de louer du matériel sportif.</div>
          </div>
          <div className={styles.project}>
            <Image src="/masteos.png" alt="weplaycircular" width={480} height={300} style={imageStyle} />
            <div className={styles.title}>Masteos</div>
            <div className={styles.description}>Une application web et mobile permettant d&apos;investir dans l&apos;immobilier locatif</div>
          </div>
        </div>

        <Link className={styles.see_all} href="/">Voir tous les projets</Link>
      </section>

      <section className={styles.skills_section}>
        <h2>Compétences</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>NodeJS</div>
          <div className={styles.skill}>JavaScript</div>
          <div className={styles.skill}>TypeScript</div>
          <div className={styles.skill}>React native</div>
        </div>
        <Link className={styles.see_all} href="/">Voir toutes les compétences</Link>
      </section>

      <footer className={styles.footer}>
        <div>Designed by Galileo AI</div>
        <div>Developped by Samir Moutawakil</div>
      </footer>
    </main>
  );
}
