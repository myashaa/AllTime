export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const CATALOG: Product[] = [
  {
    id: 1,
    name: 'Rolex Submariner',
    description: 'Легендарные дайверские часы с автоподзаводом. Водонепроницаемость 300м, керамический безель.',
    price: 45000,
    image: 'https://static.alltime.ru/obj/catalog/watch/slava/img/normal2020/2800900-300-2409.jpg',
  },
  {
    id: 2,
    name: 'Omega Speedmaster',
    description: 'Знаменитые «лунные» часы, первые побывавшие на Луне. Хронограф, ручной завод.',
    price: 32000,
    image: 'https://static.alltime.ru/obj/catalog/watch/seiko/img/normal2020/SPB103.jpg',
  },
  {
    id: 3,
    name: 'Casio G-Shock',
    description: 'Сверхпрочные цифровые часы с ударопрочным корпусом. 20-ти бар водонепроницаемость.',
    price: 15000,
    image: 'https://static.alltime.ru/obj/catalog/watch/maserati/img/normal2020/R8823118010.jpg',
  },
  {
    id: 4,
    name: 'Seiko Presage',
    description: 'Японские механические часы с сапфировым стеклом. Классический дизайн с открытой задней крышкой.',
    price: 85000,
    image: 'https://static.alltime.ru/obj/catalog/watch/agelocer/img/normal2020/5815A5-R.jpg',
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    description: 'Умные часы с функцией ECG и отслеживанием активности. Always-On дисплей, iOS интеграция.',
    price: 26000,
    image: 'https://static.alltime.ru/obj/catalog/watch/rodania/img/normal2020/R18053.jpg',
  },
];
