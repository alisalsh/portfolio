
import { useState, type CSSProperties, type PointerEvent } from 'react';
import styles from './Artifacts.module.css';

type ArtifactItem = {
  id: string;
  image: string;
  className: string;
  depth: number;
  rotation: number;
};

const artifacts: ArtifactItem[] = [
  {
    id: 'packaging-1',
    image: '/images/artifacts/packging1.png',
    className: 'packagingOne',
    depth: 4,
    rotation: -13,
  },
    {
    id: 'packaging-2',
    image: '/images/artifacts/pizza.png',
    className: 'packagingTwo',
    depth: 5,
    rotation: -9,
  },
  {
    id: 'packaging-3',
    image: '/images/artifacts/packging2.png',
    className: 'packagingThree',
    depth: 8,
    rotation: -13,
  },
  {
    id: 'posterfolio',
    image: '/images/artifacts/posters.png',
    className: 'posterfolio',
    depth: 7,
    rotation: -8,
  },
  {
    id: 'guy',
    image: '/images/artifacts/3d.png',
    className: 'guy',
    depth: 4,
    rotation: -8,
  },
    {
    id: 'poster1',
    image: '/images/artifacts/print.png',
    className: 'poster',
    depth: 5,
    rotation: -8,
  },
      {
    id: 'poster2',
    image: '/images/artifacts/poster1.png',
    className: 'poster1',
    depth: 8,
    rotation: 18,
  },
    {
    id: 'book',
    image: '/images/artifacts/book.png',
    className: 'book',
    depth: 8,
    rotation: 18,
  },
      {
    id: 'pres',
    image: '/images/artifacts/pres.png',
    className: 'pres',
    depth: 4,
    rotation: 0,
  },
    {
    id: 'i1',
    image: '/images/artifacts/i1.png',
    className: 'i1',
    depth: 0,
    rotation: 0,
  },
      {
    id: 'i2',
    image: '/images/artifacts/i2.png',
    className: 'i2',
    depth: 0,
    rotation: 0,
  },
    {
    id: 'i3',
    image: '/images/artifacts/i2.png',
    className: 'i3',
    depth: 0,
    rotation: 40,
  },
{
    id: 'i5',
    image: '/images/artifacts/i1.png',
    className: 'i5',
    depth: 0,
    rotation: 0,
  },

  {
    id: 'i6',
    image: '/images/artifacts/i1.png',
    className: 'i6',
    depth: 0,
    rotation: 50,
  },
  
  
];

function Artifacts() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPointer({
      x: (x - 0.5) * 2,
      y: (y - 0.5) * 2,
    });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
  }

  return (
    <section className={styles.artifacts}>
      <div
        className={styles.playground}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        onPointerCancel={resetPointer}
      >
        <h2 className={styles.title}>( дизайн кладовая )</h2>

        <div className={styles.collage}>
          {artifacts.map((item) => {
            const itemStyle = {
              '--move-x': `${pointer.x * item.depth}px`,
              '--move-y': `${pointer.y * item.depth}px`,
              '--rotation': `${item.rotation}deg`,
            } as CSSProperties;

            return (
              <div
                className={`${styles.object} ${styles[item.className as keyof typeof styles]}`}
                key={item.id}
                style={itemStyle}
              >
                <img src={item.image} alt="" draggable="false" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Artifacts;
