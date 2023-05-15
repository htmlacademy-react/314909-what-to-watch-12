export const Path = {
  MainPage: '/',
  Login: '/login',
  Films: {
    MainPage: 'films/:id/',
    Review: 'review'
  },
  PlayerPage: 'player/:id',
  MyList: 'filmlist',
  NotFoundPage: '*'
} as const;
