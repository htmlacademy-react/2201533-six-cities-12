export const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Room: '/offer/:id',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
