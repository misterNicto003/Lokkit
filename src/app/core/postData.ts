import { Post } from './models/post.models';

export const postsData: Post[] = [
  {
    _id: 1234,
    authorId: 123,
    name: '',
    description: '',
    title: 'О природе',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Природа — это величайший источник вдохновения для человека. Горы, леса, реки и океаны дарят нам не только красоту, но и жизненно важные ресурсы. Забота о природе — это обязанность каждого, ведь только так мы сможем сохранить планету для будущих поколений.',
    image:
      'https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 0,
    comments: ['Отличный пост!', 'Спасибо за информацию.'],
    createdAt: '2025-02-24T12:00:00Z',
    tags: ['природа', 'пейзажи', 'спорт'],
  },
  {
    _id: 5678,
    authorId: 123,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О технологиях',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Современные технологии стремительно меняют нашу жизнь. Искусственный интеллект, виртуальная реальность и интернет вещей уже стали частью повседневности. Однако важно помнить, что технологии должны служить людям, а не заменять человеческое взаимодействие.',
    image:
      'https://plus.unsplash.com/premium_photo-1738604140980-e757acee730c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 20,
    comments: ['Интересно!', 'Продолжайте в том же духе.'],
    createdAt: '2024-07-02T14:30:00Z',
    tags: ['пейзажи', 'спорт', 'мир', 'машины'],
  },
  {
    _id: 9101112,
    authorId: 123,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О книгах',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Книги — это окно в другой мир. Они позволяют нам путешествовать во времени, узнавать новые культуры и погружаться в удивительные истории. Чтение развивает воображение, улучшает память и помогает лучше понимать окружающий мир.',
    image:
      'https://images.unsplash.com/photo-1738471743329-b50393cf6319?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 10,
    comments: ['Классно!', 'Жду новых постов.'],
    createdAt: '2025-02-22T09:15:00Z',
    tags: ['спорт', 'мир', 'машины', 'frontend'],
  },
  {
    _id: 13141516,
    authorId: 123,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О путешествиях',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Путешествия — это не только способ отдохнуть, но и возможность узнать что-то новое. Каждая страна, каждый город имеет свою уникальную историю и культуру. Путешествия расширяют кругозор и помогают взглянуть на мир с другой стороны.',
    image:
      'https://plus.unsplash.com/premium_photo-1712685912272-96569030d1d7?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 25,
    comments: ['Отлично!', 'Спасибо за полезный контент.'],
    createdAt: '2025-01-04T16:45:00Z',
    tags: ['#пейзажи', '#спорт', 'мир', 'машины', 'frontend'],
  },
  {
    _id: 17181920,
    authorId: 456,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О здоровье',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Здоровье — это самое ценное, что у нас есть. Правильное питание, регулярные физические нагрузки и достаточный сон — вот основные составляющие здорового образа жизни. Не забывайте заботиться о себе, ведь здоровье невозможно купить.',
    image:
      'https://images.unsplash.com/photo-1737403428945-c584529b7b17?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 30,
    comments: ['Супер!', 'Очень интересно.'],
    createdAt: '2025-01-05T11:00:00Z',
    tags: ['природа', 'пейзажи', 'мир'],
  },
  {
    _id: 21222324,
    authorId: 456,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О музыке',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Музыка — это универсальный язык, который понятен каждому. Она может вдохновлять, успокаивать или заряжать энергией. Независимо от жанра, музыка имеет огромное влияние на наше настроение и эмоциональное состояние.',
    image:
      'https://plus.unsplash.com/premium_photo-1723107368034-8c3752667e8e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 0,
    comments: ['Круто!', 'Продолжайте радовать нас.'],
    createdAt: '2025-01-06T13:20:00Z',
    tags: ['спорт', 'машины'],
  },
  {
    _id: 25262728,
    authorId: 456,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О дружбе',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Дружба — это одно из самых важных чувств в жизни человека. Настоящие друзья всегда поддержат в трудную минуту и разделят радость. Дружба строится на доверии, взаимопонимании и искренности.',
    image:
      'https://images.unsplash.com/photo-1619389136796-ebf6a39d507c?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 22,
    comments: ['Отличная работа!', 'Спасибо за пост.'],
    createdAt: '2025-01-07T10:10:00Z',
    tags: ['програмирование', 'frontend'],
  },
  {
    _id: 29303132,
    authorId: 456,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О науке',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Наука — это двигатель прогресса. Благодаря научным открытиям человечество смогло достичь невероятных высот. Однако наука — это не только технологии, но и стремление к познанию мира, в котором мы живем.',
    image:
      'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 0,
    comments: ['Интересный материал!', 'Спасибо за информацию.'],
    createdAt: '2025-01-08T17:00:00Z',
    tags: ['спорт', 'програмирование', 'frontend'],
  },
  {
    _id: 33343536,
    authorId: 456,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О искусстве',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Искусство — это способ выразить свои чувства и мысли. Оно может быть красивым, грустным, вдохновляющим или провокационным. Искусство помогает нам лучше понимать себя и окружающий мир.',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 28,
    comments: ['Отличный пост!', 'Очень полезно.'],
    createdAt: '2025-01-09T08:45:00Z',
    tags: ['програмирование', 'frontend'],
  },
  {
    _id: 37383940,
    authorId: 789,
    name: 'mister',
    description: 'Product Designer, slothUI',
    title: 'О мечтах',
    avatarImg:
      'https://s3-alpha-sig.figma.com/img/b858/1a3a/8f9a19b6eec05845c18e07081f487330?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q321w6y7NoHbOiCIw2IDkJlJDO~xgpWmPph87uayarE1ji93D0MBUudIPedGlQjNPfVefvmSXbzOhH5m9JGFxsxsV0SyYcgjI5KydN4WrUrNWWp9zdoAk5ZlSZ~1PMZwaEvWmcw945n6RXly5WBT5Lk4RzIkGmPBgdSyxP6aV3zA6BA28mEzID--Y5E203lwXXeTIJmseY~ID9AIPxoXdpwxPptHZWNTVmw00OmyM68ohzV3Lqgv~FDkeGln6FiW0yZEdhHolbTlZR8Rz8e3wRTK5px4M8BoE~YFkt0kbKWsYSH-2f9Xj70wm0jDRb9MD8mORS7MPJjYHAFpmhZ59g__',
    content:
      'Мечты — это то, что движет нами вперед. Они дают нам цель и мотивацию для достижения новых высот. Не бойтесь мечтать, ведь именно мечты делают нашу жизнь яркой и насыщенной.',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 0,
    comments: ['Супер!', 'Спасибо за интересный контент.'],
    createdAt: '2025-01-10T15:30:00Z',
    tags: ['природа', 'пейзажи', 'програмирование', 'frontend'],
  },
];
