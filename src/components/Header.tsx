
import styles from './Header.module.css';
import Rabbit from './Rabbit';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>

        <div className={styles.experience}>
          <p>
            <strong>( 4 года )</strong>
            <span>в дизайне</span>
          </p>

          <p>
            <strong>( полгода )</strong>
            <span>в продуктовой <br/ > команде</span>
          </p>

          <p>
            <strong>( B2C, Web-3 )</strong>
            <span>продукты</span>
          </p>
        </div>

        <Rabbit />

        <div className={styles.title}>
          <h1>
            АЛИСА
            <br />
            ЛУШИНА
          </h1>

          <img
            src="/ui.svg"
            alt="UI/UX Designer"
            className={styles.ui}
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
