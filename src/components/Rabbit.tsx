
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import styles from './Rabbit.module.css';

function Rabbit() {
  function handleLoad(spline: Application) {
    const rabbit = spline.findObjectByName('Bunny Avatar');

    if (rabbit) {
      console.log('Rabbit connected:', rabbit.name);
    }
  }

  return (
    <div className={styles.rabbit}>
      <Spline
        scene="https://prod.spline.design/T2-gIfBY8qgCq0yY/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Rabbit;
