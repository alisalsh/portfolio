
export type CasePhone = {
  id: string;
  screens: string[];
};

export type CaseData = {
  id: string;
  title: string;
  description: string;
  link: string;
  phoneLayout: 'crossed' | 'straight' | 'offset';
  phones: CasePhone[];
  steps: string[];
};

export const cases: CaseData[] = [
  {
    id: 'p2p-offer',

    title: 'P2P-ОФФЕР',

    description:
      'Придумала сценарий создания оффера на покупку или продажу USDT для P2P-сервиса',

    link: 'https://www.behance.net/gallery/258860781/sozdanie-P2P-offera-vmobilnom-prilozhenii',

    phoneLayout: 'crossed',

    phones: [
      {
        id: 'phone-left',
        screens: [
          '/images/case1/left-1.webp',
          '/images/case1/left-2.webp',],
      },
      {
        id: 'phone-right',
        screens: [
          '/images/case1/right-1.webp',
          '/images/case1/right-2.webp',],
      },
    ],

    steps: [
      'Изучила рынок',
      'Спроектировала сценарий оффера',
      'Разработала дизайн-систему',
      'Протестировала прототип, выявила проблему',
      'Переработала виджет ввода суммы',
      'Передала макеты для разработки',
    ],
  },

  {
  id: 'second-case',
  title: 'ФЛОУ ПОКУПКИ БИЛЕТОВ',
  description: 'Спроектировала UX на сайте океанариума так, чтобы эмоция вела к покупке билета',
  link: 'https://www.behance.net/gallery/258861101/dizajn-koncept-pokupka-biletov-v-okeanarium',
  phoneLayout: 'offset',

  phones: [
    {
      id: 'phone-left',
      screens: [
        '/images/case2/left-1.webp',
        '/images/case2/left-2.webp',
      ],
    },
    {
      id: 'phone-right',
      screens: [
        '/images/case2/right-1.webp',
        '/images/case2/right-2.webp',
      ],
    },
  ],

  steps: [
    'Изучила рынок',
    'Спроектировала сценарий покупки билета',
    'Создала дизайн-систему',
  ],
}
];
