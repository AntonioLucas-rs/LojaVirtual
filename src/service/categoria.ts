export type CategoriaItem =   {
  id: number;
  title: string;
  quantidade: number;
  imageUrl: any;
}


export const categoria: CategoriaItem[] = [
  {
    id: 1,
    title: 'Roupas',
    quantidade: 21,
     imageUrl: [
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
    ],
  },
  {
    id: 2,
    title: 'Sapatos',
    quantidade: 43,
     imageUrl: [
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
    ],
  },

  {
    id: 3,
    title: 'Bolsas',
    quantidade: 23,
     imageUrl: [
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
    ],
  },
  {
    id: 4,
    title: 'Lingerie',
    quantidade: 23,
     imageUrl: [
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
      require('../assets/categoria/categoria_01.jpg'),
    ],
  },
];
