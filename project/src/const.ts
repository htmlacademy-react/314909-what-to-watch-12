export const Path = {
  Main: '/',
  SignIn: '/login',
  Films: {
    Main: 'films/:id/',
    Review: 'review'
  },
  Player: 'player/:id',
  FilmList: 'filmlist',
  NotFound: '*'
} as const;
