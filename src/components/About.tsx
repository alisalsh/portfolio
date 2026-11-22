
import styles from './About.module.css';

const aboutCards = [
  {
    title: 'Стажировалась в Сбере\nкак UI/UX-дизайнер',
    description:
      'проектировала виджеты, занималась витриной привилегий в Премиальном обслуживании',
  },
  {
    title: 'Сотрудничала с сетью\nмагазинов ВкусВилл',
    description:
      'разработала дизайн упаковки, сейчас она в серийном производстве',
    link: 'https://www.behance.net/gallery/244537549/Packaging-Vkusvill',
  },
  {
    title: 'Сотрудничала\nс Web-3 продуктом',
    description:
      'разработала дизайн приложения, пользовательские сценарии; некоммерческий проект',
  },
  {
    title: 'Оформляла проекты\nи мероприятия ВУЗа',
    description:
      'а ещё занималась монтажом и редактурой в Дирекции мультимедиа Московского Политеха',
  },
];

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>( обо мне )</h2>

      <div className={styles.grid}>
        {aboutCards.map((card, index) => (
          <article className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <img
                className={styles.rabbit}
                src="/rabbit.svg"
                alt=""
              />

              <h3>{card.title}</h3>
            </div>

            <p className={styles.description}>{card.description}</p>

            {card.link && (
              <a
                className={styles.link}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Посмотреть проект ВкусВилл на Behance"
              >
                <img src="/deeplink.svg" alt="" />
              </a>
            )}
          </article>
        ))}
      </div>

      <div className={styles.contacts}>
        <a
          className={styles.contact}
          href="https://t.me/alisa_lssh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.contactIcon}>
            <img src="/deeplink.svg" alt="" />
          </span>
          <span>tg: @alisa_lssh</span>
        </a>

        <a
          className={styles.contact}
          href="mailto:alisa.lushina@gmail.com"
        >
          <span className={styles.contactIcon}>
            <img src="/deeplink.svg" alt="" />
          </span>
          <span>alisa.lushina@gmail.com</span>
        </a>
      </div>
    </section>
  );
}

export default About;
